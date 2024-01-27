const BackDrop = ({ isVisible, onClick }: { isVisible: boolean; onClick: any }) => {
    return (
        <div
            className={`fixed top-0 w-full max-w-[600px] h-full bg-black bg-opacity-50 z-10  ${
                isVisible ? 'block' : 'hidden'
            }`}
            onClick={onClick}
        ></div>
    );
};

export default BackDrop;
