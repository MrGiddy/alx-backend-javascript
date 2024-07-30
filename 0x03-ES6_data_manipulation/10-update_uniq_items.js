// returns an updated map for all items with initial quantity at 1
export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [k, v] of itemsMap.entries()) {
    if (v === 1) {
      itemsMap.set(k, 100);
    }
  }
  return itemsMap;
}
