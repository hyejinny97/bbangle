import ResultContainer from '../client/ResultContainer';

interface ServerSearchProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const ServerSearch = ({ searchParams }: ServerSearchProps) => {
    return (
        <>
            <ResultContainer searchParams={searchParams} />
        </>
    );
};
export default ServerSearch;
