import { PREFERENCE } from '@/domains/user/constants/preference';

export type PreferenceType = (typeof PREFERENCE.step1.preferenceType)[number];

export type PreferenceStep1Type = {
  [K in keyof typeof PREFERENCE.step1]: Array<(typeof PREFERENCE.step1)[K][number]>;
};

export type PreferenceStep2Type = {
  [K in keyof typeof PREFERENCE.step2]: Array<(typeof PREFERENCE.step2)[K][number]>;
};

export interface PreferenceStep1ResultType {
  preferenceType: string;
}
