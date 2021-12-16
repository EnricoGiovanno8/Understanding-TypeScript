// const person = {
//     name: 'Enrico',
//     age: 23,
//     hobbies: ['Sports', 'Cooking']
// };
// console.log(person.age)
// for (const hobby of person.hobbies) {
//     console.log(hobby.toLocaleUpperCase())
// }
// ENUM DATA TYPE
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var role = Role.READ_ONLY;
if (role === Role.ADMIN) {
    console.log('is admin');
}
else {
    console.log('not admin');
}
// // TUPLE DATA TYPE
// const role: [number, string] = [1, 'admin'] 
// role.push('author')
// console.log(role)
// // ARTINYA KITA DEFINE ROLE ADALAH ARRAY YANG PANJANGNYA HANYA 2 INDEX 
// // DAN INDEX 1 ADALAH NUMBER DAN INDEX 2 ADALAH STRING
// // MESKIPUN STRICT ATAU LENGTH DITENTUKAN, ADA PENGECUALIAN UNTUK PUSH ARRAY
// // SPESIFIK OBJECT ARRAY
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
//         name: 'Enrico',
//         age: 23,
//         hobbies: ['Sports', 'Cooking']
//     };
//     // let favoriteActivites: any[]; // ANY SUPAYA ARRAY BISA BERISI BANYAK DATA TYPE TAPI MENGHILANGKAN BENEFIT DARI TYPESCRIPT
//     let favoriteActivites: string[];
//     favoriteActivites = ['Sports'];
//     console.log(person.age)
// SPESIFIK OBJECT
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Enrico',
//     age: 23
// }
// console.log(person.name)
// // ERROR KARENA OBJECT KURANG SPESIFIC
// const person: object = {
//     name: 'Enrico',
//     age: 23
// };
// console.log(person.name)
