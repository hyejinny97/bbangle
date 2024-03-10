import { SkeletonProductCard } from './SkeletonProductCard';

export const SkeletonProductList = () => {
  return (
    <>
      <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-4">
        <SkeletonProductCard />
      </div>
      <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-4">
        <SkeletonProductCard />
      </div>
    </>
  );
};
