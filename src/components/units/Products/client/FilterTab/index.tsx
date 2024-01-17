'use client';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { UseGetAllProductsQuery } from '../../hooks/UseGetAllProductsQuery';

const FilterTab = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];

    const handleItemClick = (index: any) => {
        setSelectedItem(index);
    };
    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    const { data, error, isLoading } = UseGetAllProductsQuery({
        category: 'BREAD'
    });
    // 데이터 로딩 중 처리
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // 에러 발생 시 처리
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log('0000' + data);

    return (
        <>
            <div className="flex overflow-x-scroll pl-3 pt-3 scrollbar-hide">
                {navItem.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className="flex w-[50px] h-[30px] items-center justify-center overflow-hidden whitespace-nowrap border-2 px-6 py-3 rounded-full text-xs font-medium m-2"
                        >
                            <h2>{item}</h2>
                        </button>
                    );
                })}
            </div>

            <div className="border-b border-solid border-gray-100 w-full "></div>
            <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
                <CheckBox
                    isChecked={isChecked}
                    onClick={checkHandled}
                    title="주문가능한 상품 보기"
                />

                <SortingButton />
            </div>
        </>
    );
};
export default FilterTab;
