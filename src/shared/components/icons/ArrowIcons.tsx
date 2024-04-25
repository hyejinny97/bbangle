import BackArrowIcon from '@public/assets/icons/arrow/back-arrow.svg';
import BottomArrowICon from '@public/assets/icons/arrow/bottom-arrow.svg';
import DownArrowIcon from '@public/assets/icons/arrow/down-arrow.svg';
import ForwardkArrowIcon from '@public/assets/icons/arrow/forward-arrow.svg';
import MediumForwardArrowIcon from '@public/assets/icons/arrow/forward-medium-arrow.svg';

interface Props {
  type: 'bottom' | 'medium-forward' | 'forward' | 'back' | 'down';
}

const ArrowIcons = ({ type }: Props) => {
  switch (type) {
    case 'bottom':
      return <BottomArrowICon />;
    case 'medium-forward':
      return <MediumForwardArrowIcon />;
    case 'forward':
      return <ForwardkArrowIcon />;
    case 'back':
      return <BackArrowIcon />;
    case 'down':
      return <DownArrowIcon />;

    default:
      return <BottomArrowICon />;
  }
};

export default ArrowIcons;
