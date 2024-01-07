import React, { useRef, useState, TouchEvent } from 'react';

interface TagSwiperProps {
    tag: string[];
}

const TagSwiper: React.FC<TagSwiperProps> = ({ tag }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e: TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();

        if (!isDragging || !containerRef.current) return;

        const delta = startX - e.touches[0].pageX;
        containerRef.current.scrollLeft += delta;

        setStartX(e.touches[0].pageX);

    };

    return (
        <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            className="flex space-x-2 overflow-x-auto scrollable-container"
        >
            <div className="flex gap-1 whitespace-nowrap">
                {tag.map((tag, index) => (
                    <div
                        key={index}
                        style={{ flex: 'auto' }}
                        className="w-auto h-[21px] px-1.5 py-0.5 bg-white rounded border border-solid border-gray-200 justify-center items-center gap-1 inline-flex"
                    >
                        <span className="inline-block text-neutral-500 text-[11px] font-normal font-['Pretendard'] leading-none">
                            {tag}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagSwiper;
