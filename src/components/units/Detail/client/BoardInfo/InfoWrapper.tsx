import { ReactNode } from 'react';

interface InfoWrapperProps {
  title: string;
  children: ReactNode;
}

const InfoWrapper = ({ title, children }: InfoWrapperProps) => {
  return (
    <div>
      <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[10px]">{title}</h2>
      {children}
    </div>
  );
};

export default InfoWrapper;
