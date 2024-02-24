import ServerSearch from '@/components/units/Search/server/ServerSearch';

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Search = async ({ searchParams }: SearchPageProps) => (
  <ServerSearch searchParams={searchParams} />
);

export default Search;
