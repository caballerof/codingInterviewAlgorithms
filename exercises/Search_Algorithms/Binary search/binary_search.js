/**
 * Binary search
 * 
 * @param {Array} arr `Array` to in which find the `val`.
 * @param {number} val `Number` to find on the `Array`.
 */
function binarySearch(arr, val) {
    if ( arr[0] > val || arr[-1] < val ) return -1;

    let rPointer = arr.length;
    let lPointer = 0;
    let mPointer = Math.floor( (lPointer + rPointer) / 2 );

    while (lPointer <= rPointer) {
        if (val === arr[mPointer]) {
            return mPointer;
        } else if ( val > arr[mPointer] ) {
            lPointer = mPointer + 1;            
        } else {
            rPointer = mPointer - 1;
        }

        mPointer = Math.floor( (lPointer + rPointer) / 2 );
    }

    return -1;
}


const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 48, 54];

console.log(binarySearch(test1, 54));
