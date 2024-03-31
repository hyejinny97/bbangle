import { UserProfileType } from '../../../components/units/(mypage)/types';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import fetchExtend from '@/shared/utils/api';

const getUserProfile = async () => {
  const res = await fetchExtend.get('/profile', {
    next: {
      tags: [REAVALIDATE_TAG.profile]
    }
  });
  const data: UserProfileType = await res.json();
  return data;
};

export default getUserProfile;
