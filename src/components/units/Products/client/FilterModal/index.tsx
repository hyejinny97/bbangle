'use client';

import UpModal from '@/components/commons/modal/UpModal';
import { useRecoilState } from 'recoil';
import { filterValueState } from '@/atoms/atom';
import Btn from '@/components/commons/button/client/Btn';
import { SetStateAction, useEffect, useState } from 'react';
import SingleCheckBox from './ModalSection/SingleCheckBox';
import MultipleCheckBox from './ModalSection/MultipleCheckBox';
import { FILTER_VALUES } from '@/commons/constants/filterValues';

interface ModalProps {
    isVisible: boolean;
    setVisible: React.Dispatch<SetStateAction<boolean>>;
}

function FilterModal({ isVisible, setVisible }: ModalProps) {
    const [filterValue, setFilterValue] = useRecoilState(filterValueState);
    const [selectedCategory, setSelectedCategory] = useState(filterValue.category);
    const [selectedTags, setSelectedTags] = useState(filterValue.tags);

    const handleConfirm = () => {
        setVisible(!isVisible);
        setFilterValue(prev => ({
            category: selectedCategory ? selectedCategory : prev.category,
            tags: selectedTags ? selectedTags : prev.tags
        }));
    };

    const handleCancel = () => {
        setVisible(!isVisible);
        setSelectedCategory(filterValue.category);
        setSelectedTags(filterValue.tags);
    };

    useEffect(() => {
        setSelectedCategory(filterValue.category);
        setSelectedTags(filterValue.tags);
    }, [filterValue]);

    return (
        <UpModal title="필터" isVisible={isVisible} toggleModal={handleCancel}>
            <SingleCheckBox
                selectedItem={selectedCategory}
                setSelectedItem={setSelectedCategory}
                title="카테고리"
                values={FILTER_VALUES.categories}
            />
            <MultipleCheckBox
                uniqueValue="전체"
                selectedItems={selectedTags}
                setSelectedItems={setSelectedTags}
                title="성분"
                values={FILTER_VALUES.tags}
            />

            <div className="w-[92%] h-[84px] m-auto flex gap-[10px] justify-center items-center">
                <Btn title="취소" active={false} onClick={handleCancel} />
                <Btn title="확인" active={true} onClick={handleConfirm} />
            </div>
        </UpModal>
    );
}

export default FilterModal;
