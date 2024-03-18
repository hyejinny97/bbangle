import Header from '@/components/commons/header/client/Header';
import WishProducts from '@/components/units/WishList/client/WishProducts';
const ServerWishList = () => {
  return (
    <>
      <Header title="찜" back />
      <WishProducts />
    </>
  );
};

export default ServerWishList;
