import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { RecommendationStep1Type } from '@/domains/user/types/recommendation';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useUpdateRecommendationStep1Mutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (recommendationStep1: RecommendationStep1Type) => {
    await userService.updateRecommendationStep1(recommendationStep1);
  };

  const onSettled = () => {
    push(PATH.home);
  };

  const onSuccess = () => {
    openToast({ message: '맞춤 추천이 수정됐으니, 추천 빵을 구경해봐요!' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSettled, onSuccess, onError });
};

export default useUpdateRecommendationStep1Mutation;
