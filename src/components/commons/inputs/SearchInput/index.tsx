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
        <div className="w-full py-2.5 bg-color-White">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-slate-100 rounded-[50px] justify-start items-center gap-1.5 flex cursor-pointer">
                <SearchIcon />
                <input
                    type="text"
                    value={value}
                    className="w-full bg-slate-100 text-color-Gray400  text-sm font-medium outline-none"
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default SearchInput;
