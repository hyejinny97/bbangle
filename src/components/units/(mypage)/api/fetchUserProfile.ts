import API from '@/api';
import { UserProfileType } from '../types';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

export const fetchUserProfile = async (): Promise<UserProfileType> => {
  const data = await API.get<UserProfileType>('/profile', {
    next: {
      tags: [REAVALIDATE_TAG.profile]
    }
  });
  return data;
};
