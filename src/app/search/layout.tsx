import BtnBack from '@/components/commons/button/client/Btn_back';
import SearchInputContainer from '@/components/units/Search/client/SearchInputContainer';

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <>
      <div className="w-[92%] m-auto flex items-center gap-[17px] py-[10px]">
        <BtnBack />
        <SearchInputContainer />
      </div>
      {children}
    </>
  );
};

export default SearchLayout;
