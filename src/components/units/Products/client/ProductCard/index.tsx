import TagSwiper from '@/components/units/Home/client/TagSwiper';
import { IProductsType } from '@/components/units/Home/types';
import Link from 'next/link';

interface ProductsCardProps {
    product: IProductsType;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
    return (
        <Link href="./products/:id" className="w-[48%]">
            <div
                className="w-full bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${product.thumbnail})` }}
            ></div>
            <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
                {product.storeName}
            </p>
            <h3 className="mb-1 text-xs font-normal text-color-Gray900">{product.title}</h3>
            <p className="mb-1 text-sm font-semibold text-color-Gray900">
                {product.price.toLocaleString()}원
            </p>
            <TagSwiper tag={product.tags} />
        </Link>
    );
};

export default ProductsCard;