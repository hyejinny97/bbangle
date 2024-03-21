import Button from '@/components/commons/button/client/Button';

const WishFolderModifyButtonSection = () => {
  return (
    <div className="flex justify-end gap-[6px] pb-[10px]">
      <Button variants="secondary-white">추가</Button>
      <Button variants="secondary-white">편집</Button>
    </div>
  );
};

export default WishFolderModifyButtonSection;
