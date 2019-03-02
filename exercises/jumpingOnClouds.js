// Complete the jumpingOnClouds function below.
function jumpingOnClouds(n, c) {
  let jumpsNum = 0;
  let currentCloud = 0;
  while (currentCloud < c.length - 1) {
    if (!c[currentCloud + 2] || c[currentCloud + 1]) {
      currentCloud += 2;
      jumpsNum++;
    } else {
      currentCloud += 1;
      jumpsNum++;
    }
  }
  return jumpsNum;
}

console.log(jumpingOnClouds(7, [0, 0, 1, 0, 0, 1, 0]));
