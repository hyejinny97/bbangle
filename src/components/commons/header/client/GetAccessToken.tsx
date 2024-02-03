'use client';

import { useEffect } from 'react';

const GetAccessToken = () => {
    useEffect(() => {
        const cookieToken = document.cookie;
        // .split(';')
        // .map(cookie => cookie.trim())
        // .find(cookie => cookie.startsWith('token='));

        console.log(cookieToken);

        if (cookieToken) {
            const tokenValue = cookieToken.split('=')[1];

            sessionStorage.setItem('token', tokenValue);
        }
    }, []);

    return <></>;
};

export default GetAccessToken;
