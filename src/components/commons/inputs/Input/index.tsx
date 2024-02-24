import { INPUT_STYLE } from '@/commons/constants/inputStyle';
import { InputHTMLAttributes, ReactNode, useId } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  button?: ReactNode;
  label: string;
}

const Input = ({ id, label, button, ...props }: Props) => {
  const inputId = useId();

  return (
    <div id={id}>
      <label className="inline-block mb-[6px]" htmlFor={inputId}>
        {label}
      </label>
      <div className="relative">
        <input id={inputId} className={INPUT_STYLE} {...props} />
        {button && <div className="absolute -translate-y-1/2 top-1/2 right-4">{button}</div>}
      </div>
    </div>
  );
};

export default Input;
