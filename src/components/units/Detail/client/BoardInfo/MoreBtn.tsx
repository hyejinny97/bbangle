interface MoreBtnProps {
  isMore: boolean;
  onClick: () => void;
}

const MoreBtn = ({ isMore, onClick }: MoreBtnProps) => {
  const handleClick = () => {
    if (isMore) {
      window.scrollTo({
        top: 420,
        behavior: 'smooth'
      });
      setTimeout(() => {
        onClick();
      }, 200);
    } else {
      window.scrollTo({
        top: 600,
        behavior: 'smooth'
      });
      setTimeout(() => {
        onClick();
      }, 200);
    }
  };
  return (
    <div className="h-[80px] bg-gradient-to-t bg-opacity-50">
      <button
        type="button"
        className="text-center text-gray-600 text-12 py-[13px] mt-[30px] font-400 w-full border border-solid border-gray-200 rounded-[8px]"
        onClick={handleClick}
      >
        {!isMore ? '더보기' : '숨기기'}
      </button>
    </div>
  );
};

export default MoreBtn;
/* bg-gradient */
