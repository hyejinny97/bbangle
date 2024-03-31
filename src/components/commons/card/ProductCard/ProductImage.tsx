'use client';

import { IProductType } from '@/commons/types/productType';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import { RankingBadge } from '../../badge/RankingBadge';
import { HeartGrayIcon, HeartRedIcon } from '@/shared/components/icons';
import { MouseEventHandler } from 'react';
import useDeleteWishMutation from '@/domains/wish/queries/useDeleteWishMutation';
import useAddWishMutation from '@/domains/wish/queries/useAddWishMutation';
import Image from 'next/image';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}
export const ProductImage = ({ product, popular, ranking }: ProductImageProps) => {
  const blurDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

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
    <div>
      <Image
        src={product.thumbnail}
        alt="상품사진"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="rounded-[6px]"
      />
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
