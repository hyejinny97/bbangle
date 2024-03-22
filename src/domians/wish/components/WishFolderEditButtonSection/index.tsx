'use client';

import Button from '@/components/commons/button/client/Button';
import { useRecoilState } from 'recoil';
import useModal from '@/commons/hooks/useModal';
import WishFolderModal from './WishFolderModal';
import { isWishFolderEditModeState } from '../../atoms/wishFolder';

const WishFolderEditButtonSection = () => {
  const [isEdit, setEdit] = useRecoilState(isWishFolderEditModeState);
  const { openModal } = useModal();

  const editFolder = () => {
    setEdit(true);
  };

  const complete = () => {
    setEdit(false);
  };

  const createFolder = () => {
    openModal(<WishFolderModal />);
  };

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

export default WishFolderEditButtonSection;
