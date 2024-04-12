import PaddingWrapper from '@/shared/components/PaddingWrapper';
import RecentKeywordSection from '@/blocks/search/RecentKeywordSection';
import PopularKeywordSection from '@/blocks/search/PopularKeywordSection';

const SearchPage = () => (
  <>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <div className="text-gray-500 text-14 font-semibold leading-150 tracking-tight-2">
        최근 검색어
      </div>
      <RecentKeywordSection />
    </PaddingWrapper>
    <PaddingWrapper className="flex flex-col gap-[10px]">
      <div className="text-gray-500 text-14 font-semibold leading-150 tracking-tight-2">
        인기 검색어
      </div>
      <PopularKeywordSection />
    </PaddingWrapper>
  </>
);

export default SearchPage;
