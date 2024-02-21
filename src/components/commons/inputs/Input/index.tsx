import { getInputStyle } from '@/commons/utils';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    buttonLabel?: string;
    buttonDisabled?: boolean;
}

const Input = ({ id, type, onChange, placeholder }: InputProps) => {
    return (
        <input
            id={id}
            className={getInputStyle()}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
    );
};

export default Input;
