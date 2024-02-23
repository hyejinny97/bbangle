import ServerSearch from '@/components/units/Search/server/ServerSearch';

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function sendSearchKeyword(keyword: string) {
  try {
    console.log(keyword);
    const response = await fetch(`https://api.bbangle.store/api/v1/search?keyword=${keyword}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ keyword })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
const Search = async ({ searchParams }: SearchPageProps) => {
  const data = await sendSearchKeyword('55');
  console.log(111 + JSON.stringify(data));
  return <ServerSearch searchParams={searchParams} />;
};

export default Search;
