import { IProductType } from '@/commons/types/productType';
import TagSwiper from '@/components/units/Home/client/TagSwiper';

interface ProductSummaryProps {
  product: IProductType;
}

export const ProductSummary = ({ product }: ProductSummaryProps) => {
  return (
    <>
      <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
        {product?.storeName}
      </p>
      <h3 className="w-full mb-1 overflow-hidden text-xs font-normal overflow-ellipsis whitespace-nowrap">
        {product.title}
      </h3>
      <p className="mb-1 text-sm font-medium text-color-Gray900 ">
        {product.price.toLocaleString()}원
      </p>
      {product.tags && <TagSwiper tag={product.tags} />}
    </>
  );
};
