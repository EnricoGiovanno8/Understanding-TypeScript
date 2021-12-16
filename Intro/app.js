function add(n1, n2, showResult, phase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhase = 'Result is: ';
add(number1, number2, printResult, resultPhase);
// CONTOH ERROR KARENA DATA TYPE TIDAK SESUAI
// function add(n1: number, n2: number) {
//     return n1 + n2;;
// }
// const number1 = '5';
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
