import { IStoreType } from '@/commons/types/storeType';
import ItemList from '@/components/units/Products/client/ItemList';

interface storeDataProp {
    storeData: IStoreType[];
}

const ServerTotal = async ({ storeData }: storeDataProp) => {
    return (
        <>
            <ItemList storeData={storeData} />
        </>
    );
};
export default ServerTotal;
