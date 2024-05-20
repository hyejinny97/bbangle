import PATH from '@/shared/constants/path';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Props {
  id: string;
  comment: string;
}

const Comment = ({ id, comment }: Props) => {
  const [isEllipsed, setIsEllipsed] = useState(false);

  const commentRef = useRef<HTMLParagraphElement>(null);
  const originalCommentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleMoreButton = () => {
      if (!originalCommentRef.current || !commentRef.current) return;
      const { clientHeight: originalHeight } = originalCommentRef.current;
      const { clientHeight: commentHeight } = commentRef.current;
      setIsEllipsed(originalHeight !== commentHeight);
    };

    handleMoreButton();
    window.addEventListener('resize', handleMoreButton);
    return () => window.addEventListener('resize', handleMoreButton);
  }, []);

  return (
    <>
      <div className="relative max-h-[63px] typo-title-14-regular line-clamp-3">
        {isEllipsed && (
          <Link
            href={`${PATH.myReview}/${id}`}
            className="float-right mt-[42px] appearance-none [shape-outside:border-box]"
          >
            더보기
          </Link>
        )}

        <p ref={commentRef} className="">
          {comment}
        </p>
      </div>

      <div className="overflow-hidden h-0 typo-title-14-regular">
        <p ref={originalCommentRef}>{comment}</p>
      </div>
    </>
  );
};

export default Comment;
