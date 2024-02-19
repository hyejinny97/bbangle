import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    buttonLabel?: string;
    buttonDisabled?: boolean;
}

const Input = ({ id, type, onChange, placeholder }: InputProps) => {
    return (
        <input
            id={id}
            className="px-[10px] py-[12.5px] outline-none border rounded-[10px] w-full"
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
    );
};

export default Input;
