'use client';

import { IProductType } from '@/commons/types/productType';
import Link from 'next/link';

import ProductImage from './ProductImage';
import ProductSummary from './ProductSummary';

interface ProductCardProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.boardId}`} className="relative">
      <ProductImage product={product} popular={popular} ranking={ranking} />
      <ProductSummary product={product} />
    </Link>
  );
};

export default ProductCard;
