// import { useQuery } from '@tanstack/react-query';
// import API from '@/api';
// import { IAllProductsType } from '@/commons/types/allProductsType';

// interface GetStoresQueryProps {
//     category?: string;
//     tags?: string[];
//     sort?: string;
// }

// const getAllStores = async (query: GetStoresQueryProps): Promise<IAllProductsType> => {
//     const result = await API.get<{ data: IAllProductsType }>(
//         `/boards${queryString ? `?${queryString}` : ''}`
//     );
//     console.log('what', result);
//     return result.data;
// };

// export const UseGetAllProductsQuery = (query: GetStoresQueryProps) => {
//     return useQuery<IAllProductsType, Error>({
//         queryKey: ['products'],
//         queryFn: () => getAllStores(query)
//     });
// };
