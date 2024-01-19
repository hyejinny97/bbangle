import ItemList from '../client/ItemList';

const bestProducts = [
    {
        boardId: 1,
        storeId: 1,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 2,
        storeId: 1,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 9500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 3,
        storeId: 1,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 10500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 1,
        storeId: 2,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 7500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 2,
        storeId: 2,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 9500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 3,
        storeId: 2,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 1,
        storeId: 3,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 2,
        storeId: 3,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    },
    {
        boardId: 3,
        storeId: 3,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: ['glutenFree', 'vegan']
    }
];

const ServerItems = () => {
    return <ItemList bestProducts={bestProducts} />;
};
export default ServerItems;
