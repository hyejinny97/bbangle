'use client';

import { useState } from 'react';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

interface DeleteReasonItemProps {
  content: string;
}

const DeleteReasonItem = ({ content }: DeleteReasonItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  return <CheckBox title={content} isChecked={isChecked} onClick={handleCheckClick} />;
};

export default DeleteReasonItem;
