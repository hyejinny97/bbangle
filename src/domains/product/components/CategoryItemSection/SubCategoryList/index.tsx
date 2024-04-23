import SubCategoryItem from './SubCategoryItem';

const CATEGORY_TYPE = [
  '전체보기',
  '식빵ㆍ모닝빵',
  '베이글ㆍ도넛',
  '케이크ㆍ파이'
];

const SubcategoryList = () => (
  <div className="grid grid-cols-2">
    {CATEGORY_TYPE.map((item) => (
      <SubCategoryItem item={item} />
    ))}
  </div>
);

export default SubcategoryList;
