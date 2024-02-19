'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useAddRecentSearchKeywordMutation } from '@/components/units/Search/hooks/useAddRecentSearchKeywordMutation';
import { useDebounce } from '@/components/units/Search/hooks/useDebounce';
import SearchInput from '@/components/commons/inputs/SearchInput';
import AutoCompleteSearchContainer from '@/components/units/Search/client/AutoCompleteSearchContainer';

const SearchInputContainer = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [text, setText] = useState(searchParams.get('query') || '');
    const debouncedText = useDebounce<string>({ value: text, delay: 500 });

    const { mutate } = useAddRecentSearchKeywordMutation();

    useEffect(() => {
        setText(searchParams.get('query') || '');
    }, [searchParams]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleInputEnter = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('query', text);
        router.push(pathname + '?' + params.toString());

        mutate(text);
    };

    return (
        <div className="relative w-[92%] m-auto">
            <SearchInput
                value={text}
                onChange={handleInputChange}
                onEnter={handleInputEnter}
                placeholder="궁금한 상품을 찾아보세요!"
            />
            <div className="absolute z-[1] w-full">
                <AutoCompleteSearchContainer keyword={debouncedText} />
            </div>
        </div>
    );
};

export default SearchInputContainer;
