import InfoWrapper from '@/domains/product/components/InfoWrapper';

const NUTRI_TYPE = ['단백질', '당류', '탄수화물', '지방'];

const NutrientInfo = () => (
  <InfoWrapper title="영양정보">
    <div className="flex justify-between gap-[6px]">
      {NUTRI_TYPE.map((item) => (
        <div className="bg-gray-50 rounded-[6px] py-[4px] px-[10px] w-fit flex-1 flex flex-col items-center justify-center">
          <div className="typo-body-12-medium text-gray-700">{item}</div>
          <div className="typo-title-16-semibold text-gray-900">250g</div>
        </div>
      ))}
    </div>
  </InfoWrapper>
);

export default NutrientInfo;
