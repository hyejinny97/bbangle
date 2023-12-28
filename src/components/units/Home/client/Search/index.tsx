'use client';

import SearchIcon from '@/components/units/Home/client/Search/assets/search.svg';

const Search = () => {
    return (
        <div className="w-[100%] px-4 py-2.5 bg-white justify-between items-center inline-flex gap-3">
            <h1 className="text-stone-500 text-sm font-medium font-['Pretendard'] leading-[21px]">
                LOGO
            </h1>
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-slate-100 rounded-[50px] justify-start items-center gap-1.5 flex cursor-pointer">
                <SearchIcon />
                <div className="text-stone-300 text-sm font-medium font-['Pretendard'] leading-[21px]">
                    궁금한 상품을 찾아보세요!
                </div>
            </div>
        </div>
    );
};

export default Search;
