import WishFolder from '@/domains/wish/components/WishFolder';
import { WishFolderType } from '@/domains/wish/types/wishFolder';

const MOCK_DATA: WishFolderType[] = [
  {
    folderId: 1,
    title: '변경한 제목',
    count: 1,
    productImages: []
  }
];

const WishFolderGrid = () => {
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
