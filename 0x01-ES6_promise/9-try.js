export default function guardrail(mathFunction) {
  const queue = [];
  let rslt;

  try {
    rslt = mathFunction();
  } catch (err) {
    rslt = err.toString();
  }
  queue.push(rslt);
  queue.push('Guardrail was processed');
  return queue;
}
