1.Find the culprit

  alert( “I’m JavaScript!);

2.Find the culprit and invoke the alert

  alert(“I’m invoked!”);

3.Explain the below how it works
  alert("I'm JavaScript!");
  alert('Hello') // this line is not having semicolon
  alert(`Wor
  ld`)
  alert(3 +
      1
  + 2); // this is multiple line code and its working

  Output :I'mJavascript
          Hello //Not having semicolon doesn't matter
          Wor
          ld
          6 //It adds all the numbers and gives the sum of it

4.Fix the below to alert Guvi geek
   let admin=9, fname=10.5; 
   fname = "Guvi";
   lname = "geek"
   admin = fname+" "+lname;
   alert( admin ); // "Guvi geek"

5.Fix the below to alert hell0 Guvi geek
   let fname=10.5; 
   fname = "Guvi";
   lname = "geek"
   let name = fname+lname;
   alert( `hello ${name}` );

6.Fix the below to alert sum of two numbers
   let a = prompt("First number?");
   let b = prompt("Second number?");
   alert(parseInt(a) + parseInt(b);

7.Explain Why the Code is blasted and how to diffuse it and get “Diffused”. 
   because at first it compares string 2 with 1
   var a = 2 > 12;
   //Don't touch below this
   if (a) {
  console.log("Code is Blasted")
   }   
  else
  {
  console.log("Diffused") 
  }


8.How to get the success in console.
  let b = (prompt("Enter a number?"));
  a=parseInt(b)
  //Don't modify any code below this
  if (a) {
  console.log( 'OMG it works for any number inc 0' );
  }
  else
  {
  console.log( "Success" );
 }

9.How to get the correct score in console.
  let value =parseInt( prompt('How many runs you scored in this ball'));
  if (value === 4) {
      console.log("You hit a Four");
   } else if (value === 6) {
      console.log("You hit a Six");
  } else {
      console.log("I couldn't figure out");
  }

10.Fix the code to welcome the Employee
   let login = 'Employee';
   let message = (login == 'Employee') ? :
   (login == 'Director') ? 'Greetings' :
   (login == '') ? 'No login' :
   '';
   console.log(message);

  
11.Fix the code to welcome the boss
   let message;
   let close =null;
   //Dont change any code below this 
   if (null || close || undefined )
   {
   message = "Go away";
   }
   else
   {
   message = "welcome";
   }
    console.log(message);

12.Fix the code to welcome the boss
  let message;
  let lock =null;
  //Dont change any code below this
  if (lock && " " || undefined )
  {
  message = "Go away";
  }
  else
  {
  message = "welcome";
  }
  console.log(message);

13.Change the code to print

   3

   2

   1  

   let i = 3;
  while (i) {
  console.log( i-- );
   }

14.Change the code to print 1 to 10 in 4 lines
   
   let i=1
   for(i;i<=10;i++){
   console.log(i);
   }

15.Change the code to print even numbers

   for (let num = 2; num <= 20; num += 2) {
   console.log(num)
   }

16.Change the code to print all the gifts

   let gifts = ["teddy bear", "drone", "doll"];
  for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
   }

17.Fix the code to disarm the bomb.
   let countdown = 100;
    while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }else if(countdown>0){
    console.log("bomb disarmed");
    break;
  }
 }
 
   
18.Whats the msg printed and why? Guess you answer before running it.
  var lemein = "0";
  var lemeout = 0;
  var msg = '';
  if (lemein) {
  msg += 'hi';
  }
  if (lemeout) {
 msg += 'Hello';
  }
   console.log(msg); //hi

  because string ("0") is considered true 

Part 2 : Find the culprits and nail them — debugging javascript loops

1.Write a code to print the numbers in the array
Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);


2.Write a code to print the numbers in the array
Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = new String(numsArr[0]);
 
for (var i = 1; i < 11; i++) {
 new_string += "," +numsArr[i] 
}
console.log(new_string);

3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = new String(numsArr[10]);
 
for (var i = 9; i >= 0; i--) {
 new_string += " "+ numsArr[i] 
}
console.log(new_string);

4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if((i) %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

6.Write a code to add all the numbers in the array
Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);

7.Write a code to add the even numbers only
Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);

8.Write a code to add the even numbers and subract the odd numbers
Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);


9.Write a code to print inner arrays
Output:
Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( numsArr[i])
 
 10.Write a code to print elements in the inner arrays
Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
let a=(numsArr[0]+","+numsArr[1]);
let b=a.split(",").join("");
console.log(b);
}







Part3

1.Fix the code to get the largest of three.

aa = (f,s,t) => {
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

2.Fix the code to Sum of the digits present in the number
let n = "123";
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+= parseInt(n[i])

 }
 return sum;
}

3.Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

4.Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arro[i].charAt(0).toUpperCase()+ arro[i].substr(1));

 }

}
ano(arr);

5.Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);

6.Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const total = num.reduce(sum)
console.log(total);

7.Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

 8.print all odd numbers in an array using IIFE function
 var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();

9.Fix the code to reverse.
(function(str){
 str = str.split("").reverse().join("");
 console.log(str); 
})("abcd")
