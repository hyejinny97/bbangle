import { useState } from 'react';

interface Props {
  comment: string;
}

const Comment = ({ comment }: Props) => {
  const [isMore, setMore] = useState(false);

  return (
    <div>
      <p className={`relative typo-title-14-regular ${isMore ? 'line-clamp-3' : ''}`}>{comment}</p>
      <input
        type="checkbox"
        onChange={(e) => setMore(e.target.checked)}
        className='typo-title-14-regular text-gray-500 before:content-["더보기"] appearance-none checked:before:content-["간략히"] hover:underline cursor-pointer'
      />
    </div>
  );
};

export default Comment;
