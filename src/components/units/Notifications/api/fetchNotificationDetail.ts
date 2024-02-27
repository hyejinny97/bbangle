import * as API from '@/api';

type NotificationType = {
  title: string;
  content: string;
  createdAt: string;
};

export const fetchNotificationDetail = async (id: number): Promise<NotificationType> => {
  try {
    const response = await fetch(`${API.serverUrl}/notice/${id}`, {
      headers: {
        authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTAyNDA5NywiZXhwIjoxNzA5MDM0ODk3LCJpZCI6OX0.VuE4WMJnMnBItQpmBkNo74Wym_f33Lsu0m1t8jNP4g0'
      },
      next: { tags: ['notificationDetail'] }
    });
    if (!response.ok) throw Error(`[${response.status}] fetchNotificationDetail 에러`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { title: '', content: '', createdAt: '' };
  }
};
