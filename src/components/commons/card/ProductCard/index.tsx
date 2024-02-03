'use client';

import { IProductType } from '@/commons/types/productType';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import TagSwiper from '@/components/units/Home/client/TagSwiper';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import UpModal from '@/components/commons/modal/UpModal';
import PlusIcon from './assets/plus-icon.svg';
import { useGetWishLists } from '@/components/units/WishList/hooks/useGetWishList';
import { useAddWishListMutation } from '@/components/units/WishList/hooks/useAddWishListMutation';
import { useAddWishMutation } from '@/components/commons/card/ProductCard/hooks/useAddWishMutation';

interface ProductCardProps {
    product: IProductType;
    popular?: boolean;
    ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => {
    const [isModal, setIsModal] = useState(false);
    const [productId, setProductId] = useState<number>();
    const [isAddView, setIsAddView] = useState(false);
    const [title, setTitle] = useState('');

    const { data, refetch } = useGetWishLists();

    const { mutate: addWishListMutate } = useAddWishListMutation();
    const { mutate: addWishMutate } = useAddWishMutation();

    const handleToggleAddView = () => {
        setIsAddView(prev => !prev);
        setTitle('');
    };

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleModalToggle = () => {
        setIsModal(prev => !prev);
        setIsAddView(false);
        setTitle('');
    };

    const handleClickHeart = (id: number) => (e: any) => {
        e.preventDefault();

        if (product.isWished) {
            alert('이미 찜한 상품 입니다.');
        } else {
            setIsModal(true);
            setProductId(id);
        }
    };

    const handleAddWish = (id: number) => () => {
        addWishMutate(
            { borderId: productId, data: { folderId: id } },
            {
                onSuccess: () => {
                    refetch();
                    setIsModal(false);
                    alert('추가 되었습니다.');
                }
            }
        );
    };

    const handleAddWishList = () => {
        if (title) {
            addWishListMutate(
                { title },
                {
                    onSuccess: () => {
                        refetch();
                        setIsAddView(false);
                    },
                    onError: (err: any) => {
                        alert(err.response.data.message);
                    }
                }
            );
        }
    };

    return (
        <>
            <Link href="/products/1" className="relative w-full ">
                {popular && (
                    <div className="absolute z-10 top-[6px] left-[6px] w-5 h-5 bg-white rounded-md border border-solid border-neutral-100 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-neutral-800 text-[11px] font-bold leading-[11px]">
                            {ranking}
                        </div>
                    </div>
                )}
                <div
                    className="w-full pb-[90%] bg-cover bg-center rounded-[6px] relative "
                    style={{ backgroundImage: `url(${product.thumbnail})` }}
                >
                    <div className="absolute p-2 bottom-1.5 right-1.5 ">
                        <BtnHeart
                            isLiked={product.isWished}
                            onClick={handleClickHeart(product.boardId)}
                        />
                    </div>
                </div>
                <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
                    {product.storeName}
                </p>
                <h3 className="w-full mb-1 overflow-hidden text-xs font-normal overflow-ellipsis whitespace-nowrap">
                    {product.title}
                </h3>
                <p className="mb-1 text-sm font-medium text-color-Gray900 ">
                    {product.price.toLocaleString()}원
                </p>
                {product.tags && <TagSwiper tag={product.tags} />}
            </Link>
            {isModal && (
                <UpModal isVisible={isModal} title="찜 추가" toggleModal={handleModalToggle}>
                    {isAddView ? (
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
                                onClick={handleAddWishList}
                                className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
                            >
                                확인
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div style={{ maxHeight: '400px' }} className="overflow-y-auto">
                                <button
                                    className="w-full p-[14px] flex gap-2 border-t border-solid border-t-gray-100 items-center"
                                    onClick={handleToggleAddView}
                                >
                                    <div className="w-[26px] h-[26px] flex justify-center items-center bg-color-Gray100 border border-solid border-color-Gray200 rounded-md">
                                        <PlusIcon />
                                    </div>
                                    <p className="text-sm font-semibold">새 폴더 만들기</p>
                                </button>
                                {data?.map(wish => (
                                    <button
                                        key={wish.folderId}
                                        className="w-full p-[14px] flex gap-2 border-t border-solid border-t-gray-100 items-center"
                                        onClick={handleAddWish(wish.folderId)}
                                    >
                                        <div className="w-[26px] h-[26px]  border border-solid border-color-Gray200 rounded-md flex flex-wrap gap-[2%]">
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
                                                <div
                                                    style={{
                                                        backgroundImage: 'url(/assets/wishLogo.svg)'
                                                    }}
                                                    className="w-[100%] h-[100%] bg-cover bg-center"
                                                ></div>
                                            )}
                                        </div>
                                        <p className="text-sm font-semibold">{wish.title}</p>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={handleModalToggle}
                                className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
                            >
                                닫기
                            </button>
                        </div>
                    )}
                </UpModal>
            )}
        </>
    );
};

export default ProductCard;
