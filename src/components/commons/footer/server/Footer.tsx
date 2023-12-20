import Button from '../client/Button.tsx';
const Footer = () => {
    // 나중에 따로 뺄거
    const menu = [
        { title: '홈', icon: '' },
        { title: '검색', icon: '' },
        { title: '전체', icon: '' },
        { title: '찜', icon: '' },
        { title: '마이페이지', icon: '' }
    ];

    return (
        <div className="sm:w-[600px] sm:left-1/2 sm:translate-x-[-50%] py-[10px] flex justify-between fixed left-0 bottom-0 w-full">
            {menu.map((item, index) => (
                <Button key={index} title={item.title} />
            ))}
        </div>
    );
};

export default Footer;
