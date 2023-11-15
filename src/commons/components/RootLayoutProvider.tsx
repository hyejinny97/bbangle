'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/Global';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';

const RootLayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={{ theme }}>
                <RecoilRoot>{children}</RecoilRoot>
            </ThemeProvider>
        </>
    );
};

export default RootLayoutProvider;
