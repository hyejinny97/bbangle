'use client';

import { ButtonHTMLAttributes } from 'react';
import { HeartIcon } from './icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isAcive: boolean;
  shape?: 'shadow' | 'nav' | 'default';
}

const HeartButton = ({ isAcive, shape = 'default', onClick, ...rest }: Props) => {
  const activeClass = isAcive ? 'on' : 'off';

  return (
    <button type="button" onClick={onClick} {...rest}>
      <HeartIcon shape={`${shape}-${activeClass}`} />
    </button>
  );
};

export default HeartButton;
