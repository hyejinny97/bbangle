import { AllIcon, BreadIcon, CookieIcon } from '../assets/icons';
import MiddlecategoryList from '../MiddleCategoryList';
import LargeCategoryItem from './LargeCategoryItem';

const CATEGORY_TYPE = [
  { icon: <AllIcon />, title: '전체', hasMoreCategory: false },
  { icon: <BreadIcon />, title: '빵', hasMoreCategory: true },
  { icon: <CookieIcon />, title: '간식/과자', hasMoreCategory: true }
];

const LargeCategoryList = () => (
  <div className="">
    {CATEGORY_TYPE.map((item) => (
      <>
        <LargeCategoryItem item={item} />
        <MiddlecategoryList />
      </>
    ))}
  </div>
);

export default LargeCategoryList;
