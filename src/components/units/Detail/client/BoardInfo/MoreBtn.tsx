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
    <button
      type="button"
      className="text-center text-gray-600 text-12 py-[13px] font-medium w-full border border-solid border-gray-200 rounded-[8px]"
      onClick={handleClick}
    >
      {!isMore ? '더보기' : '숨기기'}
    </button>
  );
};

export default MoreBtn;
