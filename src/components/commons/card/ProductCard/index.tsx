import { IProductType } from '@/commons/types/productType';
import TagSwiper from '@/components/units/Home/client/TagSwiper';
import Link from 'next/link';

interface ProductCardProps {
    product: IProductType;
    popular?: boolean;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link href={`/products/${product.boardId}`} className="w-full">
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${product.thumbnail})` }}
            ></div>
            <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
                {product.storeName}
            </p>
            <h3 className="w-full mb-1 text-xs font-normal overflow-ellipsis whitespace-nowrap">
                {product.title}
            </h3>
            <p className="mb-1 text-sm font-medium text-color-Gray900 ">
                {product.price.toLocaleString()}원
            </p>
            {product.tags && <TagSwiper tag={product.tags} />}
        </Link>
    );
};

export default ProductCard;
