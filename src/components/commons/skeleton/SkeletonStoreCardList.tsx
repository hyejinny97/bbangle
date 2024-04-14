import PaddingWrapper from '../PaddingWrapper';
import SkeletonStoreCard from './SkeletonStoreCard';

const SkeletonStoreList = () => (
  <PaddingWrapper className="gap-x-[16px] gap-y-[16px]">
    {Array(6)
      .fill(0)
      .map((item) => (
        <SkeletonStoreCard key={item} />
      ))}
  </PaddingWrapper>
);
export default SkeletonStoreList;
