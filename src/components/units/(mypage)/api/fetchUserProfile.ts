import * as API from '@/api';
import { UserProfileType } from '../types';

const TMP_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTI5NDAxMiwiZXhwIjoxNzA5MzA0ODEyLCJpZCI6OH0.0GKUGf5dzZtbAPwCtzjlJ-qTannqINioMCfvNuum50A';

export const fetchUserProfile = async (): Promise<UserProfileType> => {
  try {
    const response = await fetch(`${API.serverUrl}/profile`, {
      headers: {
        authorization: `Bearer ${TMP_TOKEN}`
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
