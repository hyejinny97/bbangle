import CheckBox from '@/components/commons/checkbox/client/Checkbox';

import { useState } from 'react';
import X from './assets/x_btn.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Btn from '@/components/commons/button/client/Btn';

interface ModalProps {
    openModal: boolean;
    onClick?: () => void;
}

function NewModal({ openModal, onClick }: ModalProps) {
    if (!openModal) {
        return null;
    }
    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];
    const tags = ['전체', '글루텐프리', '고단백', '비건', '무설탕', '키토제닉'];

    return (
        <>
            <div className="max-w-[600px] py-[22px] border rounded-t-[20px] m-auto fixed bottom-0 left-[3%] right-[3%] z-10 bg-white">
                <div className="grow relative justify-start items-center flex">
                    <div className="grow text-center ">
                        <p>필터</p>
                        <button
                            type="button"
                            onClick={onClick}
                            className="absolute right-[16px] top-0"
                        >
                            <X />
                        </button>
                    </div>
                </div>
                <div className="w-[92%] m-auto py-[16px]">
                    <Section title="카테고리" values={navItem} />
                    <Section title="성분" values={tags} />
                    <Section title="가격" />
                </div>
                <div className="w-full h-[84px] flex gap-[10px] justify-center items-center">
                    <Btn title="취소" active={false} onClick={() => {}} />
                    <Btn title="확인" active={true} onClick={() => {}} />
                </div>
            </div>
        </>
    );
}

interface SectionProps {
    title: string;
    values?: string[];
}

function Section({ title, values }: SectionProps) {
    const [value, setValue] = useState([0, 1000]);
    const [isChecked, setIsChecked] = useState(false);

    const dynamicMinValue = 0;
    const dynamicMaxValue = 100000;

    const handleChange = (newValue: number[]) => {
        const clampedValue = [
            Math.min(newValue[0], dynamicMaxValue),
            Math.min(newValue[1], dynamicMaxValue)
        ];
        setValue(clampedValue);
    };

    return (
        <div className="py-4 flex flex-col gap-[10px]">
            <div className="text-zinc-600 text-sm font-semibold">{title}</div>
            <div className="flex flex-wrap gap-[10px]">
                {values ? (
                    values.map((item, i) => (
                        <div
                            key={i}
                            className={`h-[37px] p-2  rounded-lg justify-start items-center gap-1.5 inline-flex ${
                                isChecked ? 'bg-red-50 ' : ' bg-slate-100'
                            }`}
                        >
                            <CheckBox
                                isChecked={isChecked}
                                title={item}
                                onClick={() => setIsChecked(!isChecked)}
                            />
                        </div>
                    ))
                ) : (
                    <>
                        <p className="text-neutral-800 text-xl font-bold">
                            {value[0]}~{value[1]}
                        </p>
                        <div className="relative w-full h-[4px] bg-[#dddddd]-500">
                            <Slider
                                range
                                step={100}
                                value={value}
                                min={dynamicMinValue}
                                max={dynamicMaxValue}
                                onChange={handleChange}
                                trackStyle={{ backgroundColor: '#F04C28', height: 10 }}
                                railStyle={{ backgroundColor: '#ECEFF1', height: 10 }}
                                handleStyle={{
                                    height: 20,
                                    border: '5px solid #F04C28 ',
                                    width: 20,
                                    marginTop: -5,
                                    backgroundColor: 'white',
                                    zIndex: 10
                                }}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default NewModal;
