import { Message, ReadStatus } from "@/features/chat/ChatRoom";

export const MESSAGES: Message[] = [
  {
    userId: 1,
    content: "Hi there!",
    date: new Date(),
    readStatus: ReadStatus.Read,
  },
  {
    userId: 2,
    content: "Howdy, is there how is my project coming along?",
    date: new Date(),
    readStatus: ReadStatus.Read,
  },
  {
    userId: 2,
    content: "Just let me know!",
    date: new Date(),
    readStatus: ReadStatus.Read,
  },
  {
    userId: 1,
    content: "I need some assistance.",
    date: new Date(),
    files: [
      {
        name: "1",
        url: "https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "2",
        url: "https://images.unsplash.com/photo-1486020425824-a3da4762c3ca?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    readStatus: ReadStatus.Sent,
  },
  {
    userId: 1,
    content: "Help me to choose which to go with",
    date: new Date(),
    readStatus: ReadStatus.Sent,
  },
];
