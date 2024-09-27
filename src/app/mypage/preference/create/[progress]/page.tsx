import { notFound } from 'next/navigation';
import PreferenceCreateForm from '../_blocks/PreferenceCreateForm';

interface Props {
  params: { progress: string };
}

const PreferenceCreatePage = ({ params: { progress } }: Props) => {
  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return <PreferenceCreateForm progress={progressNum} />;
};

export default PreferenceCreatePage;
