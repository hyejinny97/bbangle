const WeekList = ['월', '화', '수', '목', '금', '토', '일'];

const TypeOfWeeklyOrder = ({ availableDays }: { availableDays: any }) => (
  <>
    {WeekList.map((item) => (
      <div
        key={item}
        className={`rounded-full leading-150 w-[24px] h-[24px] text-12 font-normal flex items-center justify-center  ${
          availableDays.includes(item)
            ? 'text-primaryOrangeRed bg-subColorPink font-medium'
            : 'text-gray-600 bg-gray-50 '
        }`}
      >
        {item}
      </div>
    ))}
  </>
);

export default TypeOfWeeklyOrder;
