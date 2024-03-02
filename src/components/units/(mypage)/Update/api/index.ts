import * as API from '@/api';
import { MyProfileResponse } from '../types';

const TMP_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTE3NzQ4NiwiZXhwIjoxNzA5MTg4Mjg2LCJpZCI6OH0.kZQh53WdsBApvofEg3imeC_3PjEwsTT-4E5-22oLInI';

export const getMyProfile = async () => {
  const res = await fetch(`${API.serverUrl}/profile`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TMP_TOKEN}`
    }
  });
  const data: MyProfileResponse = await res.json();
  return data;
};
