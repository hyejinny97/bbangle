import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Slider from 'rc-slider';
import { useState } from 'react';

interface SectionProps {
    title: string;
    values?: string[];
    onChange?: (_newItem: string | null) => void;
}

function ModalSection({ title, values, onChange }: SectionProps) {
    const [value, setValue] = useState([0, 1000]);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const dynamicMinValue = 0;
    const dynamicMaxValue = 100000;

    const handleChange = (newValue: any) => {
        const clampedValue = [
            Math.min(newValue[0], dynamicMaxValue),
            Math.min(newValue[1], dynamicMaxValue)
        ];

        setValue(clampedValue);
    };

    return (
        <div className="py-4 flex flex-col gap-[10px]">
            <div className="text-sm font-semibold text-zinc-600">{title}</div>
            <div className="flex flex-wrap gap-[10px]">
                {values ? (
                    values.map((item, i) => (
                        <div
                            key={i}
                            className={`h-[37px] p-2  rounded-lg justify-start items-center gap-1.5 inline-flex ${
                                item === selectedItem ? 'bg-red-50 ' : ' bg-slate-100'
                            }`}
                        >
                            <CheckBox
                                isChecked={item === selectedItem}
                                title={item}
                                onClick={() => {
                                    const newItem = item === selectedItem ? null : item;
                                    setSelectedItem(newItem);
                                    if (onChange) {
                                        onChange(newItem);
                                    }
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <>
                        <p className="text-xl font-bold text-neutral-800">
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

export default ModalSection;
