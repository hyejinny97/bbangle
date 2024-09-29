import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { RecommendationStep1Type } from '@/domains/user/types/recommendation';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useAddRecommendationStep1Mutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (recommendationStep1: RecommendationStep1Type) => {
    await userService.addRecommendationStep1(recommendationStep1);
  };

  const onSettled = () => {
    push(PATH.home);
  };

  const onSuccess = () => {
    openToast({ message: '맞춤 추천 받기가 완료됐으니, 추천 빵을 구경해봐요!' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSettled, onSuccess, onError });
};

export default useAddRecommendationStep1Mutation;
