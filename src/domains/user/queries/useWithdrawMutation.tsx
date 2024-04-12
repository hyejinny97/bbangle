import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { withdrawMemberShip } from '@/domains/user/queries/withdrawMemberShip';
import usePopup from '@/shared/hooks/usePopup';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';

const useWithdrawMutation = () => {
  const router = useRouter();
  const { closePopup } = usePopup();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: ({ formData }: { formData: FormData }) => withdrawMemberShip({ formData }),
    onSettled: closePopup,
    onSuccess: (message: string) => {
      openToast(
        <ToastPop>
          <div>{message}</div>
        </ToastPop>
      );
      router.push('/');
    },
    // onError: (errorMessage: Error['message']) => {
    //   console.log('회원탈퇴 에러 발생:', errorMessage);
    // },
    throwOnError: true
  });
};

export default useWithdrawMutation;
