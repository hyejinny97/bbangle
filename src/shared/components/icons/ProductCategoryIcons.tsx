import BreadIcon from '@public/assets/icons/categories/bread-icon.svg';
import CakeIcon from '@public/assets/icons/categories/cake-icon.svg';
import CookieIcon from '@public/assets/icons/categories/cookie-icon.svg';
import EtcIcon from '@public/assets/icons/categories/etc-icon.svg';
import JamIcon from '@public/assets/icons/categories/jam-icon.svg';
import TartIcon from '@public/assets/icons/categories/tart-icon.svg';
import YogurtIcon from '@public/assets/icons/categories/yogurt.svg';

interface Props {
  type: 'yogurt' | 'bread' | 'cake' | 'cookie' | 'etc' | 'jam' | 'tart';
}

const ProductCategoryIcons = ({ type }: Props) => {
  switch (type) {
    case 'yogurt':
      return <YogurtIcon />;
    case 'bread':
      return <BreadIcon />;
    case 'cake':
      return <CakeIcon />;
    case 'cookie':
      return <CookieIcon />;
    case 'etc':
      return <EtcIcon />;
    case 'jam':
      return <JamIcon />;
    case 'tart':
      return <TartIcon />;
    default:
      return <YogurtIcon />;
  }
};

export default ProductCategoryIcons;
