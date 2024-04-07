import { IChatCardProps } from "@/features/chat/ChatCard";

import {
  USER_1_PROFILE,
  USER_2_PROFILE,
  USER_3_PROFILE,
} from "./ChatsPage.temp";

export const CHATS_LIST: IChatCardProps[] = [
  {
    avatarImage: USER_1_PROFILE,
    username: "Rakabuming Suhu",
    title: "Elfarma Website Redesign",
    content:
      "bro, kepriwe kie rawone ra mudun-mudun, selak kaliren weteng inyong..",
    hasAttachment: true,
    unreadMessageCount: 2,
    lastMessageDate: new Date()
  },
  {
    username: "Jerome Bell",
    title: "Meeting with Anneth White",
    content:
      "bro, kepriwe kie rawone ra mudun-mudun, selak kaliren weteng inyong..",
    hasAttachment: true,
    lastMessageDate: new Date()
  },
  {
    avatarImage: USER_2_PROFILE,
    username: "Jacob Jones",
    title: "Codedellaroute Project",
    content:
      "bro, kepriwe kie rawone ra mudun-mudun, selak kaliren weteng inyong..", 
      lastMessageDate: new Date()
  },
  {
    avatarImage: USER_3_PROFILE,
    username: "Esther Howard",
    title: "Al-Kautsar Branding",
    content:
      "bro, kepriwe kie rawone ra mudun-mudun, selak kaliren weteng inyong...",
    hasAttachment: true,
    lastMessageDate: new Date()
  },
];
