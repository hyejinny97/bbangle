import PaddingWrapper from '@/components/commons/PaddingWrapper';
import ProductCard from '@/components/commons/card/ProductCard';

const TEMP_PRODUCT = {
  boardId: 0,
  storeId: 0,
  storeName: 'string',
  thumbnail: 'string',
  title: 'string',
  price: 0,
  isBundled: false,
  isWished: false,
  tags: ['string'],
  view: 0
};

const WishProductList = () => {
  return (
    <PaddingWrapper className="grid grid-cols-2 gap-[16px]">
      <ProductCard product={TEMP_PRODUCT} />
      <ProductCard product={TEMP_PRODUCT} />
      <ProductCard product={TEMP_PRODUCT} />
      <ProductCard product={TEMP_PRODUCT} />
      <ProductCard product={TEMP_PRODUCT} />
      <ProductCard product={TEMP_PRODUCT} />
    </PaddingWrapper>
  );
};

export default WishProductList;
