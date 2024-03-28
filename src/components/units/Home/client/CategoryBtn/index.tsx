import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { PAGE_MAIN } from '@/domains/product/constants/pageParam';

interface CategoryProps {
  name: string;
  icon: React.ReactElement;
  isCategoryTab: boolean;
}

const CategoryBtn = ({ name, icon, isCategoryTab }: CategoryProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(PAGE_MAIN));

  const handleClickBtn = () => {
    const newFilterValue = isCategoryTab
      ? { ...filterValue, category: name }
      : { ...filterValue, tags: [name] };

    setFilterValue(newFilterValue);
  };

  return (
    <Link
      href="/products"
      className="flex flex-col justify-between items-center gap-1 py-[11px]"
      onClick={handleClickBtn}
    >
      <div>{icon}</div>
      <div className="text-14 font-normal leading-140 tracking-tight-4 text-gray-800">{name}</div>
    </Link>
  );
};

export default CategoryBtn;
