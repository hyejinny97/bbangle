import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import StoresTab from '@/components/units/Products/client/StoresTab';

const Stores = () => {
  return (
    <>
      <Header title="전체보기" />
      <ProductAndStoreTab />
      <div className="flex flex-wrap m-auto">
          <StoresTab />
      </div>
    </>
  );
};

export default Stores;
