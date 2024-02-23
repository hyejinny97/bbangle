import CategoryTab from '@/components/commons/CategoryTab';
import CategoryList from '../client/CategoryList';

const ServerCategory = () => {
  return (
    <>
      <div className="sticky top-[60px] z-[4999]">
        <CategoryTab categories={['상품별', '성분별']} />
      </div>
      <CategoryList />
    </>
  );
};
export default ServerCategory;
