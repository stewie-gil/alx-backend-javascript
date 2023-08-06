export default function getStudentIdsSum(array) {
  const sum = array.reduce((acc, item) => acc + item.id, 0);
  return sum;
}
