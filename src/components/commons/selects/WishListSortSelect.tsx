'use client';

import { useState } from 'react';
import Select from '@/components/commons/selects/Select';

const OPTIONS = ['담은순', '인기순', '저가순'];

const WishListSortSelect = () => {
  const [selectedOption, setSelectedOption] = useState('담은순');

  const handleSelectChange = (newSelectedOption: string) => {
    setSelectedOption(newSelectedOption);
  };

  return <Select options={OPTIONS} selectedOption={selectedOption} onChange={handleSelectChange} />;
};

export default WishListSortSelect;
