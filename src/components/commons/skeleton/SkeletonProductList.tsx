import PaddingWrapper from '../PaddingWrapper';
import { SkeletonProductCard } from './SkeletonProductCard';

interface SkeletonProductListProps {
  row?: number; // 행 개수
  col?: number; // 열 개수
}

export const SkeletonProductList = ({ row = 3, col = 2 }: SkeletonProductListProps) => {
  return (
    <PaddingWrapper key={`row-${row}`} className="flex flex-wrap gap-x-[16px] gap-y-[16px] pb-1">
      {Array(row * col)
        .fill(0)
        .map((_, idx) => (
          <SkeletonProductCard key={idx} />
        ))}
    </PaddingWrapper>
  );
};
