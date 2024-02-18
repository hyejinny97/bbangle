import WishLogo from '@/components/units/WishList/assets/wishLogo.svg';
import BtnRemove from '@/components/units/WishList/assets/btnRemove.svg';
import { IWishList } from '@/components/units/WishList/types';
import Link from 'next/link';
import { ChangeEvent, MouseEvent, useState } from 'react';
import UpModal from '@/components/commons/modal/UpModal';
import { useUpdateWishListMutation } from '@/components/units/WishList/hooks/useUpdateWishListMutation';
import { useGetWishLists } from '@/components/units/WishList/hooks/useGetWishList';
import { useDeleteWishListMutation } from '@/components/units/WishList/hooks/useDeleteWishListMutation';

interface WishFolderProps {
    wish: IWishList;
    isEdit: boolean;
}

const WishFolder = ({ wish, isEdit }: WishFolderProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [folderId, setFolderId] = useState(0);

    const { mutate } = useUpdateWishListMutation();
    const { mutate: deleteWishMutate } = useDeleteWishListMutation();
    const { refetch } = useGetWishLists();

    const hadnleToggleEditModal = (folderId?: number) => (e: MouseEvent<HTMLHeadingElement>) => {
        if (isEdit) {
            e.preventDefault();
            setIsVisible(prev => !prev);
            if (folderId) {
                setFolderId(folderId);
            }
        }
    };

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleUpdateWishList = (e: any) => {
        if (title) {
            mutate(
                {
                    folderId,
                    data: {
                        title
                    }
                },
                {
                    onSuccess: () => {
                        refetch();
                        hadnleToggleEditModal()(e);
                    }
                }
            );
        } else {
            alert('변경하실 폴더 명을 입력해주세요.');
        }
    };
    const handleDeleteWishList = (folderId: number) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteWishMutate(
            {
                folderId
            },
            {
                onSuccess: () => {
                    refetch();
                    alert('삭제 완료');
                }
            }
        );
    };

    return (
        <>
            <Link href={`/wishlist/${wish.folderId}`} className="w-[47.5%]">
                <div className="w-full">
                    <div className="w-full aspect-[1/1] flex flex-wrap gap-0.5 border border-color-Gray100 border-solid rounded-[10px] relative">
                        {wish.productImages.length > 0 ? (
                            wish.productImages.map(
                                (img, index) =>
                                    index < 4 && (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundImage: `url(${img})`
                                            }}
                                            className="w-[49%] h-[49%] bg-center bg-cover "
                                        ></div>
                                    )
                            )
                        ) : (
                            <div className="m-auto">
                                <WishLogo />
                            </div>
                        )}
                        {isEdit && (
                            <button
                                className="absolute top-3 right-3"
                                onClick={handleDeleteWishList(wish.folderId)}
                            >
                                <BtnRemove />
                            </button>
                        )}
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                        <h3
                            className={`text-sm font-semibold text-color-Gray900 ${
                                isEdit && 'underline'
                            }`}
                            onClick={hadnleToggleEditModal(wish.folderId)}
                        >
                            {wish.title}
                        </h3>
                        <span className="text-xs font-normal text-color-Gray500">
                            ({wish.count})
                        </span>
                    </div>
                </div>
            </Link>
            {isVisible && (
                <UpModal
                    title="찜 폴더"
                    isVisible={isVisible}
                    toggleModal={hadnleToggleEditModal()}
                >
                    <div className="w-full">
                        <div className="w-[92%] m-auto flex flex-col items-end gap-2">
                            <input
                                type="text"
                                style={{ outline: 'none' }}
                                className="w-full p-3 border border-solid border-color-Gray100 rounded-[10px] text-base font-normal"
                                placeholder="폴더명을 입력해주세요."
                                onChange={handleChangeTitle}
                                maxLength={12}
                                value={title}
                            />
                            <div className="w-[324px] text-right">
                                <span className="text-xs font-medium text-color-Gray900 ">
                                    {title.length}
                                </span>
                                <span className="text-xs font-medium text-color-G400">/12</span>
                            </div>
                        </div>

                        <button
                            onClick={handleUpdateWishList}
                            className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
                        >
                            수정
                        </button>
                    </div>
                </UpModal>
            )}
        </>
    );
};

export default WishFolder;
