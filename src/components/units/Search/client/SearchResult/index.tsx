import { IAllProductsType } from '@/commons/types/allProductsType';
import ItemList from '../ItemList';

interface getSearchResultQueryProps {
    resultProducts?: IAllProductsType;
    resultStores?: IAllProductsType;
    refetch: () => void;
}

function SearchResult({ resultProducts, resultStores, refetch }: getSearchResultQueryProps) {
    // console.log('1111' + resultData);

    return (
        <>
            <ItemList
                resultProducts={resultProducts}
                resultStores={resultStores}
                refetch={refetch}
            />
        </>
    );
}
export default SearchResult;
