import ServerWishList from '@/components/units/WishList/server/ServerWishList';
// import * as API from '@/api';

// async function getWishStore() {
//   try {
//     const res = await fetch(`${API.serverUrl}/likes/stores`);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// }

const WishList = async () => {
  return (
    <>
      <ServerWishList />
    </>
  );
};

export default WishList;
