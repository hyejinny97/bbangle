'use client';

import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import useToggleCategory from '../../hooks/useToggleCategory';
import MainCategoryItem from './MainCategoryItem';
import SubcategoryList from './SubCategoryList';

interface CategoryItemProps {
  icon: JSX.Element;
  title: string;
  hasMoreCategory: boolean;
  subCategories: string[];
}

const CategoryItemSection = ({
  icon,
  title,
  hasMoreCategory,
  subCategories
}: CategoryItemProps) => {
  const router = useRouter();

  const { isActive, toggleCategory } = useToggleCategory();

  const handleCategoryClick = () => {
    toggleCategory();
    if (!hasMoreCategory) {
      router.push('/products');
    }
  };
  return (
    <>
      <MainCategoryItem
        icon={icon}
        title={title}
        hasMoreCategory={hasMoreCategory}
        onClick={handleCategoryClick}
      />
      <AnimatePresence>
        {/* 조건부는 AnimatePresence 안에 있어야 컴포넌트가 사라질 때도 애니메이션이 적용된다 */}
        {isActive && <SubcategoryList subCategories={subCategories} />}
      </AnimatePresence>
    </>
  );
};
export default CategoryItemSection;
