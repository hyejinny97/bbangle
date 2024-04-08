import AllProducts from '@/components/units/StoreDetail/client/AllProduct';
import BestProducts from '@/components/units/StoreDetail/client/BestProduct';
import StoreDetailSection from '@/components/units/StoreDetail/client/Container/StoreDetailSection';
import StoreProfile from '@/components/units/StoreDetail/client/StoreProfile';

const StoreDetail = ({ params: { id } }: { params: { id: string } }) => (
  <div className="w-full">
    <div className="border-b-4 w-full mx-auto pb-[16px] border-solid border-gray-100">
      <StoreProfile storeId={Number(id)} />
    </div>
    <div className="w-full border-b border-solid border-gray-100 py-[16px]">
      <StoreDetailSection title="인기상품">
        <BestProducts storeId={Number(id)} />
      </StoreDetailSection>
    </div>
    <StoreDetailSection title="전체상품" className="py-[16px]">
      <AllProducts storeId={Number(id)} />
    </StoreDetailSection>
  </div>
);

export default StoreDetail;
