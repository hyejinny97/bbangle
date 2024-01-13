import TagSwiper from '@/components/units/Home/client/TagSwiper';
import Link from 'next/link';

interface ProductsCardProps {
    product: {
        id: number;
        category: string;
        productImg: string;
        productName: string;
        storeName: string;
        tag: string[];
        price: number;
    };
}

const ProductsCard = ({ product }: ProductsCardProps) => {
    return (
        <Link href="./" className="w-[48%]">
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${product.productImg})` }}
            ></div>
            {/* <div className="flex flex-wrap gap-1 mt-2 mb-1">
               
            </div> */}
            <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
                {product.storeName}
            </p>
            <h3 className="mb-1 text-xs font-normal text-color-Gray900">{product.productName}</h3>
            <p className="mb-1 text-sm font-semibold text-color-Gray900">
                {product.price.toLocaleString()}원
            </p>
            <TagSwiper tag={product.tag} />
        </Link>
    );
};

export default ProductsCard;
