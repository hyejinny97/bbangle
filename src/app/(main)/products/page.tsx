import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTabWithCount from '@/components/units/(main)/client/ProductAndStoreTabWithCount';
import FilterTab from '@/components/units/(main)/Products/client/FilterTab';
import ProductsTab from '@/components/units/(main)/Products/client/ProductsTab';
import { Suspense } from 'react';

const Products = () => {
  return (
    <>
      <Header title="전체보기" />
      <Suspense>
        <ProductAndStoreTabWithCount />
      </Suspense>
      <FilterTab />
      <ProductsTab />
    </>
  );
};

export default Products;
