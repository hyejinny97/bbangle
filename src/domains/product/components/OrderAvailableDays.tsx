import InfoWrapper from '@/domains/product/components/InfoWrapper';
import TypeOfMonthlyOrder from '@/domains/product/components/TypeOfMonthlyOrder';
import TypeOfWeeklyOrder from '@/domains/product/components/TypeOfWeeklyOrder';
import { IProductDetailType } from '@/domains/product/types/productDetailType';
import { transformDayTag } from '@/domains/product/utils/transfromTag';
import BellIcons from '@/shared/components/icons/BellIcons';

interface DetailOrderAvailableDaysProps {
  data: IProductDetailType;
}

const OrderAvailableDays = ({ data }: DetailOrderAvailableDaysProps) => {
  const { orderAvailableDays } = data.board;
  let availableDays = Object.keys(orderAvailableDays).filter((day) => orderAvailableDays[day]);
  availableDays = availableDays.map((item) => transformDayTag(item));

  const weekly = true;

  return (
    <InfoWrapper title="주문가능일">
      <div className="flex justify-between items-center">
        <div className="flex gap-[4px]">
          {weekly ? <TypeOfWeeklyOrder availableDays={availableDays} /> : <TypeOfMonthlyOrder />}
        </div>
        <button
          type="button"
          className="p-[6px] flex gap-[2px] typo-body-12-medium text-gray-900 border border-gray-200 rounded-[4px]"
        >
          <BellIcons shape="off" />
          빵켓팅 알림 신청
        </button>
      </div>
    </InfoWrapper>
  );
};
export default OrderAvailableDays;
