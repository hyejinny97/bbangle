'use client';

import SearchInput from '@/components/commons/inputs/SearchInput';

interface InputContainerProps {
    keyword: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

function InputContainer({ keyword, onChange }: InputContainerProps) {
    return (
        <div className="w-[92%] m-auto">
            <SearchInput
                placeholder="궁금한 상품을 찾아보세요!"
                value={keyword}
                onChange={onChange}
            />
        </div>
    );
}

export default InputContainer;
