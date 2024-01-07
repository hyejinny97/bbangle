import Link from 'next/link';
import ProductsList from '../client/ProductsList';

const ServerProducts = () => {
    return (
        <div className="w-full">
            <div className="w-[92%] h-14 m-auto py-2.5 justify-between items-end flex">
                <div className="text-2xl font-normal leading-9 text-[#9E9E9E]">Best</div>
                <Link href="/" className="text-stone-300 text-xs font-medium  leading-[18px]">
                    전체보기
                </Link>
            </div>
            <ProductsList />
        </div>
    );
};

export default ServerProducts;
