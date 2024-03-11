import API from '@/api';

interface WithdrawMemberShipProps {
  formData: FormData;
  onSuccess: (_message: string) => void;
}

interface Data {
  message: string;
}

export const withdrawMemberShip = async ({ formData, onSuccess }: WithdrawMemberShipProps) => {
  const rawFormData = {
    reasons: formData.getAll('delete-reason').join(',')
  };

  const data: Data = await API.patch('/members', {
    body: JSON.stringify(rawFormData)
  });

  onSuccess(data.message);
};
