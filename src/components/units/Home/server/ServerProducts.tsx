import Link from 'next/link';
import ProductsList from '../client/ProductsList';
import * as API from '@/api';

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
