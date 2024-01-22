import InputContainer from '../client/InputContainer';
import ServerPopularKeyword from './ServerPopularKeyword';
import ServerRecentKeyword from './ServerRecentKeyword';

const ServerHome = () => {
    return (
        <>
            <InputContainer />
            <ServerRecentKeyword />
            <ServerPopularKeyword />
        </>
    );
};
export default ServerHome;
