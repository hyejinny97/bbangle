'use client';

import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { SUBCATEGORY_TYPE } from '../../constants/subCategories';
import MainCategoryItem from './MainCategoryItem';
import SubcategoryList from './SubCategoryList';

interface CategoryItemProps {
  mainCategory: {
    categoryId: number;
    icon: JSX.Element;
    title: string;
    hasMoreCategory: boolean;
  };
}

const CategoryItemSection = ({ mainCategory }: CategoryItemProps) => {
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const isActive =
    activeItems.includes(mainCategory.categoryId) &&
    mainCategory.hasMoreCategory;

  const toggleCategory = (categoryId: number) => {
    setActiveItems((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  return (
    <>
      <MainCategoryItem
        mainCategory={mainCategory}
        onClick={() => toggleCategory(mainCategory.categoryId)}
      />
      <AnimatePresence>
        {/* 조건부는 AnimatePresence 안에 있어야 컴포넌트가 사라질 때도 애니메이션이 적용된다 */}
        {isActive && (
          <SubcategoryList
            subCategories={SUBCATEGORY_TYPE[mainCategory.categoryId - 1]}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default CategoryItemSection;
