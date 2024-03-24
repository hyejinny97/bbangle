interface Params {
  error: string;
  code: string;
  error_description: string; // kakao 응답이 snake_case라 camelCase 사용 불가능
}

interface Props {
  params: Params;
}

const KakaoLogin = ({ params: { code } }: Props) => {
  console.log(code);

  return <>카카오 로그인 중입니다...</>;
};

export default KakaoLogin;
