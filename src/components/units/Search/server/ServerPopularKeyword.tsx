import PopularKeyword from '../client/PopularKeyword';

function ServerPopularKeyword() {
  return (
    <>
      <div className="w-[92%] m-auto  py-[16px]">
        <div className="text-neutral-400 text-sm font-semibold mb-[10px]">인기 검색어</div>
        <PopularKeyword />
      </div>
    </>
  );
}

export default ServerPopularKeyword;
