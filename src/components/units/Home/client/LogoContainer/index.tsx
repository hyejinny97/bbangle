'use client';

import Logo from '@/commons/assets/logo.svg';
import Link from 'next/link';

const LogoContainer = () => {
    return (
        <div className="w-[92%] m-auto pt-2.5 bg-color-White">
            <h1>
                <Link href="/">
                    <Logo />
                </Link>
            </h1>
        </div>
    );
};

export default LogoContainer;
