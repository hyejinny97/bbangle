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
  const [activeIndicies, setActiveIndices] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setActiveIndices((prev) =>
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
        {activeIndicies.includes(mainCategory.categoryId) &&
          mainCategory.hasMoreCategory && (
            <SubcategoryList
              subCategories={SUBCATEGORY_TYPE[mainCategory.categoryId - 1]}
            />
          )}
      </AnimatePresence>
    </>
  );
};
export default CategoryItemSection;
