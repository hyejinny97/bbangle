import { useState, ChangeEvent } from 'react';

const useCheckbox = (initialValue = false) => {
  const [checked, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return {
    checked,
    onChange: handleChange,
    reset: () => setValue(initialValue)
  };
};

export default useCheckbox;
