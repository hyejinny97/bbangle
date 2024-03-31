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
const ProductImage = ({ product, popular, ranking }: ProductImageProps) => {
  const DEFAULT_FOLDER_ID = '86';
  const blurDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

  const { mutate: addMutate } = useAddWishMutation();
  const { mutate: deleteMutate } = useDeleteWishMutation();

  const like: MouseEventHandler<HTMLButtonElement> = e => {
    addMutate({ productId: String(product.boardId), folderId: DEFAULT_FOLDER_ID });
    e.preventDefault();
  };

  const hate: MouseEventHandler<HTMLButtonElement> = e => {
    // 정상 작동 안함
    deleteMutate({ productId: String(product.boardId), folderId: DEFAULT_FOLDER_ID });
    e.preventDefault();
  };

  return (
    <div className="w-full after:pb-[100%] bg-cover bg-center rounded-[6px] relative">
      <Image
        src={product.thumbnail}
        alt="상품사진"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="rounded-[6px] aspect-square"
      />
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        {product.isWished ? (
          <button onClick={hate}>
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
export default ProductImage;
