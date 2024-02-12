import ServerTotal from '@/components/units/Products/server/ServerTotal';

import * as API from '@/api';

async function GetAllStore() {
    try {
        const res = await fetch(`${API.serverUrl}/stores`, { next: { tags: ['storeWish'] } });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const Products = async () => {
    const storeData = await GetAllStore();

    return <ServerTotal storeData={storeData.content} />;
};

export default Products;
