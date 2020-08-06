const log = console.log;

function hashFunction(key, arrayLength) {
  let total = 0;

  for (let char of key) {
    let val = char.charCodeAt(0) - 96;

    console.log(`Chart at: ${char} = ${char.charCodeAt(0)} => ${char.charCodeAt(0) - 96} => total: ${ (total + val) % arrayLength}`);

    total = (total + val) % arrayLength;
  }

  return total;
}

const result = hashFunction('blue', 10);
const result2 = hashFunction('cyan', 10);
const result3 = hashFunction('purple', 10);

log(result);
log(result2);
log(result3);
