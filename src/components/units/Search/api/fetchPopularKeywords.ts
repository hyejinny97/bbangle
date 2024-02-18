import * as API from '@/api';

type PopularKeywordsType = Array<string>;

export const fetchPopularKeywords = async (): Promise<PopularKeywordsType> => {
    try {
        const response = await fetch(`${API.serverUrl}/search/best-keyword`, { cache: 'no-store' });
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error(error);
        return [];
    }
};
