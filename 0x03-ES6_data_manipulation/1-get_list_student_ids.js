export default function getListStudentIds(std) {
  if (!Array.isArray(std)) {
    return ([]);
  }
  const newArr = std.map((lst) => lst.id);
  return (newArr);
}
