//The star can be in function* or *namFunction
function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}
