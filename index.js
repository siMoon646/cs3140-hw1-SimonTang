function sum(arr){
    // s -> sum
    let s = 0;
    for (const a of arr){
        s+=a;
    }
    return s;
}

function average(arr){
    return sum(arr)/arr.length();
}

