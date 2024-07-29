export default function getListStudentIds(objectsArray) {
  if (!Array.isArray(objectsArray)) {
    return [];
  }
  return objectsArray.map((e) => e.id);
}
