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

  const toggleCategory = (index: number) => {
    setActiveIndices((prev) => {
      if (prev.indexOf(index) !== -1) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
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
