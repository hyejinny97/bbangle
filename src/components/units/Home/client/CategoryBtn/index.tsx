import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { filterValueState } from '@/atoms/atom';

interface CategoryProps {
  name: string;
  icon: React.ReactElement;
  isCategoryTab: boolean;
}

const CategoryBtn = ({ name, icon, isCategoryTab }: CategoryProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);

  const handleClickBtn = () => {
    const newFilterValue = isCategoryTab
      ? { ...filterValue, category: name }
      : { ...filterValue, tags: [name] };

    setFilterValue(newFilterValue);
  };

  return (
    <Link
      href="/products"
      className="flex flex-col justify-start items-center gap-1 py-3"
      onClick={handleClickBtn}
    >
      <div>{icon}</div>
      <div className="text-sm font-normal leading-tight text-gray-900">{name}</div>
    </Link>
  );
};

export default CategoryBtn;
