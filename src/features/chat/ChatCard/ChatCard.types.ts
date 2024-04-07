export interface IChatCardProps {
  avatarImage?: string;
  username: string;
  title: string;
  content: string;
  lastMessageDate: Date;
  hasAttachment?: boolean;
  unreadMessageCount?: number;
  className?: string;
}
