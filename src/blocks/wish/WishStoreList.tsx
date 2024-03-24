import WishStore from '@/domains/wish/components/WishStore';

const WishStroeList = () => {
  return (
    <div>
      <WishStore
        imgSrc={''}
        title={'title'}
        desc={'testeetstsetseafdfdsafdsafdsetestsetsetsetestsetsetess'}
        isWished={true}
      />

      <WishStore
        imgSrc={''}
        title={'title'}
        desc={'testeetstsetsetsetsetestsetsetsetestsetsetess'}
        isWished={false}
      />
      <WishStore
        imgSrc={''}
        title={''}
        desc={'testeetstsetsetsetsetestsetsetsetestsetsetess'}
        isWished={false}
      />
    </div>
  );
};

export default WishStroeList;
