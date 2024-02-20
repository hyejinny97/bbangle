import ServerPopularKeyword from '../../server/ServerPopularKeyword';
import ServerRecentKeyword from '../../server/ServerRecentKeyword';
// import SearchResult from '../SearchResult';
import SearchInputContainer from '@/components/units/Search/client/SearchInputContainer';
import BtnBack from '@/components/commons/button/client/Btn_back';

interface ResultContainerProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const ResultContainer = ({ searchParams }: ResultContainerProps) => {
    return (
        <>
            <div className="w-[92%] m-auto flex items-center gap-[17px] py-[10px]">
                <BtnBack />
                <SearchInputContainer />
            </div>

            {searchParams?.query ? (
                <></>
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
