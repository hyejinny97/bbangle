import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { Dispatch, SetStateAction } from 'react';
import Wrapper from '../Wrapper';

interface MultipleCheckBoxProps {
    title: string;
    values: string[];
    selectedItems?: string[];
    setSelectedItems: Dispatch<SetStateAction<string[] | undefined>>;
}

function MultipleCheckBox({
    title,
    values,
    selectedItems,
    setSelectedItems
}: MultipleCheckBoxProps) {
    const handleClick = (clickItem: string) => {
        if (!selectedItems) {
            setSelectedItems([clickItem]);
            return;
        }

        const updatedItems = selectedItems.includes(clickItem)
            ? selectedItems.filter(item => item !== clickItem)
            : [...selectedItems, clickItem];
        setSelectedItems(updatedItems);
    };

    return (
        <Wrapper title={title}>
            {values.map((item, i) => {
                const isSelected = !!selectedItems?.includes(item);

                return (
                    <div
                        key={i}
                        className={`h-[37px] p-2 rounded-lg justify-start items-center gap-1.5 inline-flex ${
                            isSelected ? 'bg-red-50' : 'bg-slate-100'
                        }`}
                        onClick={() => handleClick(item)}
                    >
                        <CheckBox
                            isChecked={isSelected}
                            title={item}
                            onClick={() => handleClick(item)}
                        />
                    </div>
                );
            })}
        </Wrapper>
    );
}

export default MultipleCheckBox;
