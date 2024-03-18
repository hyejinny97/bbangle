'use client';

import SearchIcon from '@/components/units/Home/client/Search/assets/search.svg';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/search')}
      className="w-[92%] m-auto py-2.5 bg-color-White sticky top-0 z-[4999]"
    >
      <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-slate-100 rounded-[50px] justify-start items-center gap-1.5 flex cursor-pointer">
        <SearchIcon />
        <div className="text-color-Gray400 text-sm font-medium leading-[21px]">
          궁금한 상품을 찾아보세요!
        </div>
      </div>
    </div>
  );
};

export default Search;
