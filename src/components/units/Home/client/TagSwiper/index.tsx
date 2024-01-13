interface TagSwiperProps {
    tag: string[];
}

const TagSwiper: React.FC<TagSwiperProps> = ({ tag }) => {
    return (
        <div className="flex justify-between w-full space-x-2 overflow-x-auto">
            <div className="flex gap-1 ">
                {tag.map((tag, index) => {
                    return (
                        index < 3 && (
                            <div
                                key={index}
                                style={{ flex: 'auto' }}
                                className="h-[21px] px-1.5 py-0.5 bg-color-White rounded border border-solid border-color-Gray200 justify-center items-center gap-1 inline-flex"
                            >
                                <span className="inline-block text-color-Gray600 text-[11px] font-normal leading-none">
                                    {tag}
                                </span>
                            </div>
                        )
                    );
                })}
            </div>
            <span className="text-[11px] font-semibold text-color-Gray400">
                {tag.length > 3 && `${tag.length - 3}+`}
            </span>
        </div>
    );
};

export default TagSwiper;
