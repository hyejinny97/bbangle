import Link from 'next/link';
import { fetchPopularKeywords } from '@/components/units/Search/api/fetchPopularKeywords';

const PopularKeyword = async () => {
  const popularKeywords = await fetchPopularKeywords();

  return (
    <div className="flex flex-col gap-[16px]">
      {popularKeywords.map((item, i) => (
        <div key={i} className="flex gap-[6px]">
          <p className="text-red-500 text-sm font-bold">{i + 1}</p>
          <Link href={`/search/products?query=${item}`}>
            <p className="text-neutral-800 text-sm font-normal">{item}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularKeyword;
