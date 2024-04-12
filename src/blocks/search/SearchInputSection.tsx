'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useAddRecentSearchKeywordMutation } from '@/domains/search/queries/useAddRecentSearchKeywordMutation';
import { useDebounce } from '@/domains/search/hooks/useDebounce';
import SearchInput from '@/domains/search/components/SearchInput';
import AutoCompleteSearchContainer from '@/domains/search/components/AutoCompleteSearchContainer';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import BackButton from '@/domains/search/components/BackButton';

const SEARCH_DETAIL_PAGE_PATHNAMES = ['/search/products', '/search/stores'];

const SearchInputSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isSearchDetailPage = SEARCH_DETAIL_PAGE_PATHNAMES.includes(pathname);
  const query = searchParams.get('query');

  const [text, setText] = useState(query || '');
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const debouncedText = useDebounce<string>({ value: text, delay: 300 });

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    params.set('query', text);
    router.push(`/search/products?${params.toString()}`);

    mutate(text);
    setShowAutoComplete(false);
  };

  return (
    <PaddingWrapper className="relative py-[10px]">
      <div className="relative flex items-center">
        {isSearchDetailPage && <BackButton />}
        <SearchInput
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="궁금한 상품을 찾아보세요!"
        />
        {showAutoComplete && (
          <div className="absolute top-full z-[1] w-full">
            <AutoCompleteSearchContainer keyword={debouncedText} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default SearchInputSection;
