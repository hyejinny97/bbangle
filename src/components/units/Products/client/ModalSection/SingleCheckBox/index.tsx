import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { Dispatch, SetStateAction } from 'react';
import Wrapper from '../Wrapper';

interface SingleCheckBoxProps {
    title: string;
    values: string[];
    defaultValue?: string;
    selectedItem?: string;
    setSelectedItem: Dispatch<SetStateAction<string | undefined>>;
}

function SingleCheckBox({ title, values, selectedItem, setSelectedItem }: SingleCheckBoxProps) {
    const handleClick = (clickItem: string) => {
        setSelectedItem(clickItem);
    };

    return (
        <Wrapper title={title}>
            {values.map((item, i) => {
                const isSelected = selectedItem === item;
                console.log(selectedItem, item);

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

export default SingleCheckBox;
