import { useState } from 'react';

const useToggleCategory = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleCategory = () => {
    setIsActive((prev) => !prev);
  };

  return { toggleCategory, isActive };
};

export default useToggleCategory;
