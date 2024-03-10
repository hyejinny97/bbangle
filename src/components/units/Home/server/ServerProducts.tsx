import Link from 'next/link';
import ProductsList from '../client/ProductsList';
import { Suspense } from 'react';
import { SkeletonProductList } from '@/components/commons/skeleton/SkeletonProductList';
//import { IAllProductsType } from '@/commons/types/allProductsType';

const ServerProducts = async () => {
  return (
    <div className="w-full">
      <div className="w-[92%] h-14 m-auto py-2.5 justify-between items-end flex">
        <div className="text-2xl font-normal leading-9 text-color-Gray500">Best</div>
        <Link href="/products" className="text-color-Gray400 text-xs font-medium  leading-[18px]">
          전체보기
        </Link>
      </div>
      <Suspense fallback={<SkeletonProductList />}>
        <ProductsList />
      </Suspense>
    </div>
  );
};

export default ServerProducts;
