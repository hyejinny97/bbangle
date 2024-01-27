import WishLogo from '@/components/units/WishList/assets/wishLogo.svg';
import Link from 'next/link';

interface WishFolderProps {
    isDefault?: boolean;
}

const WishFolder = ({ isDefault }: WishFolderProps) => {
    return (
        <Link href={'/wishlist/1'} className="w-[47.5%]">
            <div className="w-full">
                {isDefault ? (
                    <div className="w-full aspect-[1/1] flex justify-center items-center border border-color-Gray100 border-solid rounded-[10px]">
                        <WishLogo />
                    </div>
                ) : (
                    <div className="w-full aspect-[1/1] flex flex-wrap gap-0.5 border border-color-Gray100 border-solid rounded-[10px]">
                        <div
                            style={{
                                backgroundImage: 'url(/assets/food-1.jpeg)'
                            }}
                            className="w-[49%] h-[49%] bg-center bg-cover"
                        ></div>
                        <div
                            style={{
                                backgroundImage: 'url(/assets/food-1.jpeg)'
                            }}
                            className="w-[49%] h-[49%] bg-center bg-cover"
                        ></div>
                        <div
                            style={{
                                backgroundImage: 'url(/assets/food-1.jpeg)'
                            }}
                            className="w-[49%] h-[49%] bg-center bg-cover"
                        ></div>
                        <div
                            style={{
                                backgroundImage: 'url(/assets/food-1.jpeg)'
                            }}
                            className="w-[49%] h-[49%] bg-center bg-cover"
                        ></div>
                    </div>
                )}

                <div className="flex items-center justify-between mt-1.5">
                    <h3 className="text-sm font-semibold text-color-Gray900">폴더이름</h3>
                    <span className="text-xs font-normal text-color-Gray500">(0)</span>
                </div>
            </div>
        </Link>
    );
};

export default WishFolder;
