interface NotificationType {
  id: number;
  title: string;
  createdAt: string;
}

export interface AllNotificationsType {
  contents: Array<NotificationType>;
  lastPage: number;
}
