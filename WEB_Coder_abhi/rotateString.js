const rorateString = function (s, goal) {
    if(s === goal) return true;
    for(let i=0; i<s.length; i++){
        s = s.slice(1) + s[i]
        if(s === goal) return true
    }
    return false
}

let str = "lokesh", goal= "okeshl"
console.log(rorateString(str,goal))

