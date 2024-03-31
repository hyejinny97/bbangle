import { IProductType } from '@/commons/types/productType';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import { RankingBadge } from '../../../badge/RankingBadge';
import { HeartGrayIcon, HeartRedIcon } from '@/shared/components/icons';
import useToast from '@/commons/hooks/useToast';
import { MouseEventHandler } from 'react';
import ToastPop from '@/components/commons/ToastPop';
import useModal from '@/commons/hooks/useModal';
import WishFolderSelectModal from '@/domains/wish/components/alert-box/WishFolderSelectModal';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}
export const ProductImage = ({ product, popular, ranking }: ProductImageProps) => {
  const { openToast } = useToast();
  const { openModal } = useModal();

  const like: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    openToast(
      <ToastPop>
        <div>💖 찜한 상품에 추가했어요</div>
        <button onClick={() => openModal(<WishFolderSelectModal />)}>편집</button>
      </ToastPop>
    );
  };

  return (
    <div
      className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative"
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        <button onClick={like}>{product.isWished ? <HeartRedIcon /> : <HeartGrayIcon />}</button>
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-[6px]">
        {popular && <RankingBadge ranking={ranking} />}
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
