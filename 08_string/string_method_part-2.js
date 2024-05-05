//to repeat string we use repeat()

str=" i am mad for learning for for "
console.log(str.repeat(11))     //here we repeat str's data 11 times

//repleace substring using .replace()
console.log(str.replace("learning","teaching"))     //here we replace learning to teaching

// for replace all same string then we use .replaceAll()
console.log(str.replaceAll("for ","to"))


//slicing string using .slice()
ss="om shekhawat"
console.log(ss.slice(4,8))  //it cut string from 4 to 7 index 8th index is not take part of this slice
console.log(ss.slice(4))      //we insert only one index the it cut from that index(4) to end index
console.log(ss.slice(-1))   
console.log(ss.slice(-3))   //we insert only one index the it cut from that index(-3) to end index ..slice the index no [-3,-2-1]


//convert string into array .split()
console.log(ss.split(""))       //to break into array of character
console.log(ss.split(" "))      //to break into divide string from space to change of string into array

//con