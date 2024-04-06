import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { UserProfileType } from '../types/profile';

const getUserProfile = async () => {
  const res = await fetchExtend.get('/profile', {
    next: {
      tags: [QUERY_KEY.profile]
    }
  });
  const data: UserProfileType = await res.json();
  return data;
};

export default getUserProfile;
