import PaddingWrapper from '../PaddingWrapper';
import { SkeletonProductCard } from './SkeletonProductCard';

interface SkeletonProductListProps {
  row?: number; // 행 개수
  col?: number; // 열 개수
}
type GridType = {
  [key: string]: string;
};

const GRID_ROWS: GridType = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3'
};

const GRID_COLS: GridType = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3'
};

const SkeletonProductList = ({ row = 3, col = 2 }: SkeletonProductListProps) => (
  <PaddingWrapper className={`grid ${GRID_ROWS[row]} ${GRID_COLS[col]} gap-x-[16px] gap-y-[16px]`}>
    {Array.from(Array(row * col).keys()).map((item) => (
      <SkeletonProductCard key={item} />
    ))}
  </PaddingWrapper>
);
export default SkeletonProductList;
