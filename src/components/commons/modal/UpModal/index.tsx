'use client';

import BackDrop from '@/components/commons/backgrounds/BackDrop';
import { ReactNode } from 'react';
import { GrClose } from 'react-icons/gr';

interface UpModalProps {
    title: string;
    children: ReactNode;
    isVisible: boolean;
    toggleModal: () => void;
}

const UpModal = ({ title, children, isVisible, toggleModal }: UpModalProps) => {
    const handleToggle = () => {
        toggleModal();
    };

    return (
        <>
            <BackDrop isVisible={isVisible} onClick={handleToggle} />
            <div
                className={`w-full max-w-[600px] max-h-[76vh] z-[200] bg-color-White fixed left-1/2 -translate-x-1/2 ${
                    isVisible ? 'bottom-0' : '-bottom-full'
                } z-[5001] rounded-tl-2xl rounded-tr-2xl transition-all pb-4`}
            >
                <div className="relative py-4">
                    <h4 className="text-center">{title}</h4>
                    <button
                        className="absolute -translate-y-1/2 right-5 top-1/2"
                        onClick={handleToggle}
                    >
                        <GrClose />
                    </button>
                </div>
                {children}
            </div>
        </>
    );
};

export default UpModal;
