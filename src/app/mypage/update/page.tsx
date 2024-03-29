import { fetchUserProfile } from '@/components/units/(mypage)/api/fetchUserProfile';
import UpdateForm from '@/components/units/(mypage)/Update/client/UpdateForm';

export const dynamic = 'force-dynamic';

const Update = async () => {
  const myProfile = await fetchUserProfile();

  return <UpdateForm defaultValues={myProfile} />;
};

export default Update;
