import { notFound } from 'next/navigation';
import PreferenceUpdateForm from '../_blocks/PreferenceUpdateForm';

interface Props {
  params: { progress: string };
}

const PreferenceUpdatePage = ({ params: { progress } }: Props) => {
  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return <PreferenceUpdateForm progress={progressNum} />;
};

export default PreferenceUpdatePage;
