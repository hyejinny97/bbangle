'use client';

import { PreferenceStep2Type } from '@/domains/user/types/preference';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  defaultValues: PreferenceStep2Type;
}

const PreferenceStep2FormProvider = ({ children, defaultValues }: Props) => {
  const methods = useForm<PreferenceStep2Type>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default PreferenceStep2FormProvider;
