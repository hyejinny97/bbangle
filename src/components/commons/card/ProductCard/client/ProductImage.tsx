import { IProductType } from '@/commons/types/productType';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import { RankingBadge } from '../../../badge/RankingBadge';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
}
export const ProductImage = ({ product, popular, ranking }: ProductImageProps) => {
  return (
    <div
      className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative"
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        {/* <BtnHeart isLiked={product.isWished} onClick={} /> */}
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-[6px]">
        {popular && <RankingBadge ranking={ranking} />}
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
