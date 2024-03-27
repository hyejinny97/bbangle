import WishFolder from '@/domains/wish/components/WishFolder';

const WishFolderGrid = () => {
  return (
    <div className="grid gap-[16px] grid-cols-2">
      <WishFolder id="1" name={'기본폴더'} count={0} />
      <WishFolder id="2" name={'테스트'} count={0} />
      <WishFolder id="3" name={'테스트'} count={0} />
      <WishFolder id="4" name={'테스트'} count={0} />
      <WishFolder id="5" name={'테스트'} count={0} />
      <WishFolder id="6" name={'테스트'} count={0} />
    </div>
  );
};

export default WishFolderGrid;
