import DeleteReasonItem from './DeleteReasonItem';

const REASONS = [
  { content: '원하는 정보가 부족해요.' },
  { content: '기능들이 너무 아쉬워요.' },
  { content: '더 좋은 서비스를 찾았어요.' },
  { content: '계정을 새로 만들고 싶어요.' },
  { content: '기타' }
];

const DeleteReasonList = () => {
  return (
    <div className="flex flex-col gap-[16px] py-[10px]">
      {REASONS.map(({ content }) => (
        <DeleteReasonItem key={content} content={content} />
      ))}
    </div>
  );
};

export default DeleteReasonList;
