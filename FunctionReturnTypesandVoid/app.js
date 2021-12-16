// // FUNCTION RETURN TYPE AND VOID
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// function printResult(num: number): void { // Type harus void kalau tidak ada return
//     console.log('Result: ' + num);
// }
// function printRes(num: number): undefined { // Type undefined kalau ada return tapi tidak mereturn apa"
//     console.log('Result: ' + num);
//     return;
// }
// printResult(add(5, 12));
// printRes(add(5, 12));
// // let someValue: undefined;
// // FUNCTION TYPE
// function add(n1: number, n2: number) {
//         return n1 + n2;
//     }
// function printResult(num: number): void { // Type harus void kalau tidak ada return
//         console.log('Result: ' + num);
//     }
// // let combineValue: Function;
// let combineValue: (a: number, b: number) => number; // Lebih spesifik
// combineValue = add;
// // combineValue = printResult; 
// // combineValue= 5;
// console.log(combineValue(8, 8))
// CALLBACKS
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
