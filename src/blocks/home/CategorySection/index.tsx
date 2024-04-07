import CategoryAndIngredientTab from '@/blocks/home/CategorySection/CategoryAndIngredientTab';
import CategoryList from './CategoryList';

const CategorySection = () => (
  <>
    <div className="sticky top-[60px] z-[4999]">
      <CategoryAndIngredientTab />
    </div>
    <CategoryList />
  </>
);
export default CategorySection;
