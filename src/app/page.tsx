import ServerHome from '@/components/units/Home/server/ServerHome';
import { cookies } from 'next/headers';

export default function Home() {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');

    console.log(accessToken);
    return <ServerHome />;
}
