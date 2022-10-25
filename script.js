/**
 * problem 01
   showing current day date and time
   from international system day count start from sunday . and sunday is zero positions
 */
let today = new Date();
// let allDay = ['Sunday', 'monday', 'tuesday', 'wednesday', 'Thursday', 'friday', 'saturday'];
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();
// console.log(today, day, month, year)
let todaysDate = `${day} ${month} ${year}`;
// console.log(todaysDate);
let time = today.getHours();
let minute = today.getMinutes();
let sec =  today.getSeconds();
console.log(`it is ${time} ${minute} ${sec} o clock`)

/**
 * problem no 2
 * print current page
 */
function printCurrentPage(){
  window.print();
}
/**
 * problem 03
 * show todays date month and year like 01 -05-2012
 */
let currentDay = new Date();
let date = currentDay.getDate();
let Thismonth = currentDay.getMonth();
let thisYear = currentDay.getFullYear();
if(date < 10){
  date = '0' + date;
}
if(month < 10){
  Thismonth = '0' + Thismonth;
}
let getAll = `${date} ${Thismonth} ${thisYear}`
console.log(getAll);

/** problem 04
 * Write a JavaScript program to get the website URL (loading page).
 */
console.log(document.URL)

/**
 * problem 05
 * creating a varriable using userDefined name
 */
const me = 'amar sonar bangla';
const n = 100;
this[me]  = n;
console.log(this[me])

/**
 * problem 06
 * creat a swaping variable
 */
const one = 'Bangladesh';
const two = 'Canada';
[one] = [two];
console.log(one)

/** problem 07
 * JavaScript program to compute the sum of the two given integers. If the two values are same, then return triple their sum
 */
 function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
// console.log(sumTriple(10, 20));
// console.log(sumTriple(10, 10));


/** problem 08
 * JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
 */
 function test50(x, y) 
 {
   return ((x == 50 || y == 50) || (x + y == 50));
 }
 console.log(test50(50, 50))
 console.log(test50(20, 50))
 console.log(test50(20, 20))
 console.log(test50(20, 30))

 /** problem 09
  * JavaScript program to  check from two given integers, whether one is positive and another one is negative
  */
  function positive_negative(x, y)
  {
    if ((x < 0 && y > 0) || x > 0 && y < 0) 
    {
      return true;
    }
    else 
    {
      return false;
    }
  }
  console.log(positive_negative(2, 2));
  console.log(positive_negative(-2, 2));
  console.log(positive_negative(2, -2));
  console.log(positive_negative(-2, -2));
  
  /** problem 10
   * JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
   */
   function test37(x) 
   {
     if (x % 3 == 0 || x % 7 == 0) 
     {
       return true;
     } 
     else {
       return false;
     }
   }
   
   console.log(test37(12));
   console.log(test37(14));
   console.log(test37(10));
   console.log(test37(11));