import ServerHome from '@/components/units/WishListDetail/server/ServerHome';

const WishListDetail = async ({ params }: { params: { id: number } }) => {
  return (
    <>
      <ServerHome folderId={Number(params.id)} />
    </>
  );
};

export default WishListDetail;
