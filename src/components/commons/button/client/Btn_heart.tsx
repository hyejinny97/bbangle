import React, { MouseEvent } from 'react';
import Red from '@/components/commons/button/assets/icn_heart_red.svg';
import Gray from '@/components/commons/button/assets/icn_heart_gray.svg';

interface ButtonProps {
    isLiked: boolean;
    onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function BtnHeart({ isLiked, onClick }: ButtonProps) {
    return (
        <div className="w-full text-center">
            <button onClick={onClick}>
                <div className={isLiked ? 'animate-pop' : ''}>{isLiked ? <Red /> : <Gray />}</div>
            </button>
        </div>
    );
}

export default BtnHeart;
