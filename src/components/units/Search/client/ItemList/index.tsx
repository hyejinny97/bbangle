'use client';

import { filterValueState, isCategoryTabState, modalState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
import ProductCard from '@/components/commons/card/ProductCard';
import CategoryTab from '@/components/commons/CategoryTab';
import { IStoreType } from '@/commons/types/storeType';
import { useEffect } from 'react';
import FilterTab from '@/components/units/Products/client/FilterTab';
import StoreCard from '@/components/units/Products/client/StoreCard';
import NewModal from '@/components/units/Products/client/NewModal';
import { IAllProductsType } from '@/commons/types/allProductsType';
import None from '@/commons/assets/sad_charac.svg';

interface storeDataProp {
    storeData?: IStoreType[];
    resultProducts?: IAllProductsType;
    resultStores?: IAllProductsType;
    refetch: () => void;
}

const ItemList = ({ resultProducts, resultStores, refetch }: storeDataProp) => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);
    const [filterValue] = useRecoilState(filterValueState);
    const openModal = useRecoilState(modalState);

    console.log(resultProducts?.content);
    useEffect(() => {
        refetch();
    }, [filterValue, refetch, resultProducts, resultProducts]);

    return (
        <>
            <CategoryTab
                categories={[
                    `상품(${resultProducts?.content.length || 0})`,
                    `스토어(${resultStores?.content.length || 0})`
                ]}
            />
            <div className="flex flex-wrap m-auto">
                {isCategoryTab ? (
                    <>
                        <FilterTab />

                        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
                            {resultProducts !== undefined && resultProducts?.content.length > 0 ? (
                                resultProducts?.content.map((product, i) => (
                                    <div key={i} className="w-[48%]">
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-2">
                                    <None />
                                    <p className=" text-color-Gray500 text-center text-sm font-regular ">
                                        검색 결과가 없어요 <br /> 다른 키워드로 검색해보세요!
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            {resultStores?.content.map((data, i) => (
                                <StoreCard data={data} key={i} />
                            ))}
                        </div>
                    </>
                )}
            </div>
            {openModal && <NewModal refetch={refetch} />}
        </>
    );
};

export default ItemList;
