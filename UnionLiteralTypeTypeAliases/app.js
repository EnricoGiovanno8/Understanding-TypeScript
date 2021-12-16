// // UNION TYPE
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
// // LITERAL TYPE
// function combine(
//     input1: number | string , 
//     input2: number | string, 
//     resultConversion: 'as-number' | 'as-text'
// ) { 
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     if (resultConversion === 'as-number') {
//         return +result;
//     } else {
//         return result.toString();
//     }
// }
// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);
// const combineStringAges = combine('30', '26', 'as-number');
// console.log(combineStringAges);
// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);
// TYPE ALIASES
// type Combinable = number | string;
// function combine(
//     input1: Combinable, 
//     input2: Combinable
// ) { 
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     return result;
// }
// const combinedAges = combine(30, 26);
// console.log(combinedAges);
// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames)
