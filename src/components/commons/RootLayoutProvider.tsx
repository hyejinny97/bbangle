'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../commons/styles/Global';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../commons/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

const RootLayoutProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={{ theme }}>
                    <CookiesProvider>
                        <RecoilRoot>{children}</RecoilRoot>
                    </CookiesProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
};

export default RootLayoutProvider;
