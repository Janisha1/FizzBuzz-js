/************************************************************************************
* Allow user pass in rules to implement either 3 (Fizz), 5 (Buzz), or 13 (Fezz).    *
*   Not 7 (Bang) or 11 (Bong)                                                       *
************************************************************************************/
if (process.argv.length === 2) {
  var userInput;
  const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  });

  readline.question("What is the Maximum number you would like to use? ", function (userInput){
    doFizzBuzz(parseInt(userInput));
    readline.close();
  });
} else if (process.argv.length === 3) {
  doFizzBuzz(process.argv[2]);
} else {
  doUserFizzBuzz(process.argv);
}

function doUserFizzBuzz(cmdParams) {

  for(let i=0; i<=cmdParams[2]; i++) {
    let str_Array = [];
    for(let x=3; x<cmdParams.length; x++) {
      let denom = parseInt(cmdParams[x]);
      if(denom===3) {
        if (isDivisible(i, 3)) {
           str_Array.push("Fizz");
        } 
      }
      if(denom===5){
        if (isDivisible(i, 5)) {
          str_Array.push("Buzz");
        } 
      }
      if(denom===13) {
        if (isDivisible(i, 13)) {
          let bIndex = (str_Array.join("").indexOf("B"));
          if(bIndex !== -1) {
            str_Array.splice((bIndex/4), 0, "Fezz");
          } else {
            str_Array.push("Fezz")
          }
        }
      }
    }
    if (str_Array.length === 0) {
      str_Array.push(i.toString());
    }
    console.log(str_Array.join(""));
  }
}

function isDivisible(num, denom){
  return (num % denom === 0);
}

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