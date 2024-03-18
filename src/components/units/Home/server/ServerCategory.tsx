import CategoryAndIngredientTab from '@/components/commons/tabs/CategoryAndIngredientTab';
import CategoryList from '../client/CategoryList';

const ServerCategory = () => {
  return (
    <>
      <div className="sticky top-[60px] z-[4999]">
        <CategoryAndIngredientTab />
      </div>
      <CategoryList />
    </>
  );
};
export default ServerCategory;
