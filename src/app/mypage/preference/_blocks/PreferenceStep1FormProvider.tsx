'use client';

import { PreferenceStep1Type } from '@/domains/user/types/preference';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: PreferenceStep1Type;
}

const PreferenceStep1FormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<PreferenceStep1Type>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default PreferenceStep1FormProvider;
