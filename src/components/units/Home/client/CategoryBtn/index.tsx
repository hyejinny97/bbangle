import Link from 'next/link';

interface CategoryProps {
  name: string;
  icon: React.ReactElement;
  url: string;
  ProductName: string;
}

const CategoryBtn = ({ name, icon, url, ProductName }: CategoryProps) => {
  return (
    <Link
      href={url}
      className={`${ProductName === '상품별' ? 'w-1/4' : 'w-1/3'} flex flex-col justify-startc
        items-center gap-1 py-3`}
    >
      <div>{icon}</div>
      <div className="text-sm font-normal leading-tight text-color-Gray900">{name}</div>
    </Link>
  );
};

export default CategoryBtn;
