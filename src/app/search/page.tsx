import ServerPopularKeyword from '@/components/units/Search/server/ServerPopularKeyword';
import ServerRecentKeyword from '@/components/units/Search/server/ServerRecentKeyword';

const Search = () => {
  return (
    <>
      <ServerRecentKeyword />
      <ServerPopularKeyword />
    </>
  );
};

export default Search;
