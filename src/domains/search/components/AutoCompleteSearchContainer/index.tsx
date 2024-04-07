'use client';

import AutoCompleteSearchItem from '@/domains/search/components/AutoCompleteSearchContainer/AutoCompleteSearchItem';
import { useGetAutoCompleteSearchTextsQuery } from '@/domains/search/queries/useGetAutoCompleteSearchTextsQuery';

interface AutoCompleteSearchContainerProps {
  keyword: string;
}

const AutoCompleteSearchContainer = ({ keyword }: AutoCompleteSearchContainerProps) => {
  const { data: autoCompleteSearchTexts } = useGetAutoCompleteSearchTextsQuery(keyword);

  return (
    <div className="shadow-md shadow-gray-100 overflow-y-scroll scrollbar-hide">
      {!!autoCompleteSearchTexts?.length &&
        autoCompleteSearchTexts.map(text => {
          return <AutoCompleteSearchItem key={text} text={text} keyword={keyword} />;
        })}
    </div>
  );
};

export default AutoCompleteSearchContainer;
