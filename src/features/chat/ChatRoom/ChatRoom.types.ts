export type UserID = number;

export enum ReadStatus {
  Default = -1,
  Sent = 0,
  Recieved = 1,
  Read = 2,
}

export type MediaFile = {
  name: string;
  url: string;
};

export type Message<T = Record<string, any>> = {
  userId: UserID;
  date: Date;
  readStatus: ReadStatus;
  content?: string;
  files?: MediaFile[];
  data?: T;
};

export type User = {
  id: UserID;
  name: string;
  image?: string;
  email?: string;
};

export interface IChatRoomProps {
  users: User[];
  currentUserId: UserID;
  messages: Message[];
  className?: string;
}
