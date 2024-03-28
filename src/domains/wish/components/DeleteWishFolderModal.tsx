'use client';

import PaddingWrapper from '@/components/commons/PaddingWrapper';
import Button from '@/components/commons/button/client/Button';
import Popup from '@/components/commons/Popup';
import usePopup from '@/commons/hooks/usePopup';
import useDeleteWishFolderMutation from '../hooks/useDeleteWishFolderMutation';

interface DeleteWishFolderPopupProps {
  folderId: number;
}

const DeleteWishFolderPopup = ({ folderId }: DeleteWishFolderPopupProps) => {
  const { mutate } = useDeleteWishFolderMutation();
  const { closePopup } = usePopup();

  const deleteWishFolder = () => {
    mutate(folderId);
    closePopup();
  };

  return (
    <Popup className="text-center">
      <PaddingWrapper>
        <u>$폴더명</u> 폴더 삭제
      </PaddingWrapper>
      <PaddingWrapper>
        삭제한 찜 폴더는 복구할 수 없고,
        <br />
        찜한 상품도 함께 삭제됩니다.
      </PaddingWrapper>

      <PaddingWrapper className="flex gap-[10px] pt-[10px]">
        <Button onClick={closePopup} variants="primary-white">
          취소
        </Button>
        <Button onClick={deleteWishFolder} variants="primary-black">
          확인
        </Button>
      </PaddingWrapper>
    </Popup>
  );
};

export default DeleteWishFolderPopup;
