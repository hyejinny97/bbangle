'use client';

import { RecommendationStep1Type } from '@/domains/user/types/recommendation';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: RecommendationStep1Type;
}

const RecommendationStep1FormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<RecommendationStep1Type>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default RecommendationStep1FormProvider;
