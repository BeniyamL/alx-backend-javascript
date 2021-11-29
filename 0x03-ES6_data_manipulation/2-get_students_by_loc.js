export default function getStudentsByLocation(std, cty) {
  const newArr = std.filter((stds) => stds.location === cty);
  return (newArr);
}
