import MiddleCategoryItem from './MiddleCategoryItem';

const CATEGORY_TYPE = [
  '전체보기',
  '식빵ㆍ모닝빵',
  '베이글ㆍ도넛',
  '케이크ㆍ파이'
];

const MiddlecategoryList = () => (
  <div className="grid grid-cols-2">
    {CATEGORY_TYPE.map((item) => (
      <MiddleCategoryItem item={item} />
    ))}
  </div>
);

export default MiddlecategoryList;
