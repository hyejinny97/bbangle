'use client';

import Logo from '@/commons/assets/logo.svg';

const LogoContainer = () => {
    return (
        <div className="w-[100%] px-4 pt-2.5 bg-white">
            <h1>
                <Logo />
            </h1>
        </div>
    );
};

export default LogoContainer;
