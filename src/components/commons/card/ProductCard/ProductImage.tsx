'use client';

import { IProductType } from '@/commons/types/productType';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import { RankingBadge } from '../../badge/RankingBadge';
import { HeartGrayIcon, HeartRedIcon } from '@/shared/components/icons';
import { MouseEventHandler } from 'react';
import useDeleteWishMutation from '@/domains/wish/queries/useDeleteWishMutation';
import useAddWishMutation from '@/domains/wish/queries/useAddWishMutation';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}
export const ProductImage = ({ product, popular, ranking }: ProductImageProps) => {
  const { mutate: addMutate } = useAddWishMutation();
  const { mutate: deleteMutate } = useDeleteWishMutation();

  const like: MouseEventHandler<HTMLButtonElement> = e => {
    addMutate({ productId: String(product.boardId), folderId: '86' });
    e.preventDefault();
  };

  const dislike: MouseEventHandler<HTMLButtonElement> = e => {
    deleteMutate({ productId: String(product.boardId), folderId: '86' });
    e.preventDefault();
  };

  return (
    <div
      className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative"
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        {product.isWished ? (
          <button onClick={dislike}>
            <HeartRedIcon />
          </button>
        ) : (
          <button onClick={like}>
            <HeartGrayIcon />
          </button>
        )}
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-[6px]">
        {popular && <RankingBadge ranking={ranking} />}
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
