import BestProducts from '../client/BestProduct';

function ServerBestProducts() {
    return (
        <div className="w-full border-b border-solid border-gray-100 py-[16px] ">
            <div className="w-[92%] m-auto">
                <div className="text-gray-800 text-sm mb-[10px] font-semibold">인기상품</div>
                <BestProducts />
            </div>
        </div>
    );
}

export default ServerBestProducts;
