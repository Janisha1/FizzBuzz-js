function isDivisible(num, denom){
    return (num % denom === 0);
}

for (var i = 1; i <= 105; i++)
{
    var str = "";
    if (isDivisible(i, 3)) {
        str += "Fizz";
    } 
    if (isDivisible(i, 5)) {
        str += "Buzz";
    } 
    if (isDivisible(i, 7)) {
        str += "Bang";
    }
    if (isDivisible(i, 11))
        str = "Bong";
    if (str === "") {
        str = (i);
    }

    console.log(str);
}



