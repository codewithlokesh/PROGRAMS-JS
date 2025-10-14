let num = 153;
let reverse =0
while(num != 0){
    const reminder = parseInt(num%10)
    reverse = reverse *10 + reminder
    num = parseInt(num/10)
}
console.log(reverse);
