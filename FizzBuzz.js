function isDivisible(num, denom){
    return (num % denom === 0);
}

for (var i = 1; i <= 200; i++)
{
    var str_Array = [];
    if (isDivisible(i, 3)) {
        str_Array.push("Fizz");
    } 
    if (isDivisible(i, 5)) {
        str_Array.push("Buzz");
    } 
    if (isDivisible(i, 7)) {
        str_Array.push("Bang");
    }
    if (isDivisible(i, 11)) {
        str_Array.length = 0;
        str_Array.push("Bong");
    }
    if (isDivisible(i, 13)) {
        var bIndex = (str_Array.join("").indexOf("B"));
        if(bIndex !== -1) {
            str_Array.splice((bIndex/4), 0, "Fezz");
        } else {
            str_Array.push("Fezz")
        }
    }
    if (str_Array.length === 0) {
        str_Array.push(i.toString());
    }

    console.log(str_Array.join(""));
}



