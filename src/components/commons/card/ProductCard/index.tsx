import { IProductType } from '@/commons/types/productType';
import TagSwiper from '@/components/units/Home/client/TagSwiper';
import Link from 'next/link';

interface ProductCardProps {
    product: IProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link href={`/products/${product.boardId}`} className="w-[48%]">
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${product.thumbnail})` }}
            ></div>
            <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
                {product.storeName}
            </p>
            <h3 className="mb-1 text-xs font-normal">{product.title}</h3>
            <p className="mb-1 text-sm font-medium text-color-Gray900 ">
                {product.price.toLocaleString()}원
            </p>
            <TagSwiper tag={product.tags} />
        </Link>
    );
};

export default ProductCard;
