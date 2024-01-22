'use client';

import SearchInput from '@/components/commons/inputs/SearchInput';

function InputContainer() {
    return (
        <div className="w-[92%] m-auto">
            <SearchInput placeholder="궁금한 상품을 찾아보세요!" onChange={() => {}} />
        </div>
    );
}

export default InputContainer;
