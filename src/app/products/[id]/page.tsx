import DetailHome from '@/components/units/Detail/server/DetailHome';
import * as API from '@/api';

async function GetDetail(params: { id: string }) {
    try {
        const res = await fetch(`${API.serverUrl}/boards/${params.id}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const ProductDetail = async ({ params }: { params?: any }) => {
    const data = await GetDetail(params);
    return (
        <>
            <DetailHome data={data} />{' '}
        </>
    );
};

export default ProductDetail;
