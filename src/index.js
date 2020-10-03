module.exports = function toReadable (number) {
    let numbersTo_20 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let numbersTo_20_100 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

      if (number < 20) return numbersTo_20[number];
  
      if (number < 100) return numbersTo_20_100[Math.floor(number / 10) - 2] 
                                + (number % 10 !== 0 ? ` ${toReadable(number % 10)}` : "");
  
      if (number < 1000) return numbersTo_20[Math.floor(number / 100)] + " hundred" 
                                + (number % 100 !== 0 ? ` ${toReadable(number % 100)}` : "");

      if (number < 20000) return numbersTo_20[Math.floor(number / 1000)] + " thousend" 
                                +  (number % 1000 !== 0 ? ` ${toReadable(number % 1000)}` : "");
}
