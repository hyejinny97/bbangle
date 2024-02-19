import { IProductType } from '@/commons/types/productType';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import { Dispatch, SetStateAction } from 'react';

interface ProductImageProps {
    product: IProductType;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    setProductId: Dispatch<SetStateAction<number | undefined>>;
}
export const ProductImage = ({ product, setIsModal, setProductId }: ProductImageProps) => {
    const handleClickHeart = (id: number) => (e: any) => {
        e.preventDefault();

        if (product.isWished) {
            alert('이미 찜한 상품 입니다.');
        } else {
            setIsModal(true);
            setProductId(id);
        }
    };
    return (
        <div
            className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative "
            style={{ backgroundImage: `url(${product.thumbnail})` }}
        >
            <div className="absolute bottom-[9px] right-[9px] ">
                <BtnHeart isLiked={product.isWished} onClick={handleClickHeart(product.boardId)} />
            </div>
        </div>
    );
};
