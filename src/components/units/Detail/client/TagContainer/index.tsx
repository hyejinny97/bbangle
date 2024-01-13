'use client';

interface ProductsProps {
    product: {
        id: number;
        productImg: string;
        storeImg: string;
        productName: string;
        storeName: string;
        tag: string[];
        orderDay: string[];
        price: number;
    };
}

const TagContainer: React.FC<ProductsProps> = ({ product }) => (
    <div className="flex gap-1 mb-4">
        {product.tag.map((item, index) => (
            <div
                key={index}
                className="w-auto  h-[21px] px-[6px]  bg-white rounded border border-solid border-gray-200 justify-center items-center gap-1 inline-flex"
            >
                <span className="text-neutral-500 text-[11px] font-normal font-['Pretendard'] ">
                    {item}
                </span>
            </div>
        ))}
    </div>
);

export default TagContainer;
