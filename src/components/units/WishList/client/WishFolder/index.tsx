import WishLogo from '@/components/units/WishList/assets/wishLogo.svg';
import { IWishList } from '@/components/units/WishList/types';
import Link from 'next/link';

interface WishFolderProps {
    wish: IWishList;
}

const WishFolder = ({ wish }: WishFolderProps) => {
    return (
        <Link href={`/wishlist/${wish.folderId}`} className="w-[47.5%]">
            <div className="w-full">
                <div className="w-full aspect-[1/1] flex flex-wrap gap-0.5 border border-color-Gray100 border-solid rounded-[10px]">
                    {wish.productImages.length > 0 ? (
                        wish.productImages.map(
                            (img, index) =>
                                index < 4 && (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundImage: `url(${img})`
                                        }}
                                        className="w-[49%] h-[49%] bg-center bg-cover"
                                    ></div>
                                )
                        )
                    ) : (
                        <div className="m-auto">
                            <WishLogo />
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between mt-1.5">
                    <h3 className="text-sm font-semibold text-color-Gray900">{wish.title}</h3>
                    <span className="text-xs font-normal text-color-Gray500">({wish.count})</span>
                </div>
            </div>
        </Link>
    );
};

export default WishFolder;
