import { PAGE_MAIN } from '@/domains/product/constants/pageParam';
import FilterTab from '@/domains/product/components/FilterTab';
import ProductsTab from '@/components/units/(main)/Products/client/ProductsTab';

const Products = () => {
  return (
    <>
      <FilterTab page={PAGE_MAIN} />
      <ProductsTab />
    </>
  );
};

export default Products;
