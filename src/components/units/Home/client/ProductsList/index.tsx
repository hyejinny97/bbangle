import ProductCard from '@/components/commons/card/ProductCard';
import API from '@/api';
import { IProductType } from '@/commons/types/productType';

const getBestProducts = async () => {
  try {
    const res = await fetch(`${API.serverUrl}/boards`, { cache: 'no-store' });
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
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
