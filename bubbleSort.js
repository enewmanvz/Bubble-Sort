//1. loop over all elements in an array
// function takes in an array
//2. if adjacent elements are out of order, swap them
//3. repeat 1&2 until all elements are sorted

function bubbleSort(arr){
    //start at index zero, loop through each index
    //expect(bubbleSort([89,12,98,-11,40,5, 26])).toEqual([-11,5,12,26,40,89,98])
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    console.log(temp)
                }
                console.log(`i; ${i}, j:${j}`)
            
        }
    }
    //return the original array, sorted
    return arr
}


module.exports = bubbleSort