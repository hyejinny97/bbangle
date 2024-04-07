import CategoryAndIngredientTab from '@/domains/home/components/Category/CategoryAndIngredientTab';
import CategoryList from './CategoryList';

const ServerCategory = () => (
    <>
      <div className="sticky top-[60px] z-[4999]">
        <CategoryAndIngredientTab />
      </div>
      <CategoryList />
    </>
  );
export default ServerCategory;
