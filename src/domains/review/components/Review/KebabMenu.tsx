'use client';

import Dropdown from '@/shared/components/Dropdown';
import { KebabIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import { attachRedirectUrl } from '@/shared/utils/attachRedirectUrl';
import { useRouter, usePathname } from 'next/navigation';
import { ReviewType } from '../../types/review';
import useDeleteReviewMutation from '../../queries/useDeleteReviewMutation';

interface Props {
  reviewId: ReviewType['id'];
  boardId: ReviewType['boardId'];
}

const KebabMenu = ({ reviewId, boardId }: Props) => {
  const { push, back } = useRouter();
  const { mutate: deleteMutate } = useDeleteReviewMutation(boardId);
  const pathname = usePathname();
  const isReviewDetailPage = pathname === PATH.reviewDetail({ productId: boardId, reviewId });

  const onModifyClick = () => {
    push(
      attachRedirectUrl({
        url: PATH.reviewUpdate({ productId: boardId, reviewId, progress: 1 }),
        redirectUrl: window.location.href
      })
    );
  };

  const onDeleteClick = () => {
    deleteMutate(reviewId);
    if (isReviewDetailPage) back();
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <KebabIcon />
      </Dropdown.Trigger>
      <Dropdown.Content position="left">
        <Dropdown.Item onClick={onModifyClick}>수정</Dropdown.Item>
        <Dropdown.Item onClick={onDeleteClick}>삭제</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default KebabMenu;
