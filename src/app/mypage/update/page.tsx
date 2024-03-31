import getUserProfile from '@/domains/user/queries/getUserProfile';
import UpdateForm from '@/components/units/(mypage)/Update/client/UpdateForm';

export const dynamic = 'force-dynamic';

const Update = async () => {
  const myProfile = await getUserProfile();

  return <UpdateForm defaultValues={myProfile} />;
};

export default Update;
