import { IProductDetailType } from '../../types';
import TagContainer from '../TagContainer';

interface BoardInfoProps {
    data: IProductDetailType;
}

function transformTag(tag: string): string {
    if (tag === 'fri') {
        return '금';
    }
    if (tag === 'mon') {
        return '월';
    }
    if (tag === 'sat') {
        return '토';
    }
    if (tag === 'sun') {
        return '일';
    }
    if (tag === 'thu') {
        return '목';
    }
    if (tag === 'tue') {
        return '화';
    }
    if (tag === 'wed') {
        return '수';
    }
    return tag;
}

function BoardInfo({ data }: BoardInfoProps) {
    const products = data.board.products;
    const uniqueTags = Array.from(new Set(products.map(product => product.tags).flat()));
    const orderAvailableDays = data.board.orderAvailableDays;
    let availableDays = Object.keys(orderAvailableDays).filter(day => orderAvailableDays[day]);
    availableDays = availableDays.map(item => transformTag(item));

    return (
        <>
            <div className="py-[16px] w-[92%] m-auto">
                <div className="pb-[16px]">
                    <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex ">
                        {uniqueTags.map((tag, i) => (
                            <TagContainer key={i} tag={tag} />
                        ))}
                    </div>
                    <div className="text-base font-normal leading-tight text-[#424242] mb-[2px] line">
                        {data.board.title}
                    </div>
                    <div className="text-base font-bold leading-tight">
                        <span className="text-xl font-bold leading-normal">{data.board.price}</span>
                        원
                    </div>
                </div>

                <div className="border-b border-[#FAFAFA] border-solid"></div>

                <div className="flex flex-col gap-[16px] py-[16px] ">
                    <div>
                        <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[6px]">
                            주문 가능일
                        </h2>
                        <div className="flex gap-[4px] ">
                            {['월', '화', '수', '목', '금', '토', '일'].map(item => (
                                <div
                                    key={item}
                                    className={`rounded-full w-[24px] h-[24px] text-xs font-normal flex items-center justify-center  ${
                                        availableDays.includes(item)
                                            ? 'text-[#F04C28] bg-[#FEEDEA] font-medium'
                                            : 'text-[#757575] bg-[#FAFAFA] '
                                    }`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[6px]">상품 구성</h2>
                        <div className="text-xs">상품입니다</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoardInfo;
