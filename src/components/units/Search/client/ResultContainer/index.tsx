'use client';

import { useEffect, useState } from 'react';
import ServerPopularKeyword from '../../server/ServerPopularKeyword';
import ServerRecentKeyword from '../../server/ServerRecentKeyword';
import SearchResult from '../SearchResult';
import { useGetSearchResultQuery } from '../../hooks/useGetSearchResultQuery';
import SearchInput from '@/components/commons/inputs/SearchInput';
import Back from '@/components/commons/header/assets/back_arrow.svg';

const ResultContainer = () => {
    const [keyword, setKeyword] = useState<string>('');
    const { data, refetch } = useGetSearchResultQuery(keyword);

    console.log('검색결과', JSON.stringify(data?.boards));

    const goBackHandler = () => {
        window.history.back();
    };

    useEffect(() => {
        refetch();
        console.log(keyword);
    }, [keyword]);

    return (
        <>
            <div className="w-[92%] m-auto flex items-center gap-[17px]">
                <div onClick={goBackHandler}>
                    <Back />
                </div>
                <SearchInput placeholder="궁금한 상품을 찾아보세요!" onEnter={setKeyword} />
            </div>

            {keyword ? (
                <SearchResult
                    resultProducts={data?.boards}
                    resultStores={data?.stores}
                    refetch={refetch}
                />
            ) : (
                <>
                    <ServerRecentKeyword />
                    <ServerPopularKeyword />
                </>
            )}
        </>
    );
};
export default ResultContainer;
