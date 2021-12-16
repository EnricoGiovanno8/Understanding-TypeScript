function add(n1: number, n2: number, showResult: boolean, phase: string) {
    const result = n1 + n2
    if (showResult) {
        console.log(phase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhase = 'Result is: ';

add(number1, number2, printResult, resultPhase);


// CONTOH ERROR KARENA DATA TYPE TIDAK SESUAI

// function add(n1: number, n2: number) {
//     return n1 + n2;;
// }

// const number1 = '5';
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);


// CONTOH TYPE ASSIGNMENT AND INTERFERENCE

// let number1: number;
// number1 = '5'; // CONTOH ERROR KARENA ASSIGN TYPE NUMBER TAPI MALAH DI DEFINE STRING

// let phrase: string;
// phrase = 'Hi'; // CONTOH YANG BENAR