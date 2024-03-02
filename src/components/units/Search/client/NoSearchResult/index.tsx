'use client';

import None from '@/commons/assets/sad_charac.svg';

const NoSearchResult = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-2">
      <None />
      <p className=" text-color-Gray500 text-center text-sm font-regular ">
        검색 결과가 없어요 <br /> 다른 키워드로 검색해보세요!
      </p>
    </div>
  );
};

export default NoSearchResult;
