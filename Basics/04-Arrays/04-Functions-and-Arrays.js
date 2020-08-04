// ###### Functions and Arrays Examples ######

// =================================
// 1.
function printReverse(array){
    for(var i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}
// =================================
// 2.
function isUniform(array){
    for(var i=0, j=1; j<array.length; i++,j++){
        if(array[i] !== array[j]){
            return false;
        }
    }
    return true;
}
// =================================
// 3.
function sumArray(array){
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
// =================================
// 4.
function totalArray(array){
    var total = 0;
    array.forEach(function(item){
        total += item;
    });
    return total;
}
// =================================
// 5.
function max(array){
    var max = array[0];
    for(var i=1; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}
