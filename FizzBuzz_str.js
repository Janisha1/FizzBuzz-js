function isDivisible(num, denom){
    return (num % denom === 0);
}

for (var i = 1; i <= 200; i++)
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
    if (isDivisible(i, 11)) {
        str = "Bong";
    }
    if (isDivisible(i, 13)) {
        bIndex = str.indexOf("B");
        if(bIndex !== -1) {
            str = (str.slice(0, bIndex) + "Fezz" + str.slice(bIndex));
        } else {
            str += "Fezz";
        }
    }
    if (str === "") {
        str = (i);
    }

    console.log(str);
}