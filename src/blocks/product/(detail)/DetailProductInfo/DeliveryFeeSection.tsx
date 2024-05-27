import PaddingWrapper from '@/shared/components/PaddingWrapper';

const DeliveryFeeSection = () => (
  <PaddingWrapper className="w-full flex gap-[4px] bg-gray-50 border-b border-t border-gray-100">
    <div className="typo-title-14-medium text-gray-600">배송비</div>
    <div className="typo-title-14-regular text-gray-800">2,500</div>
    <div className="typo-body-12-regular text-gray-500">(20,000원 이상 구매 시 무료)</div>
  </PaddingWrapper>
);

export default DeliveryFeeSection;
