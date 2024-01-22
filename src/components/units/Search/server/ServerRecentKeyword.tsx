import RecentKeyword from '../client/RecentKeyword';

function ServerRecentKeyword() {
    return (
        <div className="w-[92%] m-auto  py-[16px]">
            <div className="text-neutral-400 text-sm font-semibold mb-[10px]">최근 검색어</div>
            <RecentKeyword />
        </div>
    );
}

export default ServerRecentKeyword;
