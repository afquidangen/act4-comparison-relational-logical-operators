let firstFavNum = 22;
let secondFavNum = 30;
let thirdFavNum = 45;

// GREATER THAN 
console.log("GREATER THAN");
let GreaterThan = firstFavNum > secondFavNum;
console.log(firstFavNum + " > " + secondFavNum + " = " + GreaterThan);
//output: 22 > 30 = false

// LESS THAN 
console.log("LESS THAN"); 
let LessThan = firstFavNum < secondFavNum;
console.log(firstFavNum + " < " + secondFavNum + " = " + LessThan);
//output: 22 < 30 = true

// GREATER THAN OR EQUAL TO
console.log("GREATER THAN OR EQUAL TO");
let GreaterThanorEqualTo = firstFavNum >= secondFavNum;
console.log(firstFavNum + " >= " + secondFavNum + " = " + GreaterThanorEqualTo);
//output: 22 >= 30 = false

// LESS THAN OR EQUAL TO
console.log("LESS THAN OR EQUAL TO");
let LessThanorEqualTo = firstFavNum <= secondFavNum;
console.log(firstFavNum + " <= " + secondFavNum + " = " + LessThanorEqualTo);
//output: 22 <= 30 = true

// STRICT EQUALITY
console.log("STRICT EQUALITY");
let StrictEquality = firstFavNum === secondFavNum;
console.log(firstFavNum + " === " + secondFavNum + " = " + StrictEquality);
//output: 22 === 30 = false

//LOOSE EQUALITY
console.log("LOOSE EQUALITY")
let LooseEquality = firstFavNum == secondFavNum;
console.log(firstFavNum + " == " + secondFavNum + " = " + LooseEquality);
//output: 22 == 30 = false

//STRICT INEQUALITY
console.log("STRICT INEQUALITY");
let StrictInequality = firstFavNum !== secondFavNum;
console.log(firstFavNum + " !== " + secondFavNum + " = " + StrictInequality);
//output: 22 !== 30 = true

//LOOSE INEQUALITY
console.log("LOOSE INEQUALITY");
let LooseInequality = firstFavNum != secondFavNum;
console.log(firstFavNum + " != " + secondFavNum + " = " + LooseInequality);
//output: 22 != 30 = true


//AND
console.log("AND");

console.log(firstFavNum + " > " + secondFavNum + " && " + secondFavNum + " < " + thirdFavNum);
console.log(firstFavNum > secondFavNum && secondFavNum < thirdFavNum); 
//output: 22 > 30 && 30 < 45
//        false

console.log(thirdFavNum + " >= " + secondFavNum + " && " + firstFavNum + " != " + thirdFavNum);
console.log(thirdFavNum >= secondFavNum && firstFavNum != thirdFavNum);
//output: 45 >= 30 && 22 != 45
//        true

//OR
console.log("OR");

console.log(firstFavNum + " > " + thirdFavNum + " || " + secondFavNum + " >= " + firstFavNum);
console.log(firstFavNum > thirdFavNum || secondFavNum >= firstFavNum);
//output: 22 > 45 || 30 >= 22
//        true

console.log(thirdFavNum + " == " + firstFavNum + " || " + firstFavNum + " >= " + secondFavNum);
console.log(thirdFavNum == firstFavNum || firstFavNum >= secondFavNum);
//output: 45 == 22||22 >= 30
//        false

//NOT
console.log("NOT");

console.log("!" + "(" + (secondFavNum + " > " + firstFavNum) + ")" );
console.log(!(secondFavNum > firstFavNum));
//output: !(30 > 22)
//        false

console.log("!" + "(" + firstFavNum + " == " + thirdFavNum + ")" );
console.log(!(firstFavNum == thirdFavNum));
//output: !(22 == 45)
//        true

//COMBINED
console.log("COMBINED");

console.log("!" + "(" + (firstFavNum + " == " + secondFavNum + ")" + " && " + "(" + thirdFavNum + " < " + firstFavNum + ")"));
console.log(!(firstFavNum == secondFavNum) && (thirdFavNum < firstFavNum));
//output: !(22 == 30) && (45 < 22)
//        false

console.log(("!" + "(" + thirdFavNum + " <= " + firstFavNum + ")") + " || " + "!" + "(" + firstFavNum + " >= " + secondFavNum + ")");
console.log(!(thirdFavNum <= firstFavNum) || !(firstFavNum >= secondFavNum));
//output: !(45 <= 22) || !(22 >= 30)
//        true

console.log("!" + "(" + secondFavNum + " == " + thirdFavNum + ")" + " && " + "(" + thirdFavNum + " <= " + firstFavNum + ")");
console.log(!(secondFavNum == thirdFavNum) && (thirdFavNum <= firstFavNum));
//output: !(30 == 45) && (45 <= 22)
//        false

//overall output:
// GREATER THAN
// 22 > 30 = false
// LESS THAN
// 22 < 30 = true
// GREATER THAN OR EQUAL TO
// 22 >= 30 = false
// LESS THAN OR EQUAL TO
// 22 <= 30 = true
// STRICT EQUALITY
// 22 === 30 = false
// LOOSE EQUALITY
// 22 == 30 = false
// STRICT INEQUALITY
// 22 !== 30 = true
// LOOSE INEQUALITY
// 22 != 30 = true
// AND
// 22 > 30 && 30 < 45
// false
// 45 >= 30 && 22 != 45
// true
// OR
// 22 > 45 || 30 >= 22
// true
// 45 == 22 || 22 >= 30
// false
// NOT
// !(30 > 22)
// false
// !(22 == 45)
// true
// COMBINED
// !(22 == 30) && (45 < 22)
// false
// !(45 <= 22) || !(22 >= 30)
// true
// !(30 == 45) && (45 <= 22)
// false