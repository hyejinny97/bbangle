import Link from 'next/link';

interface PopularKeywordProps {
  order: number;
  name: string;
}

const PopularKeyword = ({ order, name }: PopularKeywordProps) => {
  return (
    <div className="flex items-center gap-[6px] text-14 leading-150 tracking-tight-2">
      <p className="text-primaryOrangeRed font-bold">{order}</p>
      <Link href={`/search/products?query=${name}`} className="text-gray-900 font-normal">
        {name}
      </Link>
    </div>
  );
};

export default PopularKeyword;
