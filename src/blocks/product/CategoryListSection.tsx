'use client';

import React from 'react';

import CategoryItemSection from '@/domains/product/components/CategoryItemSection';
import { MAIN_CATEGORIES_TYPE } from '@/domains/product/constants/mainCategories';

const CategoryListSection = () => (
  <div>
    {MAIN_CATEGORIES_TYPE.map((mainCategory) => (
      <React.Fragment key={mainCategory.title}>
        <CategoryItemSection mainCategory={mainCategory} />
      </React.Fragment>
    ))}
  </div>
);
export default CategoryListSection;
