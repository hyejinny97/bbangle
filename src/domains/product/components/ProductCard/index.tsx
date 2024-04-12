'use client';

import Link from 'next/link';

import { IProductType } from '@/commons/types/productType';
import ProductImage from '@/domains/product/components/ProductCard/ProductImage';
import ProductSummary from '@/domains/product/components/ProductCard/ProductSummary';

interface ProductCardProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => (
  <Link href={`/products/${product.boardId}`} className="relative">
    <ProductImage product={product} popular={popular} ranking={ranking} />
    <ProductSummary product={product} />
  </Link>
);

export default ProductCard;
