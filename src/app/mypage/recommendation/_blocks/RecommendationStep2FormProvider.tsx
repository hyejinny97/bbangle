'use client';

import { RecommendationStep2Type } from '@/domains/user/types/recommendation';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: RecommendationStep2Type;
}

const RecommendationStep2FormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<RecommendationStep2Type>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default RecommendationStep2FormProvider;
