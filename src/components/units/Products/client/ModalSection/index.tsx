import { transformIngredientEngishTag, transformTag } from '@/commons/constants/transfromTag';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Slider from 'rc-slider';
import { useState } from 'react';

interface SectionProps {
    title: string;
    values?: string[];
    filterValue?: string | string[] | null;
    multiple?: boolean;
    onChange?: (_newItem: string[] | string) => void;
}

function ModalSection({ title, values, filterValue, multiple, onChange }: SectionProps) {
    const [value, setValue] = useState([0, 1000]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    console.log(11 + JSON.stringify(filterValue));

    const dynamicMinValue = 0;
    const dynamicMaxValue = 100000;

    const handleChange = (newValue: any) => {
        const clampedValue = [
            Math.min(newValue[0], dynamicMaxValue),
            Math.min(newValue[1], dynamicMaxValue)
        ];

        setValue(clampedValue);
    };

    const handleClick = (item: string) => {
        let newSelectedItems;

        if (multiple) {
            newSelectedItems = selectedItems.includes(item)
                ? selectedItems.filter(selectedItem => selectedItem !== item)
                : [...selectedItems, transformIngredientEngishTag(item)];
        } else {
            newSelectedItems = [transformTag(item)];
        }

        setSelectedItems(newSelectedItems);
        if (onChange) {
            onChange(newSelectedItems);
        }
    };

    return (
        <div className="py-4 flex flex-col gap-[10px]">
            <div className="text-sm font-semibold text-zinc-600">{title}</div>
            <div className="flex flex-wrap gap-[10px]">
                {values ? (
                    values.map((item, i) => {
                        // 여기에서 item 변수를 선언 및 할당
                        const transformedItem = multiple
                            ? transformIngredientEngishTag(item)
                            : transformTag(item);

                        return (
                            <div
                                key={i}
                                className={`h-[37px] p-2 rounded-lg justify-start items-center gap-1.5 inline-flex ${
                                    selectedItems.includes(transformedItem)
                                        ? 'bg-red-50'
                                        : 'bg-slate-100'
                                }`}
                                onClick={() => handleClick(transformedItem)}
                            >
                                <CheckBox
                                    isChecked={selectedItems.includes(transformedItem)}
                                    title={item}
                                    onClick={() => handleClick(transformedItem)}
                                />
                            </div>
                        );
                    })
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
