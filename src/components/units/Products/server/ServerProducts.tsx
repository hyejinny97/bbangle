import CategoryTab from '@/components/commons/CategoryTab';
import Header from '@/components/commons/header/client/Header';
import ItemList from '@/components/units/Products/client/ItemList';

const ServerProducts = async () => {
  return (
    <>
      <Header title="전체보기" />
      <CategoryTab categories={['상품', '스토어']} />
      <ItemList />
    </>
  );
};
export default ServerProducts;
