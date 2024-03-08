import ServerWishList from '@/components/units/WishList/server/ServerWishList';
import API from '@/api';

async function getWishStore() {
  try {
    const res = await fetch(`${API.serverUrl}/likes/stores`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const WishList = async () => {
  const { data } = await getWishStore();
  console.log(data);
  return (
    <>
      <ServerWishList />
    </>
  );
};

export default WishList;
