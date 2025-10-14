 //Write java program to replace each array element with it factorail value

 let arr = [2, 3, 33, 44, 9];
 let element = [];
 let fac = 1;

 for (let i = 0; i < arr.length; i++) {
     fac = fac * arr[i];
     element.push(fac)
 }
 console.log(element);