'use client';

import UpModal from '@/components/commons/modal/UpModal';
import ModalSection from '../ModalSection';
import { useRecoilState } from 'recoil';
import { categoryItems, ingredientItems } from '@/atoms/atom';
import Btn from '@/components/commons/button/client/Btn';

interface ModalProps {
    isVisible: boolean;
    onChange: (_: boolean) => void;
}

function NewModal({ isVisible, onChange }: ModalProps) {
    const [categoryNav] = useRecoilState(categoryItems);
    const [ingredientNav] = useRecoilState(ingredientItems);
    // const filterValue = useRecoilValue(filterValueState);
    // const [selectedCategory, setSelectedCategory] = useState(filterValue.category);
    // const [selectedTags, setSelectedTags] = useState([]);

    const handleConfirm = () => {
        onChange(!isVisible);
        // setFilterValue(prev => ({
        //     ...prev,
        //     category: transformTag(selectedCategory),
        //     tags: selectedTags
        // }));
    };

    return (
        <>
            <UpModal title="필터" isVisible={isVisible} toggleModal={() => onChange(!isVisible)}>
                <ModalSection title="카테고리" values={categoryNav} multiple={false} />
                <ModalSection title="성분" values={ingredientNav} multiple={true} />

                <div className="w-[92%] h-[84px] m-auto flex gap-[10px] justify-center items-center">
                    <Btn title="취소" active={false} onClick={handleConfirm} />
                    <Btn title="확인" active={true} onClick={handleConfirm} />
                </div>
            </UpModal>
        </>
    );
}

export default NewModal;
