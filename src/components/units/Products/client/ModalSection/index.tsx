import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { useState } from 'react';

interface ModalSectionProps {
    title: string;
    values: string[];
    // filterValue: string | string[];
    // onChange: (_: string | string[]) => void;
    multiple?: boolean;
}

function ModalSection({ title, values, multiple }: ModalSectionProps) {
    const [selectedItems, setSelectedItems] = useState<string | string[]>();

    const handleClick = (clickItem: string) => {
        if (multiple) {
            const updatedItems = Array.isArray(selectedItems)
                ? selectedItems.includes(clickItem)
                    ? selectedItems.filter(item => item !== clickItem) // 이미 선택된 항목 제거
                    : [...selectedItems, clickItem] // 새 항목 추가
                : [clickItem];
            setSelectedItems(updatedItems);
        } else {
            setSelectedItems(clickItem);
        }
    };

    // useEffect(() => {
    //     setSelectedItems(filterValue);
    // }, [filterValue]);

    return (
        <div className="py-4 w-[92%] m-auto flex flex-col gap-[10px]">
            <div className="text-sm font-medium text-zinc-600">{title}</div>
            <div className="flex flex-wrap gap-[10px]">
                {values ? (
                    values.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className={`h-[37px] p-2 rounded-lg justify-start items-center gap-1.5 inline-flex ${
                                    multiple
                                        ? Array.isArray(selectedItems) &&
                                          selectedItems.includes(item)
                                            ? 'bg-red-50'
                                            : 'bg-slate-100'
                                        : selectedItems === item
                                          ? 'bg-red-50'
                                          : 'bg-slate-100'
                                }`}
                                onClick={() => handleClick(item)}
                            >
                                <CheckBox
                                    isChecked={
                                        multiple
                                            ? Array.isArray(selectedItems) &&
                                              selectedItems.includes(item)
                                            : selectedItems === item
                                    }
                                    title={item}
                                    onClick={() => handleClick(item)}
                                />
                            </div>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default ModalSection;
