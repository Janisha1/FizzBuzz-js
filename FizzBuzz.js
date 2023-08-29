/****************************************************************************
* Assumptions:                                                              *
*   - Each alternate String replacement is:                                 *
*       -- 4 letter longs                                                   *
*       -- Begins with a capital letter                                     *
****************************************************************************/

function isDivisible(num, denom){
    return (num % denom === 0);
}

// function getUserInput(){
//     var userInput;
//     const readline = require("readline").createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     readline.question("What is the Maximum number you would like to use? ", function (userInput){
//         console.log(`Your number ${userInput}`);
//         readline.close();
//     });
//     return userInput;
// }

//userMaxNum = getUserInput();
var userInput;
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("What is the Maximum number you would like to use? ", function (userInput){
    doFizzBuzz(parseInt(userInput));
    readline.close();
});

function doFizzBuzz(userInput){
    for (var i = 1; i <= userInput; i++)
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
        if (isDivisible(i, 17)) {
            str_Array.reverse();
        }
        if (str_Array.length === 0) {
            str_Array.push(i.toString());
        }

        console.log(str_Array.join(""));
    }
}

