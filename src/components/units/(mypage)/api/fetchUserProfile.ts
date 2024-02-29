import * as API from '@/api';

type UserProfileType = {
  profileImg: string;
  nickname: string;
  phoneNumber: string;
  birthDate: string;
};

export const fetchUserProfile = async (): Promise<UserProfileType> => {
  try {
    const response = await fetch(`${API.serverUrl}/profile`, {
      headers: {
        authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTE3NjY4MCwiZXhwIjoxNzA5MTg3NDgwLCJpZCI6OX0.z9DPSkwDSzLzozgIDb17u4xcPO1Iq8i0o3eZr6yuSBA'
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
