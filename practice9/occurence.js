let arr = [1,1,2,2,3,3,3,4];
element = [];
count = {};

for(let i = 0; i<arr.length; i++){
    element = arr[i];
    if(count[element])
        count[element] += 1;
    else   
        count[element] = 1;
    // (count[element]) ? count[element] += 1 : count[element] =1;

}

 console.warn(count);