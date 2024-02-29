import Header from '@/components/commons/header/client/Header';
import { getMyProfile } from '@/components/units/(mypage)/Update/api';
import UpdateForm from '@/components/units/(mypage)/client/UpdateForm';

const Update = async () => {
  const myProfile = await getMyProfile();

  return (
    <>
      <Header title="프로필 수정" back />
      <UpdateForm defaultValues={myProfile} />
    </>
  );
};

export default Update;
