'use client';

import { BbangleSadIcon } from '@/components/commons/Icon';
import WishStore from '@/domains/store/components/StoreCard';
import useWishStoreListQuery from '@/domains/wish/queries/useWishStoreListQuery';

const WishStroeList = () => {
  const { data } = useWishStoreListQuery();

  if (!data || data.length === 0)
    return (
      <div className="w-[360px] h-[360px] flex flex-col gap-[2px] mx-auto justify-center items-center">
        <BbangleSadIcon />
        <div className="text-[14px] text-gray-500">찜한 스토어가 없어요!</div>
      </div>
    );

  return (
    <div>
      {data.map(({ storeId, profile, introduce, storeName, isWished }) => (
        <WishStore
          key={storeId}
          imgSrc={profile}
          title={storeName}
          desc={introduce}
          isWished={isWished}
        />
      ))}
    </div>
  );
};

export default WishStroeList;
