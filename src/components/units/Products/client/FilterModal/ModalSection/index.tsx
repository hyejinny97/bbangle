import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { useEffect } from 'react';

interface ModalSectionProps {
    title: string;
    values: string[];
    storeValue: string | string[] | null;
    setStoreValue: React.Dispatch<React.SetStateAction<string | string[] | null>>;
    multiple?: boolean;
}

function ModalSection({ title, values, storeValue, setStoreValue, multiple }: ModalSectionProps) {
    const handleClick = (clickItem: string) => {
        setStoreValue(prev => {
            if (multiple) {
                if (Array.isArray(prev)) {
                    if (prev.includes(clickItem)) {
                        return prev.filter(item => item !== clickItem);
                    }
                    return [...prev, clickItem];
                }
                return [clickItem];
            }
            return clickItem;
        });
    };

    useEffect(() => {
        setStoreValue(storeValue);
    }, [storeValue, setStoreValue]);

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
                                        ? Array.isArray(storeValue) && storeValue.includes(item)
                                            ? 'bg-red-50'
                                            : 'bg-slate-100'
                                        : storeValue === item
                                          ? 'bg-red-50'
                                          : 'bg-slate-100'
                                }`}
                                onClick={() => handleClick(item)}
                            >
                                <CheckBox
                                    isChecked={
                                        multiple
                                            ? Array.isArray(storeValue) && storeValue.includes(item)
                                            : storeValue === item
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
