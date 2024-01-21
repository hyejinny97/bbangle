import AllProducts from '../client/AllProduct';

function ServerAllProducts() {
    return (
        <div className="w-[92%] m-auto py-[16px]">
            <div className="text-gray-800 text-sm mb-[10px] font-semibold">전체상품</div>
            <AllProducts />
        </div>
    );
}

export default ServerAllProducts;
