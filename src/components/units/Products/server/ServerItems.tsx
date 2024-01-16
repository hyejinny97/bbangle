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
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 2,
        storeId: 1,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 9500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 3,
        storeId: 1,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 10500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 1,
        storeId: 2,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 7500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 2,
        storeId: 2,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 9500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 3,
        storeId: 2,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 1,
        storeId: 3,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 2,
        storeId: 3,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    },
    {
        boardId: 3,
        storeId: 3,
        storeName: '안녕, 베이커리',
        thumbnail: '/assets/breadImg.jpeg',
        title: '고구마케이크 3종',
        price: 8500,
        isWished: true,
        tags: [
            {
                glutenFree: true
            },
            {
                highProtein: false
            },
            {
                sugarFree: false
            },
            {
                vegan: true
            },
            {
                ketogenic: false
            }
        ]
    }
];

const ServerItems = () => {
    return <ItemList bestProducts={bestProducts} />;
};
export default ServerItems;
