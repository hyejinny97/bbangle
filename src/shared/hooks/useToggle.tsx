import { useState } from 'react';

const useToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleCategory = () => {
    setIsActive((prev) => !prev);
  };

  return { toggleCategory, isActive };
};

export default useToggle;
