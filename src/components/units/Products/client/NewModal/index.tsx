import CheckBox from '@/components/commons/checkbox/client/Checkbox';

import { useState } from 'react';
import X from './assets/x_btn.svg';

function NewModal() {
    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];
    const tags = ['전체', '글루텐프리', '고단백', '비건', '무설탕', '키토제닉'];
    return (
        <>
            <div className=" w-full m-auto fixed bottom-0 left-0 z-10 bg-white">
                <div className="py-[22px]">
                    <div className="grow relative justify-start items-center flex">
                        <div className="grow text-center ">
                            <p>필터</p>
                            <button
                                type="button"
                                onClick={() => {}}
                                className="absolute right-[16px] top-0"
                            >
                                <X />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[92%] m-auto">
                    <Section title="카테고리" values={navItem} />
                    <Section title="카테고리" values={tags} />
                    <Section title="카테고리" />
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
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="py-4 flex flex-col gap-[10px]">
            <div className="text-zinc-600 text-sm font-semibold">{title}</div>
            <div className="flex flex-wrap gap-[10px]">
                {values ? (
                    values.map((item, i) => (
                        <div
                            key={i}
                            className="h-[37px] p-2 bg-slate-100 rounded-lg justify-start items-center gap-1.5 inline-flex"
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
                        <div className="w-[328px] h-3 bg-gray-100 rounded-[50px]"></div>
                        <input
                            type="range"
                            id="range-slider"
                            min="0"
                            max="100"
                            value="1"
                            onChange={() => {}}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
export default NewModal;
