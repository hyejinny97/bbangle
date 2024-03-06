import * as API from '@/api';

type NotificationType = {
  id: number;
  title: string;
  createdAt: string;
};

type NotificationsType = Array<NotificationType>;

export const fetchAllNotifications = async (): Promise<NotificationsType> => {
  try {
    const response = await fetch(`${API.serverUrl}/notice?page=0&size=2&sort=createdAt,DESC`, {
      next: { tags: ['notifications'] }
    });
    if (!response.ok) throw Error(`[${response.status}] fetchAllNotifications 에러`);

    const data = await response.json();
    return data.contents;
  } catch (error) {
    console.error(error);
    return [];
  }
};
