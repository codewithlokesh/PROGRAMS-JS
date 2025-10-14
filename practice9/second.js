// 2.we have one unsorted array having 0 and 1 , arrange 0 at beginning and non zera at 

let arr = [1,0,1,0,1,0,0,1];

for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }   
    }
}
console.log(arr);

