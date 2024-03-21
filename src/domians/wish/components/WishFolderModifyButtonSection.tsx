'use client';

import Button from '@/components/commons/button/client/Button';
import { useRecoilState } from 'recoil';
import { isWishFolderEditMode } from '../atoms/wishFolder';

const WishFolderModifyButtonSection = () => {
  const [isEdit, setEdit] = useRecoilState(isWishFolderEditMode);

  const editFolder = () => {
    setEdit(true);
  };

  const complete = () => {
    setEdit(false);
  };

  const createFolder = () => {};

  return (
    <div className="flex justify-end gap-[6px] pb-[10px]">
      <Button variants="secondary-white" onClick={createFolder}>
        추가
      </Button>
      {isEdit ? (
        <Button variants="secondary-black" onClick={complete}>
          완료
        </Button>
      ) : (
        <Button variants="secondary-white" onClick={editFolder}>
          편집
        </Button>
      )}
    </div>
  );
};

export default WishFolderModifyButtonSection;
