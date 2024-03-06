import * as API from '@/api';
import { UserProfileType } from '../types';

export const fetchUserProfile = async (): Promise<UserProfileType> => {
  console.log('fetch');
  try {
    const response = await fetch(`${API.serverUrl}/profile`, {
      headers: {
        authorization: API.TMP_TOKEN
      },
      next: {
        tags: ['profile']
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
