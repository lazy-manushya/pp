export function listStateSetter<VauleType>(
  draft: any,
  data: VauleType[],
  settings: {
    replaceData?: boolean;
    replaceList?: boolean;
    itemIdKey?: string;
  } = {}
) {
  const { replaceData, replaceList, itemIdKey = "id" } = settings;

  if (replaceList) {
    return data;
  }

  data.forEach((item: any) => {
    const id = item[itemIdKey];
    const indexInList = draft.findIndex((b: any) => b.id === id);

    if (indexInList === -1) {
      draft.unshift(item);
    } else {
      if (replaceData) {
        draft[indexInList] = item;
      } else {
        const prevData = draft[indexInList];
        draft[indexInList] = {
          ...prevData,
          ...item,
        };
      }
    }
  });

  return draft;
}

export function listStateRemover<VauleType>(
  draft: any,
  dataIdList: VauleType[]
) {
  return draft.filter((item: any) => !dataIdList.includes(item.id));
}
