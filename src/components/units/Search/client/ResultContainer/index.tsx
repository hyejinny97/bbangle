'use client';

import { useState } from 'react';
import ServerPopularKeyword from '../../server/ServerPopularKeyword';
import ServerRecentKeyword from '../../server/ServerRecentKeyword';
import SearchResult from '../SearchResult';
import InputContainer from '../InputContainer';

const ResultContainer = () => {
    const [keyword, setKeyword] = useState<string>('');
    return (
        <>
            <InputContainer keyword={keyword} onChange={setKeyword} />
            {keyword ? (
                <SearchResult />
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
