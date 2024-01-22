'use client';

import XX from './assets/xx.svg';

const RECENT: string[] = [
    'example1',
    'example2',
    'example3',
    'example4',
    'example5',
    'example6',
    'example7',
    'example8',
    'example9',
    'example10'
];

interface RecentChipProps {
    title: string;
    onClick?: () => void;
}

function RecentChip({ title }: RecentChipProps) {
    return (
        <p className="text-xs font-medium font-Pretendard leading-[18px] text-zinc-600 flex items-center justify-center gap-[4px]">
            {title}
            <button onClick={() => {}}>
                <XX />
            </button>
        </p>
    );
}

function RecentKeyword() {
    return (
        <>
            <div className="w-full relative">
                <div className="flex gap-[8px]  w-92% overflow-x-scroll scrollbar-hide">
                    {RECENT.map(item => (
                        <span
                            key={item}
                            className="h-34px flex-shrink-0 px-3 py-2 bg-white border border-solid border-gray-200  gap-1 inline-flex rounded-[50px] "
                        >
                            <RecentChip title={item} />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RecentKeyword;
