'use client';

import { transformIngredientTag } from '@/commons/constants/transfromTag';

interface TagContainerProps {
    tag: string;
}

function TagContainer({ tag }: TagContainerProps) {
    tag = transformIngredientTag(tag);
    return (
        <div className="w-auto h-[21px] bg-white rounded border border-solid border-gray-200 justify-center items-center gap-1 inline-flex">
            <span className="text-neutral-500 px-1.5 py-0.5 text-[11px] font-normal ">{tag}</span>
        </div>
    );
}

export default TagContainer;
