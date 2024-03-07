import * as API from '@/api';
import { UserProfileType } from '../types';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

export const fetchUserProfile = async (): Promise<UserProfileType> => {
  try {
    const response = await fetch(`${API.serverUrl}/profile`, {
      headers: {
        authorization: API.TMP_TOKEN
      },
      next: {
        tags: [REAVALIDATE_TAG.profile]
      }
    });
    if (!response.ok) throw Error(`[${response.status}] fetchUserProfile 에러`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return { profileImg: '', nickname: '', phoneNumber: '', birthDate: '' };
  }
};
