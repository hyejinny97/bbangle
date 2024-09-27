import RadioQuestion from './RadioQuestion';

const OtherInfoSection = () => (
  <section className="mb-[8px]">
    <h3 className="w-full px-[16px] py-[10px] bg-gray-100 typo-title-14-semibold text-gray-700">
      기타 정보
    </h3>
    <RadioQuestion
      title="채식 지향이신가요?"
      subTitle="채식인 경우에 1개만 선택해주세요."
      options={{ contents: ['과일', '동물성 재료', '유제품', '동물의 알', '해산물', '육고기'] }}
    />
  </section>
);

export default OtherInfoSection;
