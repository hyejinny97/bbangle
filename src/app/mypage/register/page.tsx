import ProfileImage from '@/components/units/Register/components/ProfileImage';

const Register = () => {
    return (
        <div>
            <h1 className="px-[16px] py-[22px] mb-[16px]">프로필 등록</h1>
            <div className="flex justify-center">
                <ProfileImage />
            </div>
        </div>
    );
};

export default Register;
