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

function min(arr){
    m = arr[0];
    for(const a of arr){
        if (a < m){
            m = a;
        }
    }
    return m;
}

function max(arr){
    m = arr[0];
    for(const a of arr){
        if (m > a){
            m = a;
        }
    }
    return m;
}

function capitalize(str){
    return str[0].toUpperCase().concat(str.substring(1));
}