import { MouseEvent } from 'react';

interface WishButtonProps {
  title: string;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isBlack?: boolean;
}

const WishButton = ({ title, onClick, disabled, isBlack }: WishButtonProps) => {
  return (
    <button
      className={`px-2.5 py-1.5 text-xs ${isBlack ? 'bg-color-Gray800' : 'bg-color-Gray100'} ${
        isBlack ? 'text-color-White' : 'text-color-Gray900'
      } rounded-[50px] flex justify-center items-center`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default WishButton;
