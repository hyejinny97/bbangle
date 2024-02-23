import Link from 'next/link';

const SignInButton = () => {
  return (
    <Link href="/login">
      <button className="px-[10px] py-4 w-full rounded-[50px] bg-color-PrimaryOrangeRed text-color-White">
        로그인/회원가입
      </button>
    </Link>
  );
};

export default SignInButton;
