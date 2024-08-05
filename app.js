// 1-savol

// let str = "saloma"

// function func(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a") {
//             count++
//         }
//     }

//     return count
// }

// let natija = func(str)
// console.log(natija);

// 2-savol

// let str = "salom"

// function func(str) {
//     let res = str.slice(-3)

//     return res
// }

// let natija = func(str)
// console.log(natija);

// 3-savol

// let str = "salom nima gaplar bu"
// let res = str.split()

// function func(str, res) {
//     for (let i = 0; i < res.length; i++) {
//         res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1)
//     }

//     return res.join(" ")
// }

// let natija = func(str, res)
// console.log(natija);

// 4-savol

// 4. **Berilgan so‘zdan barcha bo‘sh joylarni olib tashlaydigan funksiya yozing.**

// let str = "salom nima gaplar bu"

// function func(str) {
//     let res = str.split(" ").join("")

//     return res
// }

// let natija = func(str)
// console.log(natija);


// 5-savol

// let str = "salom nima gaplar bu";

// function func(str) {
//     let newArr = []
//     for (let i = str.length -1; i >= 0; i--) {
//         newArr.push(str[i])
//     }

//     return newArr.join("")
// }

// let natija = func(str)  
// console.log(natija);

// 6-savol

// let str = "salom nima gaplar bu"

// function func(str) {
//     return str.length
// }

// let natija = func(str)  
// console.log(natija);

// 7-savol

// let str = "salom"

// function func(str) {

//     let res = str.repeat(3)

//     return res
// }

// let natija = func(str)
// console.log(natija);

// 8-savol

// let str = "salom14"
// let arr = str.split("")
// console.log(arr);
// let res = ""

// function func(arr, res) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!isNaN(arr[i])) {
//             res += arr[i]
//         }
//     }

//     return res

// }

// let natija = func(arr, res)
// console.log(natija);


// 9-savol


// let str = "salom nima gaplar bu"
// let arr = str.split(" ")

// function func(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[0]) {
//             newArr.push(arr[0])
//             break;
//         }
//     }

//     return newArr.join("")
// }

// let natija = func(arr)
// console.log(natija);

// 10-savol

// let str = "js"

// function func(str) {
//     let res = str.includes("js")

//     return res
// }

// let natija = func(str)
// console.log(natija);


// Massivlarga oid masalalar

// 1-savol

// let arr = ["salosfkjsfn","nadfaima"]

// function func(arr) {
//     let res = ""
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > res.length) {
//             res = arr[i]
//         }

//     }

//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 2-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     let newArr = []

//     for (const iteration of arr) {
//         if (iteration % 2 == 0) {
//             newArr.push(iteration)
//         }
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 3-savol

// let arr = [1, 2, 3, 4, true, 6, "salonf", 8, 9, 10];
// let newArr = [];

// function func(arr, newArr) {
//     let count = 0;
//     for (const element of arr) {
//         if (typeof element == "number") {
//             newArr.push(element)
//         }
//     }

//     for (let i = 0; i < newArr.length; i++) {
//         count += newArr[i]

//     }

//     return count
// }

// let natija = func(arr, newArr)
// console.log(natija);


// 4-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function func(arr) {
//     let newArr = []
//     for (const element of arr) {
//         newArr.push(element *2)
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 5-savol

// let arr = [1,2,3,4,5,6,7,8,9,10,-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

// function func(arr){
//     let newArr = []

//     for (const element of arr) {
//         if (element < 0) {
//             newArr.push(element)
//         }
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);


// 6-savol

// ??????

// 7-savol

// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]

// function func(arr1, arr2) {
//     let res = arr1.concat(arr2)

//     return res
// }

// let natija = func(arr1, arr2)
// console.log(natija);


// 8-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function func(arr) {
//     let newArr = []

//     for (let i = arr.length -1; i >= 0; i--) {
//         newArr.push(arr[i])

//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);

// 9-savol

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//            newArr.push(i)
//         }
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);


// 10-savol

// let arr = [1, 2, 7, 10, 5, 6, 3, 8, 9, 4]

// let res = arr.sort(function (a, b) {
//     return a - b
// })

// function func(arr, res) {
//     let res1 = Math.floor(res.length / 2);
//     return res[res1]
// }

// let natija = func(arr, res)
// console.log(natija);



// Obyekt va Massivlarga oid masalalar

// 1-savol


// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 80 },
//     { name: "Hasan", age: 77 }
// ];

// function func(people) {
//     let res = people[0]

//     for (let i = 0; i < people.length; i++) {
//         if (people[i].age > res.age) {
//             res = people[i]
//         }
//     }

//     return res


// }

// let natija = func(people)
// console.log(natija);

// 2-savol

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 },
//     { name: "Hasan", age: -1 }
// ];

// let num = +prompt("Iltimos biror yosh kiriting")
// function func(people, num) {
//     let res = []

//     for (let i = 0; i < people.length; i++) {
//         if (people[i].age > num) {
//             res.push(people[i])
//         }

//     }

//     return res
// }

// let natija = func(people, num)
// console.log(natija);


// 3-savol

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let res = []

// function func(people, res) {
//     for (let i = 0; i < people.length; i++) {
//         res.push(people[i].name)

//     }

//     return res
// }

// let natija = func(people, res)
// console.log(natija);


// 4-savol

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let sum = 0;

// function func(people, sum) {
//     let newArr = []
//     for (let i = 0; i < people.length; i++) {
//         newArr.push(people[i].age)
//     }

//     for (const element of newArr) {
//         sum+= element
//     }

//     return sum
// }

// let natija = func(people, sum)
// console.log(natija);


// 5-savol

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let name = prompt("Ali, Vali yoki Hasangizni kiriting")

// function func(people, name) {
//     let newArr = []
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].name == name) {
//             newArr.push(people[i])
//         }
//     }

//     return newArr
// }

// let natija = func(people, name)
// console.log(natija);


// 6-savol

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Vali", age: 70 },
//     { name: "Hasan", age: 28 }
// ];

// let res  = people.sort(function (a, b) {
//     return a.age - b.age
// })

// let natija = Math.floor(res.length / 2)
// console.log(res[natija]);


// 7-savol

// const people = [
//     { name: "Ali", age: 25, gender: "male" },
//     { name: "Vali", age: 30, gender: "male" },
//     { name: "Hasan", age: 28, gender: "male" },
//     { name: "Salima", age: 22, gender: "female" }
// ];

// let newArr = []

// function func(people, newArr) {
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].gender == "female") {
//             newArr.push(people[i])
//         }

//     }

//     return newArr
// }

// let natija = func(people, newArr)
// console.log(natija);



// 8-savol

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let newArr = []

// function func(people, newArr) {
//     for (const element of people) {
//         newArr.push({ name: element.name, age: element.age + 1, })
//     }

//     return newArr
// }

// let natija = func(people, newArr)
// console.log(natija);