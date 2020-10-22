
function pivot (start, end, arr) {
    let  pivot = start;
    let numValue = 0;

    for (let x = start; x <= end; x++) {
        if (arr[x + 1] < arr[pivot]) {
            const temp = arr[pivot];
            arr[pivot] = arr[x + 1];
            arr[x + 1] = temp;
            pivot = x + 1;

            numValue += 1;
        }
    }

    return arr;
}


const arr = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];

const result = pivot(0, arr.length - 1, arr);

console.log(result);
