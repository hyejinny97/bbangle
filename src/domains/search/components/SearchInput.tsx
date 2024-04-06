'use client';

import SearchIcon from '@/components/units/Home/client/Search/assets/search.svg';
import Input from '@/components/commons/inputs/Input';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (_: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange, onKeyDown, ...rest }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-[6px] px-[16px] py-[10px] w-full bg-blueGray-30 rounded-[50px] cursor-pointer">
      <SearchIcon className="w-[15px]" />
      <Input
        type="text"
        className="p-0 border-none rounded-none flex-1 bg-blueGray-30 text-14 font-medium text-gray-400 leading-150 tracking-tight-2 outline-none"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
