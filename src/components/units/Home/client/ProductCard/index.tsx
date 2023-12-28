import Link from 'next/link';

const ProductsCard = () => {
    return (
        <Link href="./" className="w-[48%]">
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: 'url("/assets/breadImg.jpeg")' }}
            ></div>
            <div className="flex flex-wrap gap-1 mt-2 mb-1">
                <span className="text-xs font-medium text-lime-600">#비건</span>
                <span className="text-xs font-medium text-lime-600">#무설탕</span>
                <span className="text-xs font-medium text-lime-600">#글루텐프리</span>
            </div>
            <p className="text-xs font-normal text-neutral-400">안녕, 베이커리</p>
            <h3 className="text-xs font-normal text-zinc-600">고구마 케이크 3종</h3>
            <p className="text-sm font-semibold text-neutral-800">
                8,500 <span className="text-xs text-neutral-800">원</span>
            </p>
        </Link>
    );
};

export default ProductsCard;
