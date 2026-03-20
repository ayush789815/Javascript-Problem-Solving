// ==================================================
// BASIC JAVASCRIPT LOGIC PRACTICE
// ==================================================

// ==================================================
// 1. Print "Hello World"
// ==================================================
// function printHello() {
//     console.log("Hello World");
// }
// printHello();

// ==================================================
// 2. Add Two Numbers
// ==================================================
// function addNumbers(a, b) {
//     console.log("Sum:", a + b);
// }
// addNumbers(2, 3);

// ==================================================
// 3. Swap Two Numbers (Using Third Variable)
// ==================================================
// function swapNumbers(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;

//     console.log("After Swap:", a, b);
// }
// swapNumbers(2, 3);

// ==================================================
// 4. Swap Without Third Variable
// ==================================================
// function swapWithoutTemp(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;

//     console.log("After Swap:", a, b);
// }
// swapWithoutTemp(10, 5);

// ==================================================
// 5. Square of Numbers (1–10)
// ==================================================
// function printSquares() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * i);
//     }
// }
// printSquares();

// ==================================================
// 6. Cube of Numbers (1–10)
// ==================================================
// function printCubes() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * i * i);
//     }
// }
// printCubes();

// ==================================================
// 7. Celsius → Fahrenheit
// ==================================================
// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 1.8) + 32;
//     console.log("Fahrenheit:", fahrenheit);
// }
// celsiusToFahrenheit(10);

// ==================================================
// 8. Fahrenheit → Celsius
// ==================================================
// function fahrenheitToCelsius(f) {
//     let celsius = (f - 32) / 1.8;
//     console.log("Celsius:", celsius);
// }
// fahrenheitToCelsius(50);

// ==================================================
// 9. Simple Interest
// ==================================================
// function simpleInterest(p, r, t) {
//     let si = (p * r * t) / 100;
//     console.log("Simple Interest:", si);
// }
// simpleInterest(5000, 3, 2);

// ==================================================
// 10. Area of Circle
// ==================================================
// function areaOfCircle(r) {
//     let area = Math.PI * r * r;
//     console.log("Area:", area);
// }
// areaOfCircle(20);

// ==================================================
// CONDITIONAL STATEMENTS
// ==================================================

// 11. Even or Odd
// function checkEvenOdd(n) {
//     if (n % 2 === 0) {
//         console.log(n, "is even");
//     } else {
//         console.log(n, "is odd");
//     }
// }
// checkEvenOdd(7);

// 12. Positive or Negative
// function checkNumber(n) {
//     if (n > 0) console.log("Positive");
//     else if (n < 0) console.log("Negative");
//     else console.log("Zero");
// }
// checkNumber(-5);

// 13. Largest of Two Numbers
// function largestTwo(a, b) {
//     console.log(a > b ? a : b);
// }
// largestTwo(10, 20);

// 14. Largest of Three Numbers
// function largestThree(a, b, c) {
//     console.log(Math.max(a, b, c));
// }
// largestThree(10, 20, 30);

// 15. Divisible by 5
// function divisibleByFive(num) {
//     console.log(num % 5 === 0 ? "Divisible by 5" : "Not divisible by 5");
// }
// divisibleByFive(10);

// 16. Divisible by 3 and 5
// function divisibleBy3And5(num) {
//     console.log(num % 3 === 0 && num % 5 === 0 ? "Divisible by both" : "Not divisible");
// }
// divisibleBy3And5(15);

// 17. Leap Year
// function checkLeapYear(year) {
//     console.log(year % 4 === 0 ? "Leap Year" : "Not Leap Year");
// }
// checkLeapYear(2024);

// 18. Check Vowel
// function checkVowel(char) {
//     if ("aeiou".includes(char)) {
//         console.log(char, "is vowel");
//     }
// }
// checkVowel("a");

// 19. Multiple of 7
// function multipleOf7(num) {
//     console.log(num % 7 === 0 ? "Multiple of 7" : "Not multiple");
// }
// multipleOf7(21);

// 20. Range 1–100
// function checkRange(num) {
//     console.log(num >= 1 && num <= 100 ? "In Range" : "Out of Range");
// }
// checkRange(50);

// ==================================================
// LOOPS
// ==================================================

// 21. Print numbers from 1 to 10.
// function number(){
//     for(let i = 0; i <= 10; i++){
//         console.log(i)

//     }
// }
// number()

// 22. Print numbers from 10 to 1.
// function number(){
//     for ( let i = 10; i>=0; i--){
//         console.log(i)
//     }
// }
//  number()

// 23 . Print even numbers from 1 to 50.
// function even() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// even();
// function even(){
//     for(let i = 2; i <=50;  i += 2  ){
//         console.log(i)
//     }
// }
// even()

// 24. Print odd numbers from 1 to 50.
// function odd() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 1) {
//       console.log(i, "is odd number");
//     }
//   }
// }
// odd();
// function odd() {
//   for (let i = 1; i <= 50; i += 2) {
//     console.log(i, "is odd number");
//   }
// }
// odd();

// 25.Find the sum of numbers from 1 to N.
// function sumofNumber(n){
//     let sum = 0
//     for( let i = 1 ; i <=n; i++){
//          sum = sum + i
//     }
//     console.log(sum)
// }
//  sumofNumber(5)

//26.Find factorial of a number.
// function facto(){
//     let fact = 1
//     for (let i = 1 ; i <= 5; i++){
//     fact  = fact * i

//     console.log(fact);
//     }
// }
//  facto()
// 27. Print multiplication table of a number.
//   function  multiplecation (num){
//   for (let i = 1; i <= 10; i++){
//     let table = num * i
//     console.log(table)
//   }
//   }
//   multiplecation(6)
// 28. Count digits in a number.

// function countDigit(num){
//    let count = 0
//    if(num === 0){
//      return 1
//     }
//   for(; num !==0 ; num = Math.floor( num / 10)){
//       count++
//   }
//   console.log(count)
//  }
//  countDigit(2343)
// 29.Reverse a number.
// function reverseNumber(num) {
//   let reverseNumber = 0;
//   for (; num !== 0; num = Math.floor(num / 10)) {
//     let digits = num % 10;
//     reverseNumber = reverseNumber * 10 + digits;
//   }
//   return reverseNumber;
// }
// reverseNumber(123456789);
// 30. Check if number is palindrom
// function palindrome(num){
//   let orignalNum =  num
//   let reverse = 0
//   for(; num !== 0 ;  num =  Math.floor(num / 10)){
//     let digits = num % 10
//     reverse =  reverse * 10 + digits
//   }
//   if(reverse === orignalNum){
//     console.log("its palindrome number")
//   } else{
//     console.log("its not a palindrome number")
//   }
// }
// palindrome(1221)

//=====================================================
//String Basics
//=====================================================

// 31. Reverse a string.
//  let str = "helloooo"
//   let reversestr=  str.split("").reverse().join("")
//   console.log(reversestr)

//  let str = "helloooo"
//  let reverseStr = ""
//  for(let i = str.length - 1; i >= 0; i--){
//     reverseStr += str[i]
//  }
//  console.log(reverseStr)
// 32. Count characters in a string
// let  str =  "hhell"
//  let count = 0
//  for(let i = str.length -1; i >=0; i--){
//   count = count + 1
//  }
//  console.log(count)
//33.Convert string to uppercase.
// let str = " helllo"
//  str =  str.toUpperCase()
//  console.log(str)
//34 Convert string to lowercase.
// let str = "Helloo"
// str = str.toLowerCase()
// console.log(str)
//35  Check if string contains a specific character.
// let str = "hel-lloo-"
// let found = false
// for(let i = str.length - 1; i >= 0; i--){
//   if(str[i] === "-" ){
//     console.log("its a special word")
//     found = true
//     break
//   } else{
//      console.log("no special word found")
//   }
//   console.log(i)
// }

//36 find the vowel from string
// let str = "helloo"
// let count = 0
// for(let i = str.length -1; i >=0; i--){
//   if(str[i] === 'a' ||str[i] === 'e'||  str[i] ==='i'||str[i] === 'o' ||str[i] === 'u'){
//     count++
//   }
// }
// console.log(count)

//37 Remove spaces from a string.
// let str = "he lll o"
// let removespace =  str.replace(/ /g,"")
// console.log(removespace)
// 38 Check if string is palindrome.
//  let str = "madam"
//  let reverse =""
//  for (let i = str.length -1; i>=0; i--){
// reverse += str[i]
// }
// if(str === reverse){
//      console.log("it is a palindrome string")
// }else{
//     console.log("it is  not a palindrome  string ")
// }
//39 Replace word in a string.
// let  str = " i like coding"
//  let repalceArry =  str.replace("coding", "guitar")
//  console.log(repalceArry)
//40 Find length of longest word in sentence.
//  let str = "I love programming very much"
//      let arr = str.split(" ")
// let maxLenght = 0
//  for ( let i = 0 ;  i < arr.length; i++){
// if (arr[i].length > maxLenght) {
//     maxLenght = arr[i].length;
// }
//  }
//   console.log(maxLenght)
// ===============================================================
// Loops
// ===============================================================
//41.Print all elements of an array.

// let arr = [1,2,4,5,6,89,43,232,3,345]
//  for (let i = 0; i< arr.length; i++){
//     console.log(arr[i])
//  }
// 42 . Find sum of array elements.
//  let arr = [1,2,4,5,6,9,43,32,3,3]
//  let num = 0
//   for ( let i = 0 ; i<arr.length; i++){
//         num  = num  + arr[i]
//   }
//    console.log( num)
//43 Find largest element in array.
// let arr = [1, 2, 4, 5, 6, 9, 43, 32, 3, 3];
// let largest = 0
// for ( let i = 0 ; i < arr.length ; i++){
// if(arr[i]> largest){
//     largest = arr[i]
// }
// }
//  console.log(largest)
// =========================================
// Level 2 – Strengthen Basics (44–70)
//==========================================
// 44 Find smallest number in an array
// let arr = [1, 2, 4, 5, 6, 9, 43, 32, 3, 3];
// let lowest =arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < lowest){
//             lowest = arr[i]
//    }    }
//     console.log(lowest)
//  let arr = [1, 2, 4, 5, 6, 9, 43, 32, 3, 3];
//  console.log(Math.min(...arr))
//45  Find second largest number in an array
// let arr = [1, 2, 4, 5, 6, 9, 43, 32, 3, 3];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//  console.log( num ," num is ")
//     if (num > largest) {
//         secondLargest = largest;
//         console.log("secondLargets number is ", secondLargest)
//         largest = num;
//         console.log("larget number is ",largest)
//     }
//     else if (num < largest && num > secondLargest) {
//         secondLargest = num;
//     }
// }

// console.log(secondLargest);
//46 Find second smallest number
//  let arr = [1, 2, 4, 5, 6, 9, 43, 32, 3, 3];
// let lowest = Infinity;
// let secondLowest = Infinity;

// for(let i = 0; i < arr.length; i++){
//     let num = arr[i]
//     if(num < lowest){
//         secondLowest = lowest
//         lowest = num
//     }
//     else if(num >  lowest && num < secondLowest){
//         secondLowest = num
//     }
// }
// console.log(secondLowest)
//47 Check if a number is prime
//   function primeArry(num){
//     if(num <= 1) return  false;
//     for(let i = 2; i <= Math.sqrt(num);i++){
//         if(num % i === 0){
//             return  false
//         }
//     }
//     return true
//    }
// console.log(primeArry(34))
//48 Print all prime numbers from 1 to N
 function printPrimeNum(n){
   for(let num = 2; num <= n; num++){
    let isPrime = true
    for(let i = 2;i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        console.log(num)
    }
   }
 }
 printPrimeNum(100)