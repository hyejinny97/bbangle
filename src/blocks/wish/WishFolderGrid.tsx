import WishFolder from '@/domains/wish/components/WishFolder';
import { WishFolderType } from '@/domains/wish/types/wishFolder';

const MOCK_DATA: WishFolderType[] = [
  {
    folderId: 1,
    title: 'mock data 제목입니다',
    count: 1,
    productImages: []
  }
];

const WishFolderGrid = async () => {
  // const res = await fetch('/wishLists');
  // if (!res.ok) throw new Error('위시 리스트 조회 오류');
  // const wishList: WishFolderType[] = await res.json();

  return (
    <div className="grid gap-[16px] grid-cols-2">
      {MOCK_DATA.map(({ folderId, title, count, productImages }) => (
        <WishFolder
          key={folderId}
          id={folderId}
          name={title}
          thumbnailList={productImages}
          count={count}
        />
      ))}
    </div>
  );
};

export default WishFolderGrid;
