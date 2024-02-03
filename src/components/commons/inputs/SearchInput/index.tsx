'use client';

import SearchIcon from '@/components/units/Home/client/Search/assets/search.svg';
import { useState } from 'react';

interface SearchInputProps {
    value?: string;
    placeholder: string;
    onEnter: (_: string) => void;
}

const SearchInput = ({ placeholder, onEnter }: SearchInputProps) => {
    const [tempKeyword, setTempKeyword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempKeyword(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnter(tempKeyword);
            e.preventDefault();
        }
    };
    return (
        <div className="w-full py-2.5 bg-color-White">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-slate-100 rounded-[50px] justify-start items-center gap-1.5 flex cursor-pointer">
                <SearchIcon />
                <input
                    type="text"
                    value={tempKeyword}
                    className="w-full bg-slate-100 text-color-Gray400  text-sm font-medium outline-none"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default SearchInput;
