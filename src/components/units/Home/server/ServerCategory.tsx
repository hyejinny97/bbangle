import CategoryTab from '@/components/commons/CategoryTab';
import CategoryList from '../client/CategoryList';

const ServerCategory = () => {
    return (
        <>
            <CategoryTab categories={['상품별', '성분별']} />
            <CategoryList />
        </>
    );
};
export default ServerCategory;
