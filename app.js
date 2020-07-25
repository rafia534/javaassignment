// ------------------------------// Chapter #1
// // Q1
// alert("good morning");
// // Q2
// alert("Error! please enter a valid password");
// // Q3
// alert("Welcome to JS Land..\n Happy Coding!");
// // Q4
// alert("Prevent this page from creating additional dailogs");
// // Q5
// var a = alert("Hello i can run JS through my web browers console");
// console.log(a);

// ------------------------------------------// Chapter #2
// // Q1
// var myname = "Hira";
// document.write(myname);
// // Q2
// var message = "Hello world";
// document.write(alert(message));
// // Q3
// var name = "Hira Akram";
// document.write(alert(name));
// var age = "i am 22 year old";
// document.write(alert(age));
// var course = "Web and mobile hybrid";
// document.write(alert(course));
// // Q4
// var pizaa = "pizza \n Pizz \n Piz \n Pi \n p"
// document.write(alert(pizaa));
// // Q5
// var email = "My email address is example@example.com"
// document.write(alert(email));
// // Q6
// var book = "I am learning from the book A Smarter way to learn javascript"
// document.write(alert(book));
// // Q7
// var b = "Yah!  I can write HTML content through javascript"
// document.write(b);


// -------------------------------------- Chapter #3
//  Q1
// var age = "22"
// document.write(alert("I am" + age + "old"))

// //  Q2
// var visit = "14"
// document.write(alert("you have visited this site " + age + "times"))
//     //  Q3
// var year = "1997"
// document.write("My birthday year is" + year + "\n " + typeof(year))

//------------------------------------CHAPTER NO 4 
//Q1
// var a=2, b=9 ,c=1;

// //Q2

// var myname;
// var myName;
// var _myName;
// var $myName;
// //Q2
// document.write("<h1>Rules of writing js Variable</h1>")
// var a = 'Variable names only contain  number $ and_ ,for example $myname.';
// var b = 'variables must begin with a letter,$ or_ ,for example $ _name  or name.';
// var c = 'Variable names are case sensitive.';
// var d = 'Variable should not be JS keywords.';
// var e = '<br>'
// var k = (a);
// var f = (e+b);
// var o =(e+ c);
// var g = (e+d);
// document.write("<br>"+k )
// document.write("<br>"+f )
// document.write("<br>"+o )
// document.write("<br>"+g )

//------------------------------------CHAPTER NO 5
//Q1
// var a = +prompt("Enter your 1st value for addition");
// var b = +prompt("Enter your 2nd value for addition");
// var q = (a + b );
// var j = ("sum of"+ " "+ a +" "+ "and"+" "+ b +" "+ "is" +" "+ q)
// document.write("<br>"+j)
// //Q2
// var a = +prompt("Enter your 1st value for subtraction");
// var b = +prompt("Enter your 2nd value for subtraction");
// var q = (a - b );
// var j = ( "<br> sum of"+ " "+ a +" "+ "and"+" "+ b +" "+ "is" +" "+ q)
// document.write("<br>"+j)

// var a = +prompt("Enter your 1st value for Multiplication");
// var b = +prompt("Enter your 2nd value for Multiplication");
// var q = (a * b );
// var j = ( "<br> sum of"+ " "+ a +" "+ "and"+" "+ b +" "+ "is" +" "+ q)
// document.write("<br>"+j)

// var a = +prompt("Enter your 1st value for divide");
// var b = +prompt("Enter your 2nd value for divide");
// var q = (a / b );
// var j = ( "<br> sum of"+ " "+ a +" "+ "and"+" "+ b +" "+ "is" +" "+ q)
// document.write("<br>"+j)

// var a = +prompt("Enter your value for modulus");
// var b = +prompt("Enter your second value  for modulus");
// var q = a % b;
// var j = ("<br> Modulus of"+ " "+ a +" "+ "and"+" "+ b +" "+ "is" +" "+ q)
// document.write("<br>"+j);

// //Q3
// var s = '<br><br><br> Value after variable decleration is 5'
// var x = 5
//  var t = '<br> Intial value :'+"  " + x ;
//  var i = ++x ;
//  var h ="<br>Value after increment is :"+"  " + i
//  var o = 7 + i
//  var x = "<br> value after addition is :"+" "+ o
//  var k = --o ;
//  var d = "<br> value after decrement is :" +  " "+ k 
//  var f = k % 3 ;
//  var i = " <br> the remaider is :" + " "+ f
//  document.write("<br>"+s);
//  document.write("<br>"+t);
//  document.write("<br>"+h);
//  document.write("<br>"+x);
//  document.write("<br>"+d);
//  document.write("<br>"+i);

// //Q4
// var movieticket = 600 
// var tickets = 600 * 5 ;
// var x = "<br><br> Total cost to buy 5 tickets is" +" " + tickets+"PKR"
// document.write("<br>"+x);

// //Q5
// var x= 4 ;
// for (i=1 ; i<=10 ;i++) {
//   document.write ( '<br><br>' + x + "x" + i + "=" + x * i );
// }

// //Q6

// var Total= +prompt("Enter Total Marks");
// var Marks= +prompt("Enter you Marks");
// var percentage = (Marks * 100 / Total );
// var a = "Total Marks:" + ""+ Total;
// var b = "Marks Obtained:" + ""+ Marks;
// var c = "Percentage:" + "" + percentage + "%" ;
// document.write("<br>"+a);
// document.write("<br>"+b);
// document.write ( "<br>"+ c);

// ---------------------------------------- Chapter #6-9
//  Q1
// var a = 10;
// ++a
// document.write("The value of ++a is" + a)
// document.write("<br>")
// document.write("now the value of a is " + a)
// document.write("<br>")
// document.write("<br>")
// document.write("The value of a++ is" + a)
// document.write("<br>")
// a++
// document.write("now the value of a is " + a)
// document.write("<br>")
// document.write("<br>")
//     --a
// document.write("The value of --a is" + a)
// document.write("<br>")
// document.write("now the value of a is " + a)
// document.write("<br>")
//     //  Q2
// var name = prompt("Enter your name")
// document.write(name)
//Q3
// var a = 2 , b=1;
// var result = --a - --b + ++b + b--;
// document.write(result);
// ---------------------------------------- Chapter #9-11
//  Q1

// var input = prompt("Enter City Name");

// if(input == "karachi"){
//   alert("Welcome to City of Lights")
// }
// else{
//   alert("Welcome")
// }

// //  Q2

// var gender = prompt("Enter Gender");

// if(gender=="Male"){
//   alert("Good Morning Sir")
// }
// else{
//   alert("Good Morning Mam")
// }

// //  Q3

// var input = prompt("Enter Traffic Signal Color ")

// if(input == "Red"){
//   alert("Must Stop")
// }
// else if(input == "Yellow" ){
//   alert("Ready move")
// }  
// else{
//   alert("Move Now")
// }

// //  Q4

// var fuel = prompt("ENTER REMAINING FUEL");

// if(fuel<= 0.25){
//   alert("Please refill the fuel")
// }
// else {
//   alert("No Need for refuel")
// }

// //  Q5

// var Total= +prompt("Enter Total Marks");
// var Marks= +prompt("Enter you Marks");
// var percentage = (Marks * 100 / Total );
// var a = "Total Marks:" + ""+ Total;
// var b = "Marks Obtained:" + ""+ Marks;
// var c = "Percentage:" + "" + percentage + "%" ;
// if(percentage >=80 ){
//   document.write("<br>"+a);
//   document.write("<br>"+b);
//   document.write ( "<br>"+ c);
//   document.write("<br>"+"Grade : A-one ");
//   document.write("<br>"+"Remarks : Excellent ");
// }
// else if(percentage >=70){
//   document.write("<br>"+a);
//   document.write("<br>"+b);
//   document.write ( "<br>"+ c);
//   document.write( "<br>" +"Grade : A ");
//   document.write( "<br>" +"Remarks :Good ");

// }
// else if(percentage >=60){
//     document.write("<br>"+a);
//     document.write("<br>"+b);
//     document.write ( "<br>"+ c);
//     document.write( "<br>" +"Grade : B ");
//     document.write( "<br>" +"Remarks : You need to improve ");
  
// }
// else{
//     document.write("<br>"+a);
//     document.write("<br>"+b);
//     document.write ( "<br>"+ c);
//     document.write( "<br>" +"Grade : Fail ");
//     document.write( "<br>" +"Remarks : Sorry ");
// }
// //  Q6

// var temp= +prompt("Enter Temperature");

// if(temp > 40 ){
//   document.write("It is too hot outside");
// }
// else if(temp > 30){
//   document.write("The Weather today is Normal");
  
// }
// else if (temp >20){
//   document.write("Today’s Weather is cool.")
// }
// else{
//   document.write("“OMG! Today’s weather is so Cool")
// }

// //  Q7

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //it will run

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //it will not run

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// //condition 2 and  will true..

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //it will run

// if (true){
//   alert("True");
//   }
//   if (false){
//   alert("False");
//   }
// // it wil run true

// if("car" < "cat"){
//   alert("car is smaller than cat");
// }
// it will run

// ---------------------------------------- Chapter #12-13
// //  Q1
// var time = +prompt("Enter time in 24hours format");

// if(time >=0000 && time < 1200 ){
//   alert("Good Morning");
// }
// else if( time>=1200 && time< 1700 ){
//   alert("Good Afternoon");

// }
// else if ( time>= 1700 && time< 2100 ){
//   alert("Good Evening")
// }
// else if(time>=2100 && time< 2359 ) {
//   alert("Good Night")
// }

// // //  Q2

// var num = +prompt("Enter number to check positive or negative");

// if( num > 0 ){
//   alert ("Number is positive")
// }
// else  if(num<0){
//   alert("Numbe is negative")
// }
// else{
//     alert("Number is zero")
// }
//CHAPTER 14-16 TASK NO 1



// ---------------------------------------- Chapter #14-16
// //  Q1

// var studentName = {};

// // //  Q2

// var first = ['Hira', 'rafia','rameen',];

// // //  Q3

// var first = [1,2,3,4,5,6,7,8];

// // //  Q4

// var first = [true, false];

// // //  Q5

// var first = [1, 'najam', 2, 'Nazar' , true];  

// // //  Q6
// //a
// var color = ['Red, Yellow','Green'];
// document.write(color)

// //b

// var firstColor = prompt("What color you want to add in first");
// var color = [ firstColor, 'Red, Yellow','Green'];
// document.write(color)

// //c

// var lastColor = prompt("What color you want to add in last");
// var color = [ 'Red, Yellow','Green',lastColor];
// document.write(color)

// //d
// var color = ['Red, Yellow','Green'];
// color.push("Pink","Blue");
// document.write(color)

//---------------------------------------  Chapter #21 - 25
//  Q1
// var a = prompt("Enter your first name")
// var b = prompt("Enter your last name")
// alert(a + " " + b + " " + "Good Morning");
// Q2
// var c = prompt("Enter your favourite moble phone")
// var b = document.write("My Favourite phone is: " + c)
// document.write("<br>")
// document.write("String length is " + c.length);
// Q3
// var a = "Pakistani"
// document.write("String:" + a)
// document.write("<br>")
// document.write("Index of N is: " + a.indexOf("n"))
// Q4
// var a = "Hello World"
// document.write("String:" + a)
// document.write("<br>")
// document.write("Index of N is: " + a.lastIndexOf("l"))
//Q5
// var a = "Pakistani"
// document.write("String:" + a)
// document.write("<br>")
// document.write("Index of N is: " + a.charAt(8))
//Q6
// var a = "Hyedrabad"
// var b = a.replace("Hyedra", "Islama");
// document.write(b)
// Q7
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var b = message.replace(/and/g, "&")
// document.write(b)
// Q8
// var a = 345
// var b = a.toString();
// document.write(b)
// document.write("<br>")
// document.write(typeof(b))
// Q9
// var a = "peanet"
// document.write(a)
// var b = a.toUpperCase();
// document.write("<br>")
// document.write(b)
// Q10
// var a = prompt("Enter your name")
// var b = a[0].toUpperCase() + a.slice(1);
// document.write(b)
//Q11
// var a = 345.77
// var b = a.toString();
// var c = b.replace(".", "")
// document.write(c)
// document.write("<br>")
// document.write(typeof(b))
//Q14
// var bakery = ["cake", "pestri", "biscuit"]
// var result = prompt("Enter a name")
// result = result.toLowerCase();

// for (a = 0; a < bakery.length; a++) {
//     if (result == bakery[a]) {

//         alert("found");

//     } else {
//         alert("nf")
//     }
//     break;
// }
// Q17
// var a = prompt("Enter your city name")
// var b = a.charAt(a.length - 1)
// document.write(b)

// Q18
// var text = "the quick brown fox jumps over the lazy dog"
// var count = (text.match(/the/g) || []).length;
// document.write(count)

// Q16
// var myStr = "karachi university.";
// var strArray = myStr.split(" ");
// for (var i = 0; i < strArray.length; i++) {
//     document.write("</br>" + strArray[i] + "</br>");
// }

//---------------------------------------------- Chapter #26 - 30
// Q1
// var num = 3.45214
// var fnum = Math.floor(num)
// var rnum = Math.round(num)
// var cnum = Math.ceil(num)
// document.write("Number : " + num)
// document.write("<br>")
// document.write("Floor value : " + fnum)
// document.write("<br>")
// document.write("Round off value : " + rnum)
// document.write("<br>")
// document.write("Ceil value : " + cnum)
// Q2
// var num = +prompt("Enter negative number")
// var fnum = Math.floor(num)
// var rnum = Math.round(num)
// var cnum = Math.ceil(num)
// document.write("Number : " + num)
// document.write("<br>")
// document.write("Floor value : " + fnum)
// document.write("<br>")
// document.write("Round off value : " + rnum)
// document.write("<br>")
// document.write("Ceil value : " + cnum)
// Q3
// var a = -27.9
// var b = Math.abs(a)
// document.write("The absolute value of a: " + b)
// Q4
// var rand = 1 + Math.floor(Math.random() * 6);
// document.write("Random dice value: " + rand)
// var rand1 = 1 + Math.floor(Math.random() * 6);
// document.write("<br>")
// document.write("Random dice value: " + rand1)

// Q5
// var answer = prompt("Guess heads or tails?");
// var computerPick = Math.floor(Math.random() * 2);
// if (computerPick == 0) {
//     computerPick = "heads";
//     document.write(computerPick)
// } else {
//     computerPick = "tails";
//     document.write(computerPick)
// }
// Q6
// var rand = 1 + Math.floor(Math.random() * 100);
// document.write("The Random number between 1 to 100 is : " + rand)
// Q7
// var weight = prompt("Enter your weight")
// var a = parseInt(weight)
// document.write("The weight of user is: " + a)
// Q8
// var user = +prompt("enter your secrte number")
// var rand = 1 + Math.floor(Math.random() * 10);
// if (rand == user)
//     alert("Congratualtions")
// else {
//     alert("try again")
// }

// ---------------------------------------------Chapter #35 - 38
// Q1
// function dat() {
//     var d = new Date();
//     document.write(d)
// }
// dat();
// Q2
// var fnam = prompt("Enter your first name")
// var lnam = prompt("Enter your last name")

// function greet() {
//     alert(" Hello " + fnam + "  " + lnam)
// }
// greet();

// Q3
// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")

// function sum() {
//     document.write(num1 + num2)
// }
// sum();
// Q4

// function cal() {
//     var num1 = +prompt("Enter first number")
//     var op = prompt("Enter operator")
//     var num2 = +prompt("Enter first number")
//     if (op == "+") {
//         document.write(num1 + num2)
//     } else if (op == "-") {
//         document.write(num1 - num2)
//     } else if (op == "*") {
//         document.write(num1 * num2)
//     } else if (op == "/") {
//         document.write(num1 / num2)
//     } else {
//         document.write("Invalid operator")
//     }
// }
// cal();
// Q5
// function sq(num) {
//     var sqnum = num * num
//     document.write("the square of  " + num + " is " + sqnum)
//     return sqnum
// }
// sq(5);
// Q6
// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// let n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);
// Q7
// function count() {
//     var num1 = +prompt("Enter first number")
//     var num2 = +prompt("Enter last  number")

//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>")
//     }
// }
// count();
// Q8
// function pythagorean(sideA, sideB) {
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }

// document.write(pythagorean(4, 3));
// //Q9
// function area(hei, wid) {
//     var ar = hei * wid
//     return ar
// }
// document.write(area(4, 6))
// Q10
// function check_Palindrome(str_entry) {

//     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     var ccount = 0;
//     if (cstr === "") {
//         document.write(("Nothing found!"));
//         return false;
//     }
//     if ((cstr.length) % 2 === 0) {
//         ccount = (cstr.length) / 2;
//     } else {

//         if (cstr.length === 1) {
//             document.write(("Entry is a palindrome."));
//             return true;
//         } else {
//             ccount = (cstr.length - 1) / 2;
//         }
//     }
//     for (var x = 0; x < ccount; x++) {

//         if (cstr[x] != cstr.slice(-1 - x)[0]) {
//             document.write(("Entry is not a palindrome."));
//             return false;
//         }
//     }
//     document.write(("The entry is a palindrome."));
//     return true;
// }
// check_Palindrome('madam');
// check_Palindrome('nurses run');
// check_Palindrome('fox');
// Q11
// function capitalize_Words(str) {
//     return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// }
// document.write((capitalize_Words('the quick brown fox')));
//Q12
// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// document.write((find_longest_word('Web Development Tutorial')));
// Q13
// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }

// document.write((char_count('JSResourceS.com', 'o')));

//-------------------------Chapter 38 to 42---------------------
//Q1
// function power(a, b) {
//     return a ** b
// }
// document.write(power(5, 2))
// q2

// function leapyear(year) {
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// document.write((leapyear(2016)) + "<br>");
// document.write((leapyear(100)));

// // q3

// function taingle(a, b, c) {
//     var d = a * b * c
//     return Math.pow(d, 2)
// }
// document.write(taingle("3", "4", "5"))

//Q4
// function perc(a, b, c) {
//     var d = (a + b + c) / 300 * 100
//     return b
// }

// document.write(perc(50, 70, 90))
//Q6
// function disemvowel(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     return str.split('').filter(function(el) {
//         return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
// }

// document.write(disemvowel("Hello Hira"));
//Q8
// function meter(a) {
//     return a * 1000
// }
// document.write(meter(300) + "   meter " + "<br>");

// function feet(b) {
//     return b * 3280.84
// }
// document.write(feet(300) + "  feet" + "<br>");

// function inc(c) {
//     return c * 39370.1
// }
// document.write(inc(300) + "  inches" + "<br>");

//-------------------------Chapter 43 to 48---------------------
//Q1
//on html page
// Q2
// function myFunction() {
//     document.getElementById("myImg").src = "drop4.jpg";
// }
// // Q3
// function myFunction() {
//     var a = document.getElementById("myImg").src = "drop4.jpg";
//     alert(a);
// }

// function myFunction2() {
//     var a = document.getElementById("myImg").src = "drop4.jpg";
//     alert(a);
// }
//-------------------------Chapter 49 to 52---------------------
//Q1
// function getval(){
//     var show1 = document.getElementById("lab1").value;
//     document.getElementById("name").innerHTML=show1;
//     var show2 = document.getElementById("lab2").value;
//     document.getElementById("Fname").innerHTML=show2;
//     var show3 = document.getElementById("lab3").value;
//     document.getElementById("Cname").innerHTML=show3;
// }
//Q2
function read(){
    var a = document.getElementById("re");
    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid nesciunt eum fugiat recusandae praese Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid nesciunt eum fugiat recusandae praese "
    a.innerHTML= text;
}