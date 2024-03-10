'use client';

import { useRecoilState } from 'recoil';
import { priceTempState } from '@/components/units/(main)/Products/atoms';
import PriceInput from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/PriceInput';
import PriceSlide from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/PriceSlide';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

const PRICE_GAP = 1000;

const PriceSection = () => {
  const [price, setPrice] = useRecoilState(priceTempState);

  const handleMinPriceChange = (newValue: number) => {
    if (newValue > LIMIT_MAX_PRICE - PRICE_GAP) {
      setPrice({
        ...price,
        maxPrice: LIMIT_MAX_PRICE,
        minPrice: LIMIT_MAX_PRICE - PRICE_GAP
      });
      return;
    }

    if (newValue > price.maxPrice - PRICE_GAP) {
      setPrice({ ...price, maxPrice: newValue + PRICE_GAP, minPrice: newValue });
      return;
    }

    setPrice({ ...price, minPrice: newValue });
  };

  const handleMaxPriceChange = (newValue: number) => {
    if (newValue < LIMIT_MIN_PRICE + PRICE_GAP) {
      setPrice({
        ...price,
        maxPrice: LIMIT_MIN_PRICE + PRICE_GAP,
        minPrice: LIMIT_MIN_PRICE
      });
      return;
    }

    if (newValue < price.minPrice + PRICE_GAP) {
      setPrice({ ...price, maxPrice: newValue, minPrice: newValue - PRICE_GAP });
      return;
    }

    setPrice({ ...price, maxPrice: newValue });
  };

  return (
    <div className="flex flex-col gap-[10px] pt-[16px] pb-[26px]">
      <div className="text-sm">가격</div>
      <div className="flex gap-[6px] items-center">
        <PriceInput value={price.minPrice} onChange={handleMinPriceChange} />
        ~
        <PriceInput value={price.maxPrice} onChange={handleMaxPriceChange} />
      </div>
      <PriceSlide
        minValue={price.minPrice}
        maxValue={price.maxPrice}
        onMinValueChange={handleMinPriceChange}
        onMaxValueChange={handleMaxPriceChange}
      />
    </div>
  );
};

export default PriceSection;
