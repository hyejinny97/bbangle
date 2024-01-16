'use client';

interface TagContainerProps {
    tag: string;
}

function transformTag(tag: string): string {
    if (tag === 'glutenFree') {
        return '글루텐프리';
    }
    if (tag === 'highProtein') {
        return '고단백';
    }
    if (tag === 'vegan') {
        return '비건';
    }
    if (tag === 'sugarFree') {
        return '무설탕';
    }
    if (tag === 'ketogenic') {
        return '키토제닉';
    }
    return tag;
}

function TagContainer({ tag }: TagContainerProps) {
    tag = transformTag(tag);
    return (
        <div className="w-auto h-[21px] bg-white rounded border border-solid border-gray-200 justify-center items-center gap-1 inline-flex">
            <span className="text-neutral-500 px-1.5 py-0.5 text-[11px] font-normal ">{tag}</span>
        </div>
    );
}

export default TagContainer;
