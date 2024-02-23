import { MouseEventHandler, ReactNode } from 'react';

interface BackDropProps {
  isVisible: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const BackDrop = ({ isVisible, onClick, children }: BackDropProps) => {
  return (
    <div
      className={`flex justify-center items-center fixed top-0 left-1/2 z-[5000] -translate-x-1/2 w-full max-w-[600px] h-full bg-black bg-opacity-50  ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BackDrop;
