interface Props {
    title: string;
}

function PageTitle({ title }: Props) {
    return <h1 className="font-semibold text-gray-900 mx-[16px] my-[22px]">{title}</h1>;
}

export default PageTitle;
