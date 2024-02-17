import ProductImgs from '@/components/units/Detail/client/ProductImgs';
import DetailInfo from '@/components/units/Detail/client/DetailInfo';
import { IProductDetailType } from '../../types';
import Header from '@/components/commons/header/client/Header';

interface DetailHomePropsType {
    data: IProductDetailType;
}

const DetailHome = ({ data }: DetailHomePropsType) => {
    return (
        <>
            <Header title="상품보기" back={true} />
            <ProductImgs boardImages={data.board.images} />
            <DetailInfo data={data} />
        </>
    );
};

export default DetailHome;
