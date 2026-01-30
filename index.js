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

function reverse(str){
    let s = "";
    for (let i = str.length - 1; i >= 0; i--) {
        s = s.concat(str[i]);
    }
    return s;
}

function countVowels(str){
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            counter++;
        }
    }
    return counter;
}

console.log(countVowels("hello")); // 2