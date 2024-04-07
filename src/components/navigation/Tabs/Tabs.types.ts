export type Tab = {
  id: string;
  title: React.ReactNode;
};

export interface ITabsProps {
  tabs: Tab[];
  activeTabId: string;
  onChange: (tab: Tab) => void;
}
