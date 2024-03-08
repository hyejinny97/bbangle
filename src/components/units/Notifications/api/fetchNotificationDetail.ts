import API from '@/api';

type NotificationType = {
  title: string;
  content: string;
  createdAt: string;
};

export const fetchNotificationDetail = async (id: number): Promise<NotificationType> => {
  try {
    const response = await fetch(`${API.serverUrl}/notice/${id}`, {
      next: { tags: [`notificationDetail:${id}`] }
    });
    if (!response.ok) throw Error(`[${response.status}] fetchNotificationDetail 에러`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { title: '', content: '', createdAt: '' };
  }
};
