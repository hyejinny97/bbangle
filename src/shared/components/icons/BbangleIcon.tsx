'use client';

import BbangleSmileIcon from '@public/assets/icons/bbangle-smile.svg';
import BbangleCryIcon from '@public/assets/icons/bbangle-cry.svg';
import BbanglVerticalNameIcon from '@public/assets/icons/bbangle-vertical-name.svg';
import BbangleHorizontalNameIcon from '@public/assets/icons/bbangle-horizontal-name.svg';

interface Props {
  shape: 'vertical-name' | 'horizontal-name' | 'smile' | 'cry';
  className?: string;
}

const BbangleIcon = ({ shape, className }: Props) => {
  switch (shape) {
    case 'vertical-name':
      return <BbanglVerticalNameIcon />;
    case 'horizontal-name':
      return <BbangleHorizontalNameIcon />;
    case 'smile':
      return <BbangleSmileIcon className={className} />;
    case 'cry':
      return <BbangleCryIcon />;
    default:
      return <BbangleSmileIcon />;
  }
};

export default BbangleIcon;
