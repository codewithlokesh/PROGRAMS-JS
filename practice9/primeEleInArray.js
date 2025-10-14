// let arr = [1,2,11,12,13,17,20,23];
// let count ;
// for(let i=0; i<arr.length; i++){
//     count = 0;
//     for(let j=2; j<arr[i]/j; j++){
//         if(arr[i]%j == 0){
//             count++;
//             break;
//         }
//     }
//     if(count == 0)
//         console.log(arr[i]);
// }


let num = 17;
let count;

for(let i=0; i<num; i++){
    count =0;
    for(let j=2; j<=i/2; j++){
        if(i%j == 0){
            count++;
            break;
        }
    }
    if(count==0)
        console.log("prime :" + i);
}