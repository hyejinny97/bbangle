import WishFolder from './WishFolder';

const WishFolderGrid = () => {
  return (
    <div className="grid gap-[16px] grid-cols-2">
      <WishFolder name={'기본폴더'} count={0} />
      <WishFolder name={'테스트'} count={0} />
      <WishFolder name={'테스트'} count={0} />
      <WishFolder name={'테스트'} count={0} />
      <WishFolder name={'테스트'} count={0} />
      <WishFolder name={'테스트'} count={0} />
    </div>
  );
};

export default WishFolderGrid;
