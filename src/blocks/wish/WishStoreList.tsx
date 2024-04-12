'use client';

import Loading from '@/components/commons/Loading';
import StoreCard from '@/domains/store/components/StoreCard';
import useWishStoreListQuery from '@/domains/wish/queries/useWishStoreListQuery';
import { BbangleSadIcon } from '@/shared/components/icons';

const WishStroeList = () => {
  const { data, isLoading } = useWishStoreListQuery();

  if (isLoading) {
    return <Loading />;
  }

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
        <StoreCard
          key={storeId}
          id={storeId}
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
