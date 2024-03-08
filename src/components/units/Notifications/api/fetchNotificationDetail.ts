import API from '@/api';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

type NotificationType = {
  title: string;
  content: string;
  createdAt: string;
};

export const fetchNotificationDetail = async (id: number): Promise<NotificationType> => {
  const data = await API.get<NotificationType>(`${API.serverUrl}/notice/${id}`, {
    next: { tags: [`${REAVALIDATE_TAG.notificationDetail}:${id}`] }
  });

  return data;
};
