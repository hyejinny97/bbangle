'use client';

import { filterValueState, isCategoryTabState, modalState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
import FilterTab from '../FilterTab';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import ProductCard from '@/components/commons/card/ProductCard';
import CategoryTab from '@/components/commons/CategoryTab';
import StoreCard from '../StoreCard';
import { IStoreType } from '@/commons/types/storeType';
import NewModal from '../NewModal';

interface storeDataProp {
    storeData?: IStoreType[];
}

const NAV_INITIAL = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];
const ItemList = ({ storeData }: storeDataProp) => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);
    const [filterValue] = useRecoilState(filterValueState);
    // const [navItem, setNavItem] = useState(NAV_INITIAL);
    const { data, refetch } = UseGetAllProductsQuery(filterValue);
    const openModal = useRecoilState(modalState);
    const itemData = data?.content;

    // useEffect(() => {    const [filterValue] = useRecoilState(filterValueState);
    //     refetch();
    // }, [filterValue, refetch]);

    return (
        <>
            <CategoryTab categories={['상품', '스토어']} />
            <div className="flex flex-wrap m-auto">
                {isCategoryTab ? (
                    <>
                        <FilterTab navItem={NAV_INITIAL} />
                        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
                            {itemData?.map((product, i) => (
                                <div key={i} className="w-[48%]">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            {storeData?.map((data, i) => <StoreCard data={data} key={i} />)}
                        </div>
                    </>
                )}
            </div>
            {openModal && <NewModal refetch={refetch} />}
        </>
    );
};

export default ItemList;
