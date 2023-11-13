'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/Global';
import { ThemeProvider } from '@emotion/react';

const RootLayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={{}}>
                <RecoilRoot>{children}</RecoilRoot>
            </ThemeProvider>
        </>
    );
};

export default RootLayoutProvider;
