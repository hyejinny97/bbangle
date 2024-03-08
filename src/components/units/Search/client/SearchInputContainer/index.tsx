'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAddRecentSearchKeywordMutation } from '@/components/units/Search/hooks/useAddRecentSearchKeywordMutation';
import { useDebounce } from '@/components/units/Search/hooks/useDebounce';
import SearchInput from '@/components/commons/inputs/SearchInput';
import AutoCompleteSearchContainer from '@/components/units/Search/client/AutoCompleteSearchContainer';

const SearchInputContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const [text, setText] = useState(query || '');
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const debouncedText = useDebounce<string>({ value: text, delay: 500 });

  const { mutate } = useAddRecentSearchKeywordMutation();

  useEffect(() => {
    const handleWindowClick = () => {
      setShowAutoComplete(false);
    };
    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  useEffect(() => {
    setText(query || '');
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setShowAutoComplete(true);
  };

  const handleInputEnter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('query', text);
    router.push('/search/products' + '?' + params.toString());

    mutate(text);
    setShowAutoComplete(false);
  };

  return (
    <div className="relative w-[92%] m-auto">
      <SearchInput
        value={text}
        onChange={handleInputChange}
        onEnter={handleInputEnter}
        placeholder="궁금한 상품을 찾아보세요!"
      />
      {showAutoComplete && (
        <div className="absolute z-[1] w-full">
          <AutoCompleteSearchContainer keyword={debouncedText} />
        </div>
      )}
    </div>
  );
};

export default SearchInputContainer;
