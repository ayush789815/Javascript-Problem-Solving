//Basic JavaScript Logic Questions===========================

// ===============1. Print "Hello World" in JavaScript=====================
// console.log("Hello World")

// =====================2. Add two numbers and print the result.=================
//  let a = 2
//  let b = 3
//   console.log(a+b)

// ==================3. Swap two numbers using a third variable.===================

// let a = 2
// let b = 3
//  let temp = a
//   a = b
//   b = temp
//   console.log(a,b)

// ====================4. Swap two numbers without using a third variable.===================

// let a = 10
// let b = 5
// a = a + b
// b = a - b
// a  = a - b
// console.log( a, b)

// ================== 5. Find the square of a number.\====================

// function test(n){
//  for (let i= 1; i<= 10; i++){
//         console.log(i* i)
//  }}
// test(5)

// ===============6. Find the cube of a number.=========================

// function test(){
// for(let i = 1; i<=10; i++){
//  console.log(i * i * i)
// }
// }
// test()

//  ======= 7 Convert Celsius to Fahrenheit.=========
// Formula Of Celsius to Fahrenheit = (celsius * 1.8) + 32
//  const celsius = 10
//   const fahrenheit =   (celsius * 1.8)  + 32
//    console.log(fahrenheit)

//  ======= 8 Convert Fahrenheit to Celsius.============
//   Formula of Fahrenheit to Celsius =  (Fahrenheit - 32) 1.8
// const fahrenheit = 50
//   const celsius = (fahrenheit  - 32) / 1.8
//   console.log(celsius)

// ========= 9. Calculate simple interest.=============
//   Formula of Simple Intrest =  (principle * Intrest * time ) / 100
// const  principle = 5000
//  const  interestRate = 3
//  const time = 2
//    const simpleIntrest = (principle * interestRate * time) / 100
//    console.log(simpleIntrest)

// ========== 10. Find the area of a circle.========
//    Formula of area of circle  = πr2
//  const   circle = 20
//   const  area = 22/7 * (circle * circle)

//   console.log(area)

/////===============Conditional Statements=====================

//============== 11. Check if a number is even or odd.
//  function test (n){
//       if ( n % 2 == 0){
//         console.log(n,"in is even number")
//       }
//       else{
//          console.log( n , " is  odd number")
//       }
//  }

//  test(2)
//    for(let i = 1; i <=10; i++){
//     if(i % 2 == 0){
//         console.log( i , " is even number")
//     }
//     else{
//         console.log(i, "is odd number")
//     }
//    }

// ======12 . Check if a number is positive or negative.===========
//    for ( let i = -5; i<=5; i++){
//     if(i < 0){
//         console.log(i,"number is negative")
//     }
// else if (i > 0){
//     console.log(i,"number is positive")
// }
//    }

// =========13. Find the largest of two numbers.===========
//  function  findLargestNumber(){
// let a = 10
//  let b = 20
//  if(a > b){
//  console.log(a , "is bigger than b")
//  }
//   else{
//      console.log(b," is bigger  than a")
//   }

//  }
//  findLargestNumber()

//========== 14. Find the largest of three numbers ==============
// function findLargestNumber(a,b,c){
//     if(a > b && a > c){
//         console.log(a,"a is greather than  b and c")
//     }else if (b > a && b > c){
//         console.log(b, " b is greter than a  and c")
//     }else if(c > a && c > b){
//         console.log(c, "c is greater than a  and b")
//     }
// }
// findLargestNumber(10,20,30)
// ========== 15. Check if a number is divisible by 5.

//  function divisible(num){
//     if( num % 5  == 0){
//          console.log(num, "is divisible by 5")
//     }
//     else{
//         console.log(num, " is not  divisible by 5")
//     }
//  }
//   divisible(10)
// ========== 16.Check if a number is divisible by both 3 and 5.======
//  function divisible(num){
//     if(num % 3 == 0 && num % 5 == 0){
//         console.log(num, " can be divisable both 3 and five")
//     }
//     else{
//         console.log(num, " can not be divide")
//     }
//  }
//  divisible(10)

//========= 17. Check if a year is a leap year.=============
//  function findsLeapyear(year){
//     if(year % 4 == 0){
//          console.log( year, " is leap year")
//     }
//     else{
//         console.log(year,"is not a leap year")
//     }
//  }
//  findsLeapyear( 2023)

// ========== 18. Check if a character is a vowel..========
// function checkVowel(char){
// if(char == "a"  || char == "e" || char == "i"  || char == "o"  ||char =="u"){
//     console.log(char," is vowel")
// }}
// checkVowel("a")
//    function checkVowelByLoop(word){
//     for(let i = 0 ; i < word.length ; i++){
//         let char = word[i]
//         if(char == "a" || char == "e" || char == "i" || char == "o"  || char == "u"){
//             console.log(char, "is vowel")
//         }
//     }
//    }
//    checkVowelByLoop("hello")

// ====== 19 Check if a number is multiple of 7. ========
// function divdeable(num){
//     if(num % 7 == 0 ){
//         console.log(num,  'is multiple of 7')
//     } else{
//         console.log(num, " is not multiple of 7")
//     }
// }
// divdeable(20)


// ======== 20 Check if a number is within range 1–100.=======
// function  range(num){
//          if(num  >= 1 && num  <= 100 ){
//             console.log(num , "is  in range")
//          }
//          else{
//             console.log( num, " is not in range"           )
//          }}
// range(10)
