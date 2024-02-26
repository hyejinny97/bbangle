import Radio from '@/components/commons/radio/Radio';
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
      {values.map(item => {
        const isSelected = selectedItem === item;

        return (
          <div
            key={item}
            className={`h-[37px] p-2 rounded-lg justify-start items-center gap-1.5 inline-flex ${
              isSelected ? 'bg-red-50' : 'bg-slate-100'
            }`}
            onClick={() => handleClick(item)}
          >
            <Radio isChecked={isSelected} onChange={() => handleClick(item)}>
              <div
                className={`text-gray-800 text-xs ${isSelected ? 'font-semibold' : 'font-normal'}`}
              >
                {item}
              </div>
            </Radio>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default SingleCheckBox;
