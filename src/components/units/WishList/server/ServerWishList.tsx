import Header from '@/components/commons/header/client/Header';
import WishProducts from '@/components/units/WishList/client/WishProducts';
const ServerWishList = () => {
  return (
    <>
      <Header title="찜" />
      <WishProducts />
    </>
  );
};

export default ServerWishList;
