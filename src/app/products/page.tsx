import ServerTotal from '@/components/units/Products/server/ServerTotal';


async function GetProduct(params: { id: string }) {
    const res = await fetch(`${API.serverUrl}/boards`);
    const data = await res.json();
    return data;
}


const Products = () => {
    return <ServerTotal />;
};

export default Products;
