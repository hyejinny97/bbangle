import ProductCard from '@/components/commons/card/ProductCard';
import FilterSelect from '@/components/commons/selects/FilterSelect';

const DATA = [
    {
        boardId: 1,
        storeId: 1,
        storeName: '빵그리의 오븐 노예1',
        thumbnail: '/assets/breadImg.jpeg',
        title: '맛있는 빵',
        price: 345000,
        isWished: true,
        tags: ['글루텐프리', '고단백', '냠']
    },
    {
        boardId: 1,
        storeId: 1,
        storeName: '123',
        thumbnail: '/assets/breadImg.jpeg',
        title: '111',
        price: 111111,
        isWished: true,
        tags: ['1']
    },
    {
        boardId: 1,
        storeId: 1,
        storeName: '123',
        thumbnail: '/assets/breadImg.jpeg',
        title: '111',
        price: 111111,
        isWished: true,
        tags: ['1']
    },
    {
        boardId: 1,
        storeId: 1,
        storeName: '123',
        thumbnail: '/assets/breadImg.jpeg',
        title: '111',
        price: 111111,
        isWished: true,
        tags: ['1']
    },
    {
        boardId: 1,
        storeId: 1,
        storeName: '123',
        thumbnail: '/assets/breadImg.jpeg',
        title: '111',
        price: 111111,
        isWished: true,
        tags: ['1']
    }
];

const FILTER_DATA = [
    { name: 'aaa', value: '담은순' },
    { name: 'aaa', value: '인기순' },
    { name: 'aaa', value: '저가순' }
];

function WishDetail() {
    return (
        <div className="w-[92%]">
            <div className="mb-5">
                <FilterSelect datas={FILTER_DATA} />
            </div>
            <div className="flex flex-wrap w-full  m-auto gap-x-[4%] gap-y-4">
                {DATA?.map((product, i) => (
                    <div key={i} className="w-[48%]">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WishDetail;
