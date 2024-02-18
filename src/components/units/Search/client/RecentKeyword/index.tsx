'use client';

import XX from './assets/xx.svg';
import Link from 'next/link';
import { useGetRecentSearchKeywordsQuery } from '@/components/units/Search/hooks/useGetRecentSearchKeywordsQuery';
import { useDeleteRecentSearchKeywordMutation } from '@/components/units/Search/hooks/useDeleteRecentSearchKeywordMutation';

type DataType = {
    keywordId: string;
    keyword: string;
};

interface RecentChipProps {
    title: string;
    onClick?: () => void;
}

const RecentChip = ({ title, onClick }: RecentChipProps) => {
    return (
        <p className="flex items-center justify-center gap-[4px]">
            <Link
                href={`/search?query=${title}`}
                className="text-xs font-medium font-Pretendard leading-[18px] text-zinc-600 "
            >
                {title}
            </Link>
            <button onClick={onClick}>
                <XX />
            </button>
        </p>
    );
};

const RecentKeyword = () => {
    const { data: recentKeywords } = useGetRecentSearchKeywordsQuery();
    const { mutate } = useDeleteRecentSearchKeywordMutation();

    const handleDelete = (itemToDelete: DataType) => {
        mutate(itemToDelete.keywordId);
    };

    return (
        <div className="w-full relative">
            <div className="flex gap-[8px] w-92% overflow-x-auto scrollbar-hide ">
                {recentKeywords?.map((item, index) => (
                    <span
                        // key={item.keywordId}
                        key={index}
                        className="h-34px flex-shrink-0 px-3 py-2 bg-white border border-solid border-gray-200 gap-1 inline-flex rounded-[50px] "
                    >
                        <RecentChip title={item.keyword} onClick={() => handleDelete(item)} />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RecentKeyword;
