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
      headers: {
        authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTAyNDA5NywiZXhwIjoxNzA5MDM0ODk3LCJpZCI6OX0.VuE4WMJnMnBItQpmBkNo74Wym_f33Lsu0m1t8jNP4g0'
      },
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
