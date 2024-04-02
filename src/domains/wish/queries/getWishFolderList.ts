import { WishFolderType } from '@/domains/wish/types/wishFolder';
import fetchExtend from '@/shared/utils/api';

const getWishFolderList = async () => {
  const res = await fetchExtend.get('/wishLists');

  if (!res.ok) throw new Error('위시 리스트 조회 오류');
  const wishList: WishFolderType[] = await res.json();

  return wishList;
};

export default getWishFolderList;
