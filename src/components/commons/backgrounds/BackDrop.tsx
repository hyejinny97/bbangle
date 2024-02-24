const BackDrop = ({ isVisible, onClick }: { isVisible: boolean; onClick: any }) => {
  return (
    <div
      className={`fixed top-0 left-1/2 z-[5000] -translate-x-1/2 w-full max-w-[600px] h-full bg-black bg-opacity-50  ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={onClick}
    ></div>
  );
};

export default BackDrop;
