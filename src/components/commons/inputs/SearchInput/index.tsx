'use client';

import SearchIcon from '@/components/units/Home/client/Search/assets/search.svg';

interface SearchInputProps {
  value: string;
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
  placeholder: string;
}

const SearchInput = ({ value, onChange, onEnter, placeholder }: SearchInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter();
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center gap-[6px] px-[16px] py-[10px] w-full bg-blueGray-30 rounded-[50px] cursor-pointer">
      <SearchIcon />
      <input
        type="text"
        value={value}
        className="w-full text-gray-400 text-14 font-medium leading-150 tracking-tight-2 outline-none"
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
