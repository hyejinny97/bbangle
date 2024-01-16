'use client';

import { IProductDetailType } from '../../types';
import StoreInfo from '../StoreInfo';
import BoardInfo from '../BoardInfo';

interface ProductInfoProps {
    data: IProductDetailType;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
    console.log(data);
    return (
        <div className="flex-col flex-wrap container">
            <StoreInfo store={data.store} />
            <div className="border-b border-[#FAFAFA] border-solid"></div>
            <BoardInfo data={data} />
        </div>
    );
};

export default ProductInfo;
