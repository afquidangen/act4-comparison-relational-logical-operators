let firstFavNum = 22;
let secondFavNum = 30;

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

console.log(firstFavNum + " > " + secondFavNum + " && " + secondFavNum + " < " + firstFavNum);
console.log(firstFavNum > secondFavNum && secondFavNum < firstFavNum); 
//output: 22 > 30 && 30 < 22
//        false

console.log(secondFavNum + " >= " + secondFavNum + " && " + firstFavNum + " == " + firstFavNum);
console.log(secondFavNum >= secondFavNum && firstFavNum == firstFavNum);
//output: 30 >= 30 && 22 != 22
//        true

//OR
console.log("OR");

console.log(firstFavNum + " > " + secondFavNum + " || " + secondFavNum + " >= " + firstFavNum);
console.log(firstFavNum > secondFavNum || secondFavNum >= firstFavNum);
//output: 22 > 30 || 30 >= 22
//        true

console.log(secondFavNum + " == " + firstFavNum + " || " + firstFavNum + " >= " + secondFavNum);
console.log(secondFavNum == firstFavNum || firstFavNum >= secondFavNum);
//output: 30 == 22 || 22 >= 30
//        false

//NOT
console.log("NOT");

console.log("!" + "(" + (secondFavNum + " > " + firstFavNum) + ")" );
console.log(!(secondFavNum > firstFavNum));
//output: !(30 > 22)
//        false

console.log("!" + "(" + firstFavNum + " == " + secondFavNum + ")" );
console.log(!(firstFavNum == secondFavNum));
//output: !(22 == 30)
//        true

//COMBINED
console.log("COMBINED");

console.log("!" + "(" + (firstFavNum + " == " + secondFavNum + ")" + " && " + "(" + secondFavNum + " < " + firstFavNum + ")"));
console.log(!(firstFavNum == secondFavNum) && (secondFavNum < firstFavNum));
//output: !(22 == 30) && (30 < 22)
//        false

console.log(("!" + "(" + secondFavNum + " <= " + firstFavNum + ")") + " || " + "!" + "(" + firstFavNum + " >= " + secondFavNum + ")");
console.log(!(secondFavNum <= firstFavNum) || !(firstFavNum >= secondFavNum));
//output: !(30 <= 22) || !(22 >= 30)
//        true

console.log("!" + "(" + secondFavNum + " == " + secondFavNum + ")" + " && " + "(" + firstFavNum + " <= " + firstFavNum + ")");
console.log(!(secondFavNum == secondFavNum) && (firstFavNum <= firstFavNum));
//output: !(30 == 30) && (22 <= 22)
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
// 22 > 30 && 30 < 22
// false
// 30 >= 30 && 22 == 22
// true
// OR
// 22 > 30 || 30 >= 22
// true
// 30 == 22 || 22 >= 30
// false
// NOT
// !(30 > 22)
// false
// !(22 == 30)
// true
// COMBINED
// !(22 == 30) && (30 < 22)
// false
// !(30 <= 22) || !(22 >= 30)
// true
// !(30 == 30) && (22 <= 22)
// false