'use client';

import useModal from '@/commons/hooks/useModal';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import Button from '@/components/commons/button/client/Button';
import Input from '@/components/commons/inputs/Input';
import UpModalNewVer from '@/components/commons/modal/UpModalNewVer';
import useInput from '@/commons/hooks/useInput';
import useUpdateWishListMutation from '../queries/useUpdateWishListMutation';

interface UpdateWishFolderModalProps {
  folderId: number;
}

const UpdateWishFolderModal = ({ folderId }: UpdateWishFolderModalProps) => {
  const { closeModal } = useModal();
  const { value, onChange } = useInput('');
  const { mutate } = useUpdateWishListMutation();

  const updateWishFolder = () => {
    mutate({ folderId, title: value });
    closeModal();
  };

  return (
    <UpModalNewVer title="찜 폴더">
      <PaddingWrapper className="flex flex-col gap-[16px]">
        <div className="flex flex-col items-end gap-[4px]">
          <Input onChange={onChange} autoComplete="off" placeholder="폴더 명을 입력해주세요." />
          <div>
            0<span className="text-gray-400">/12</span>
          </div>
        </div>
        <Button onClick={updateWishFolder}>확인</Button>
      </PaddingWrapper>
    </UpModalNewVer>
  );
};

export default UpdateWishFolderModal;
