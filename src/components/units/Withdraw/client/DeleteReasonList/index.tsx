import DeleteReasonItem from '@/components/units/Withdraw/client/DeleteReasonItem';

const REASONS = [
  { content: '원하는 정보가 부족해요.' },
  { content: '기능들이 너무 아쉬워요.' },
  { content: '더 좋은 서비스를 찾았어요.' },
  { content: '계정을 새로 만들고 싶어요.' },
  { content: '기타' }
];

const DeleteReasonList = () => {
  return (
    <div className="py-[10px]">
      {REASONS.map(item => (
        <div key={item.content} className="mb-4 last:mb-0">
          <DeleteReasonItem content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default DeleteReasonList;
