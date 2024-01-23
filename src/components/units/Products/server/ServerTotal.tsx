import ItemList from '@/components/units/Products/client/ItemList';
import * as API from '@/api';

async function GetAllStore() {
    try {
        const res = await fetch(`${API.serverUrl}/stores`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const ServerTotal = async () => {
    const data = await GetAllStore();
    console.log(data);
    return (
        <>
            <ItemList storeData={data} />
        </>
    );
};
export default ServerTotal;
