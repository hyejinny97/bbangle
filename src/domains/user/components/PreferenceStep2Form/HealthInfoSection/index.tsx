import CheckboxQuestion from './CheckboxQuestion';

const HealthInfoSection = () => (
  <section className="mb-[8px]">
    <h3 className="w-full px-[16px] py-[10px] bg-gray-100 typo-title-14-semibold text-gray-700">
      건강 정보
    </h3>
    <div className="divide-y divide-gray-100">
      <CheckboxQuestion
        title="식이제한을 가지고 계신가요?"
        subTitle="정확한 추천을 위해 모두 선택해주세요."
        required
        options={{ contents: ['유당불내증', '글루텐불내증', '당뇨', '해당없음'] }}
      />
      <CheckboxQuestion
        title="건강 고민이 있으신가요?"
        subTitle="가지고 있는 건강 고민을 모두 선택해주세요."
        required
        options={{ contents: ['여드름', '체지방', '콜레스테롤', '소화불량', '해당없음'] }}
      />
      <CheckboxQuestion
        title="기피하는 음식 재료가 있으신가요?"
        subTitle="정확한 추천을 위해 모두 선택해주세요."
        required
        options={{
          contents: [
            '밀가루',
            '통밀',
            '쌀',
            '콩',
            '우유',
            '두유',
            '설탕',
            '계란',
            '땅콩',
            '호두',
            '잣',
            '복숭아',
            '토마토',
            '해당없음'
          ]
        }}
      />
    </div>
  </section>
);

export default HealthInfoSection;
