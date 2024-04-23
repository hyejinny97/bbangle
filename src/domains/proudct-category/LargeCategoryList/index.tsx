'use client';

import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { AllIcon, BreadIcon, CookieIcon } from '../assets/icons';
import LargeCategoryItem from './LargeCategoryItem';
import MiddlecategoryList from './MiddleCategoryList';

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

const LargeCategoryList = () => {
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
          <button
            type="button"
            aria-label="button"
            onClick={() => toggleCategory(item.categoryId)}
            className="w-full"
          >
            <LargeCategoryItem item={item} />
          </button>
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
                  <MiddlecategoryList />
                </motion.div>
              )}
          </AnimatePresence>
        </React.Fragment>
      ))}
    </div>
  );
};
export default LargeCategoryList;
