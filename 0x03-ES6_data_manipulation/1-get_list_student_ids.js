export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const arrId = arr.map((item) => item.id);
    return arrId;
  }
  return [];
}
