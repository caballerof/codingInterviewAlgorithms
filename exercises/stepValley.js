// Complete the countingValleys function below.
function countingValleys(n, s) {
  let seaLvl = 0;
  let currentStep = 0;
  var steps = s.split('');
  let countValleys = 0;
  let isValley = false;
  while (seaLvl < n - currentStep && currentStep <= steps.length) {
    if (steps[currentStep] === 'U') {
      seaLvl++;
      if (isValley) {
        countValleys++;
        isValley = false;
      }
    } else {
      if (!seaLvl) {
        isValley = true;
      }
      seaLvl--;
    }
    currentStep++;
  }
  return countValleys;
}

console.log(countingValleys(10, `DUDDDUUDUU`));
/**      0
 * -1   -1
 * 1    0
 * -1   -1
 * -1   -2
 * -1   -3
 * 1    -2
 * 1    -1
 * -1   -2
 * 1    -1
 * 1    0
 *
 */
