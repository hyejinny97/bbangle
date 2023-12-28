import ProductsCard from '../ProductCard';

const ProductsList = () => {
    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
        </div>
    );
};

export default ProductsList;
