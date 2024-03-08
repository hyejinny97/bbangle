import Link from 'next/link';
import ProductsList from '../client/ProductsList';
import API from '@/api';
import { IAllProductsType } from '@/commons/types/allProductsType';

const getBestProducts = async () => {
  const data = await API.get<IAllProductsType>(`${API.serverUrl}/boards`, { cache: 'no-store' });
  return data;
};

const ServerProducts = async () => {
  const bestProducts = await getBestProducts();

  return (
    <div className="w-full">
      <div className="w-[92%] h-14 m-auto py-2.5 justify-between items-end flex">
        <div className="text-2xl font-normal leading-9 text-color-Gray500">Best</div>
        <Link href="/" className="text-color-Gray400 text-xs font-medium  leading-[18px]">
          전체보기
        </Link>
      </div>
      <ProductsList bestProducts={bestProducts} />
    </div>
  );
};

export default ServerProducts;
