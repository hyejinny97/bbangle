import ServerWishList from '@/components/units/WishList/server/ServerWishList';
import API from '@/api';

async function getWishStore() {
  const data = await API.get('/likes/stores');
  return data;
}

const WishList = async () => {
  await getWishStore();

  return (
    <>
      <ServerWishList />
    </>
  );
};

export default WishList;
