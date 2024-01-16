import Header from '@/components/commons/header/server/Header';
import ProductImgs from '@/components/units/Detail/client/ProductImgs';
import DetailInfo from '@/components/units/Detail/client/DetailInfo';
import { IProductDetailType } from '../../types';

interface DetailHomePropsType {
    data: IProductDetailType;
}

const DetailHome = ({ data }: DetailHomePropsType) => {
    return (
        <>
            <Header title="상품보기" />
            <ProductImgs boardImages={data.board.images} />
            <DetailInfo data={data} />
        </>
    );
};

export default DetailHome;
