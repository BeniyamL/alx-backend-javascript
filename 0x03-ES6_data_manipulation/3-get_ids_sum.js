export default function getStudentIdsSum(std) {
  const stdId = std.map((stds) => stds.id);
  const sum = stdId.reduce((prev, cur) => prev + cur);
  return (sum);
}
