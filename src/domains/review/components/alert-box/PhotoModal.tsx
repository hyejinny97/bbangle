import Image from 'next/image';
import FullScreenModal from '@/shared/components/FullScreenModal';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import { ReviewPhoto } from '@/domains/review/types/review';

const PhotoModal = ({ id, url }: ReviewPhoto) => (
  <FullScreenModal className="flex-center">
    <Image
      key={id}
      src={url}
      alt="리뷰 이미지"
      blurDataURL={BLUR_DATA_URL}
      fill
      className="w-full object-contain"
    />
  </FullScreenModal>
);

export default PhotoModal;
