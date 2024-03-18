import { IProductType } from '@/commons/types/productType';
import { useEffect, useState } from 'react';
import { transformTagToKr } from '@/commons/constants/transfromTag';

interface TagSwiperProps {
  tag: IProductType['tags'];
}

const TagSwiper = ({ tag }: TagSwiperProps) => {
  const [maxTagsToShow, setMaxTagsToShow] = useState(4);
  const tagFilter = tag.map((item: string) => {
    const translatedItem = transformTagToKr(item);
    return translatedItem;
  });

  const tagsToShow = tagFilter.slice(0, maxTagsToShow);

  useEffect(() => {
    if (window.innerWidth <= 330) {
      setMaxTagsToShow(1);
    } else if (window.innerWidth <= 430) {
      setMaxTagsToShow(2);
    } else if (window.innerWidth <= 570) {
      setMaxTagsToShow(3);
    }
  }, []);

  return (
    <div className="flex items-center justify-between w-full space-x-2 overflow-x-auto">
      <div className="flex gap-1 ">
        {tagsToShow.map((tag, index) => {
          return (
            <div
              key={index}
              style={{ flex: 'auto' }}
              className="h-[21px] px-1.5 py-0.5 bg-color-White rounded border border-solid border-color-Gray200 justify-center items-center gap-1 inline-flex"
            >
              <span className="inline-block text-color-Gray600 text-[11px] font-normal leading-none line">
                {tag}
              </span>
            </div>
          );
        })}
      </div>
      <span className="text-[11px] font-semibold text-color-Gray400">
        {maxTagsToShow < tag.length && `${tag.length - maxTagsToShow}+`}
      </span>
    </div>
  );
};

export default TagSwiper;
