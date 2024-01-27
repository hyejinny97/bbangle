'use client';

import React, { MouseEvent, useEffect, useState } from 'react';
import X from './assets/x_btn.svg';
import 'rc-slider/assets/index.css';
import Btn from '@/components/commons/button/client/Btn';
import { useRecoilState } from 'recoil';
import { filterValueState, modalState } from '@/atoms/atom';
import ModalSection from '../ModalSection';

const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];
const tags = ['전체', '글루텐프리', '고단백', '비건', '무설탕', '키토제닉'];

// interface filterType {
//     [key: string]: string | null | string[];
// }

interface ModalProps {
    refetch: () => void;
    // onChange: React.Dispatch<React.SetStateAction<filterType>>;
}

function NewModal({ refetch }: ModalProps) {
    const [openModal, setOpenModal] = useRecoilState(modalState);
    const [isVisible, setIsVisible] = useState(openModal);
    const [animationClass, setAnimationClass] = useState('animate-slideUp');
    const [filterValue, setFilterValue] = useRecoilState(filterValueState);
    const [tempFilterValue, setTempFilterValue] = useState(filterValue);

    const handleCloseModal = () => {
        setAnimationClass('animate-slideDown');
        setTimeout(() => {
            setIsVisible(false);
            setOpenModal(false);
        }, 300);
    };

    const handleModalValueChange = (
        sectionTitle: string,
        selectedItem: string | string[] | null
    ) => {
        setTempFilterValue(prevValues => {
            const updatedValues = { ...prevValues, [sectionTitle]: selectedItem };
            return updatedValues;
        });
    };

    const handleConfirm = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //onChange(filterValue);
        refetch();
        setFilterValue(tempFilterValue);
        handleCloseModal();
    };

    useEffect(() => {
        if (openModal) {
            setIsVisible(true);
            setAnimationClass('animate-slideUp');
        } else if (!openModal && isVisible) {
            handleCloseModal();
        }
    }, [openModal, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 w-full max-w-[600px] h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div
                className={`w-full max-w-[602px] border fixed bottom-0 rounded-t-[20px] bg-white ${animationClass}`}
            >
                <div className="py-[22px]">
                    <div className="relative flex items-center justify-start grow">
                        <div className="text-center grow ">
                            <p>필터</p>
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="absolute right-[16px] top-0"
                            >
                                <X />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[92%] m-auto py-[16px]">
                    <ModalSection
                        title="카테고리"
                        values={navItem}
                        filterValue={filterValue.category}
                        onChange={selectedItem =>
                            handleModalValueChange('category', selectedItem[0])
                        }
                    />
                    <ModalSection
                        multiple
                        title="성분"
                        values={tags}
                        filterValue={filterValue.tags}
                        onChange={selectedItem => handleModalValueChange('tags', selectedItem)}
                    />
                    <ModalSection title="가격" />
                </div>
                <div className="w-[92%] h-[84px] m-auto flex gap-[10px] justify-center items-center">
                    <Btn title="취소" active={false} onClick={handleConfirm} />
                    <Btn title="확인" active={true} onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
}

export default NewModal;
