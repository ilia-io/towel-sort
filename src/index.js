
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = []
  if (matrix === undefined) {return []}
  matrix.forEach((el, index) =>
      index % 2 === 0 ? result.push(...el) : result.push(...el.reverse())
  );
  return result;
}
