import { Item } from "@/components/navigation/TabBar";
import { SITE_PATHS } from "@/config/routing";

export const TAB_BAR_ITEMS: Item[] = [
  {
    id: "Home",
    icon: "/assets/images/icons/home.svg",
    link: SITE_PATHS.HOME_PAGE,
    title: "Home",
  },
  {
    id: "Contracts",
    icon: "/assets/images/icons/contracts.svg",
    link: SITE_PATHS.CONTRACTS_PAGE,
    title: "Contracts",
  },
  {
    id: "New Contract",
    icon: "/assets/images/icons/plus.svg",
    link: SITE_PATHS.CREATE_CONTRACT_PAGE,
    title: "New Contract",
    primary: true,
  },
  {
    id: "Chat",
    icon: "/assets/images/icons/chat.svg",
    link: SITE_PATHS.CHAT_PAGE,
    title: "Chat",
    active: true,
  },
  {
    id: "Profile",
    icon: "/assets/images/icons/avatar.svg",
    link: SITE_PATHS.PROFILE_PAGE,
    title: "Profile",
  },
];
