'use client';

import UpModal from '@/components/commons/modal/UpModal';
import { useRecoilState } from 'recoil';
import { categoryItems, filterValueState, ingredientItems } from '@/atoms/atom';
import Btn from '@/components/commons/button/client/Btn';
import { useEffect, useState } from 'react';
import SingleCheckBox from '../ModalSection/SingleCheckBox';
import MultipleCheckBox from '../ModalSection/MultipleCheckBox';

interface ModalProps {
    isVisible: boolean;
    onChange: (_: boolean) => void;
}

function NewModal({ isVisible, onChange }: ModalProps) {
    const [categoryNav] = useRecoilState(categoryItems);
    const [ingredientNav] = useRecoilState(ingredientItems);
    const [filterValue, setFilterValue] = useRecoilState(filterValueState);

    const [selectedCategory, setSelectedCategory] = useState(filterValue.category);
    const [selectedIngredient, setSelectedIngredient] = useState(filterValue.tags);

    const handleConfirm = () => {
        onChange(!isVisible);
        setFilterValue(prev => ({
            category: selectedCategory ? selectedCategory : prev.category,
            tags: selectedIngredient ? selectedIngredient : prev.tags
        }));
    };

    const handleCancel = () => {
        onChange(!isVisible);
        setSelectedCategory(filterValue.category);
        setSelectedIngredient(filterValue.tags);
    };

    useEffect(() => {
        setSelectedCategory(filterValue.category);
        setSelectedIngredient(filterValue.tags);
    }, [filterValue]);

    return (
        <UpModal title="필터" isVisible={isVisible} toggleModal={() => onChange(!isVisible)}>
            <SingleCheckBox
                selectedItem={selectedCategory}
                setSelectedItem={setSelectedCategory}
                title="카테고리"
                values={categoryNav}
            />
            <MultipleCheckBox
                selectedItems={selectedIngredient}
                setSelectedItems={setSelectedIngredient}
                title="성분"
                values={ingredientNav}
            />

            <div className="w-[92%] h-[84px] m-auto flex gap-[10px] justify-center items-center">
                <Btn title="취소" active={false} onClick={handleCancel} />
                <Btn title="확인" active={true} onClick={handleConfirm} />
            </div>
        </UpModal>
    );
}

export default NewModal;
