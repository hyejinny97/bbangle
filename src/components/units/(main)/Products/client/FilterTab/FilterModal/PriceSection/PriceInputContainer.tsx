'use state';

import { useState, useEffect } from 'react';
import PriceInput from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/PriceInput';

interface PriceInputContainerProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (_newValue: number) => void;
  onMaxPriceChange: (_newValue: number) => void;
}

const PriceInputContainer = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange
}: PriceInputContainerProps) => {
  const [tmpMinPrice, setTmpMinPrice] = useState(minPrice);
  const [tmpMaxPrice, setTmpMaxPrice] = useState(maxPrice);

  useEffect(() => {
    setTmpMinPrice(minPrice);
  }, [minPrice]);

  useEffect(() => {
    setTmpMaxPrice(maxPrice);
  }, [maxPrice]);

  const handleApplyButtonClick = () => {
    if (tmpMinPrice > tmpMaxPrice) {
      onMinPriceChange(tmpMaxPrice);
      onMaxPriceChange(tmpMinPrice);
      return;
    }

    onMinPriceChange(tmpMinPrice);
    onMaxPriceChange(tmpMaxPrice);
  };

  return (
    <div className="flex gap-[10px] justify-between items-center">
      <div className="flex flex-1 gap-[6px] items-center">
        <PriceInput value={tmpMinPrice} onChange={(newValue: number) => setTmpMinPrice(newValue)} />
        ~
        <PriceInput value={tmpMaxPrice} onChange={(newValue: number) => setTmpMaxPrice(newValue)} />
      </div>
      <span
        className="font-semibold text-[14px] text-primaryOrangeRed cursor-pointer"
        onClick={handleApplyButtonClick}
      >
        적용
      </span>
    </div>
  );
};

export default PriceInputContainer;
