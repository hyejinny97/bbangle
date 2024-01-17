import { useEffect, useState } from 'react';
import CheckBox from '../../checkbox/client/Checkbox';
import { FilterTypes, IFilterType, navItem } from '../type';

const FilterModal = ({
    selectedTags,
    setSelectedTags,
    isModalOpen,
    setIsModalOpen
}: FilterTypes) => {
    const [chooseId, setChoose] = useState<number>(1);
    const checkHandled = (id: number) => {
        setChecked(checked);
        setChoose(id);
    };
    useEffect(() => {
        setSelectedTags(
            navItem.filter((item: IFilterType) => item.subTab.map(sub => sub.id === chooseId))
        );
    });
    const [checked, setChecked] = useState<boolean>(false); // 체크 여부 판단
    return (
        <div className="w-[100%] h-[100%] bg-white flex-col justify-center items-start flex">
            {/* <div className="w-[360px] h-8 relative bg-white flex-col justify-start items-start flex">
                <div className="w-[360px] h-8 bg-white backdrop-blur-[250px]" />
                <div className="w-[360px] h-8 bg-black" />
            </div> */}
            <div className="self-stretch px-4 py-2.5 bg-white justify-start items-center inline-flex">
                <div className="grow shrink basis-0 h-4 justify-start items-center flex">
                    <div className="grow shrink basis-0 text-center text-neutral-800 text-base font-medium font-['Pretendard'] leading-none">
                        필터
                    </div>
                    <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
                        닫기
                    </button>
                </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start inline-flex">
                <div className="h-[204px] px-4 pt-4 pb-[26px] border-b border-neutral-100 flex-col justify-start items-start gap-2.5 flex">
                    {selectedTags.map((item: IFilterType, index) =>
                        item.subTab.map(sub => {
                            return (
                                <div key={index}>
                                    <div className="text-zinc-600 text-sm font-semibold font-['Pretendard'] leading-[21px]">
                                        {item.MainTab}
                                    </div>
                                    <CheckBox
                                        checked={checked}
                                        onChange={() => checkHandled(sub.id)}
                                        children={
                                            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                                                <div className="p-2 bg-red-50 rounded-lg justify-start items-center gap-1.5 flex">
                                                    <div className="w-4 h-4 relative">
                                                        <div className="w-4 h-4 left-0 top-0 absolute bg-red-500 rounded border border-red-500" />
                                                    </div>
                                                    <div className="text-neutral-800 text-sm font-semibold font-['Pretendard'] leading-[21px]">
                                                        {sub.name}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
                <div className="h-[157px] px-4 pt-4 pb-[26px] border-b border-neutral-100 flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-zinc-600 text-sm font-semibold font-['Pretendard'] leading-[21px]">
                        성분
                    </div>
                    <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                        <div className="p-2 bg-red-50 rounded-lg justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-red-500 rounded border border-red-500" />
                            </div>
                            <div className="text-neutral-800 text-sm font-semibold font-['Pretendard'] leading-[21px]">
                                전체
                            </div>
                        </div>
                        <div className="p-2 bg-slate-100 rounded-lg justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-neutral-200 rounded border border-neutral-200" />
                            </div>
                            <div className="text-neutral-800 text-sm font-normal font-['Pretendard'] leading-[21px]">
                                무설탕
                            </div>
                        </div>
                        <div className="p-2 bg-slate-100 rounded-lg justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-neutral-200 rounded border border-neutral-200" />
                            </div>
                            <div className="text-neutral-800 text-sm font-normal font-['Pretendard'] leading-[21px]">
                                글루텐프리
                            </div>
                        </div>
                        <div className="p-2 bg-slate-100 rounded-lg justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-neutral-200 rounded border border-neutral-200" />
                            </div>
                            <div className="text-neutral-800 text-sm font-normal font-['Pretendard'] leading-[21px]">
                                키토제닉
                            </div>
                        </div>
                        <div className="p-2 bg-slate-100 rounded-lg justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-neutral-200 rounded border border-neutral-200" />
                            </div>
                            <div className="text-neutral-800 text-sm font-normal font-['Pretendard'] leading-[21px]">
                                고단백
                            </div>
                        </div>
                        <div className="p-2 bg-slate-100 rounded-lg justify-start items-center gap-1.5 flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-neutral-200 rounded border border-neutral-200" />
                            </div>
                            <div className="text-neutral-800 text-sm font-normal font-['Pretendard'] leading-[21px]">
                                비건
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[131px] px-4 pt-4 pb-[26px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-zinc-600 text-sm font-semibold font-['Pretendard'] leading-[21px]">
                        가격
                    </div>
                    <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-neutral-800 text-xl font-bold font-['Pretendard'] leading-[30px]">
                            0 ~ 50,000원
                        </div>
                        <div className="w-[328px] h-6 relative">
                            <div className="w-[328px] h-3 left-0 top-[6px] absolute bg-gray-100 rounded-[50px]" />
                            <div className="w-[164px] h-3 left-0 top-[6px] absolute bg-red-500 rounded-[50px]" />
                            <div className="w-6 h-6 left-0 top-0 absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-white" />
                                <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-white rounded-full" />
                            </div>
                            <div className="w-6 h-6 left-[140px] top-0 absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-white" />
                                <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-white rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch p-4 bg-white justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[52px] px-2.5 py-3.5 bg-white rounded-[50px] border border-gray-200 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-800 text-base font-medium font-['Pretendard'] leading-normal">
                        취소
                    </div>
                </div>
                <div className="grow shrink basis-0 h-[52px] px-2.5 py-3.5 bg-neutral-800 rounded-[50px] justify-center items-center gap-2.5 flex">
                    <div className="text-white text-base font-medium font-['Pretendard'] leading-normal">
                        확인
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FilterModal;
