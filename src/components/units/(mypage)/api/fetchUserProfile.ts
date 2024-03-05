import * as API from '@/api';
import { UserProfileType } from '../types';

const TMP_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTY0MzcwMSwiZXhwIjoxNzA5NjU0NTAxLCJpZCI6OH0.P5E1MT2BxAoXaNOYJ-CLREZ3eTku9XhV8bbTIPybULQ';

export const fetchUserProfile = async (): Promise<UserProfileType> => {
  try {
    const response = await fetch(`${API.serverUrl}/profile`, {
      headers: {
        authorization: `Bearer ${TMP_TOKEN}`
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
