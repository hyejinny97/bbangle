import fetchExtend from '@/shared/utils/api';

interface WithdrawMemberShipProps {
  formData: FormData;
}

interface Data {
  message: string;
}

export const withdrawMemberShip = async ({ formData }: WithdrawMemberShipProps) => {
  const rawFormData = {
    reasons: formData.getAll('delete-reason').join(',')
  };

  const res = await fetchExtend.patch('/members', {
    body: JSON.stringify(rawFormData)
  });
  if (!res.ok) throw new Error('회원 탈퇴 실패');
  const data: Data = await res.json();
  return data.message;
};
