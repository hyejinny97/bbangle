import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import FilterTab from '@/components/units/(main)/Products/client/FilterTab';
import ProductsTab from '@/components/units/(main)/Products/client/ProductsTab';

const Products = () => {
  return (
    <>
      <Header title="전체보기" />
      <ProductAndStoreTab />
      <div className="flex flex-wrap m-auto">
        <FilterTab />
        <ProductsTab />
      </div>
    </>
  );
};

export default Products;
