/**
 * Bubble sort algorithm
 * 
 * @param {Array} arr 
 */
function bubble_sort(arr) {
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr.length - x + 1; y++) {
            if (arr[y] > arr[y + 1]) {
                const temp = arr[y + 1];
                arr[y + 1] = arr[y];
                arr[y] = temp;
            }
        }
    }

    return arr;
}

const arr = [1, 2, 3, 4, 5];

console.log(bubble_sort(arr));
