const Button = ({ title }) => {
    return (
        <button className="flex flex-col cursor-pointer items-center justify-center w-1/5 gap-2">
            <div className="w-2 h-2 bg-black"></div>
            <span>{title}</span>
        </button>
    );
};
export default Button;
