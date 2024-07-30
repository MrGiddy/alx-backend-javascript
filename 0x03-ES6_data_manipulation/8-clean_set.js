export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const array = Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.substr(startString.length));
  return array.join('-');
}
