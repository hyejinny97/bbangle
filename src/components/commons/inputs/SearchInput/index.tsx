import SearchIcon from '@/components/units/Home/client/Search/assets/search.svg';
import { ChangeEvent } from 'react';

interface SearchInputProps {
    placeholder: string;
    onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
    return (
        <div className="w-full py-2.5 bg-color-White">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-slate-100 rounded-[50px] justify-start items-center gap-1.5 flex cursor-pointer">
                <SearchIcon />
                <input
                    type="text"
                    className="w-full bg-slate-100 text-color-Gray400 text-sm font-medium leading-[21px] outline-none"
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default SearchInput;
