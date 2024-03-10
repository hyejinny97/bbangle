import ProductCard from '@/components/commons/card/ProductCard';
import API from '@/api';
import { IProductType } from '@/commons/types/productType';

const getBestProducts = async () => {
  const data = await API.get('/boards', { cache: 'no-store' });
  return data;
};

const ProductsList = async () => {
  const bestProducts = await getBestProducts();
  return (
    <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-4">
      {bestProducts?.content?.map((product: IProductType) => (
        <div key={String(product.boardId)} className="w-[48%]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
