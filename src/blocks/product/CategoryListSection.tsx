'use client';

import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import MainCategoryItem from '@/domains/product/components/CategoryItemSection/MainCategoryItem';
import SubcategoryList from '@/domains/product/components/CategoryItemSection/SubCategoryList';
import {
  AllIcon,
  BreadIcon,
  CookieIcon
} from '@public/assets/icons/categories/icons';

const CATEGORY_TYPE = [
  { categoryId: 0, icon: <AllIcon />, title: '전체', hasMoreCategory: false },
  { categoryId: 1, icon: <BreadIcon />, title: '빵', hasMoreCategory: true },
  {
    categoryId: 2,
    icon: <CookieIcon />,
    title: '간식/과자',
    hasMoreCategory: true
  }
];

const CategoryListSection = () => {
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
    <div>
      {CATEGORY_TYPE.map((item) => (
        <React.Fragment key={item.title}>
          <MainCategoryItem
            item={item}
            onClick={() => toggleCategory(item.categoryId)}
          />

          <AnimatePresence>
            {activeIndicies.includes(item.categoryId) &&
              item.hasMoreCategory && (
                <motion.div
                  layout
                  initial={{ scaleY: 0, height: 0 }}
                  animate={{ scaleY: 1, height: 'auto' }}
                  exit={{ scaleY: 0, height: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: 'easeInOut'
                  }}
                  style={{ originY: 0 }}
                >
                  <SubcategoryList />
                </motion.div>
              )}
          </AnimatePresence>
        </React.Fragment>
      ))}
    </div>
  );
};
export default CategoryListSection;
