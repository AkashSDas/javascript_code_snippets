// ###### Function Examples ######

// =================================
// 1.
function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// =================================
// 2.
function factorial(num)
{
    var count = num;
    if(num>=0)
    {
        if(num === 1 || num === 0)
        {
            return 1;
        }
        else
        {
            while(count>1)
            {
                var fact = num * (count-1);
                num = fact;
                count--;
            }
            return num;
        }
    }
    else
    {
        console.log("please enter correct values");
    }
    
}
// =================================
// 3.
function kebabToSnake(str){
    var result = str.replace(/-/g,"_");
    return result;
}

var ans = kebabToSnake("hello-world to the great-happiness");
console.log(ans);
