/*
//Chapter #01
//Task1
alert("Good Morning");
//Task2
alert("Error! Please Enter a Valid Password");
//Task3
alert("Welcome to JS Land\n Happy Coding");
//Task4
alert("Welcome to JS Land");
alert("Happy Coding");
//Task5
console.log("Hello...I can run JS from my web browser's console");
alert("Hello...I can run JS from my web browser's console");

//Chapter2
//Task1
username="sonam";
//Task2
myName = "Sonam Khursheed";
document.write(myName);
//Task3
message = "Hellow World";
alert(message);
//Task 4
Name = "sonanm Khursheed";
Age = "22 Years Old";
Course = "Certified Web and Mobile Development";
alert(Name);
alert(Age);
alert(Course);
//Task 5
Var ="Pizza";
//Task 6
email = "sonamkhursheed.096@gmail.com";
alert("MY email adress is "+email);
//Task 7
book = "A smarter way to learn JavaScript";
alert("I am trying to learn" +book);
//Task 8
document.write("Yah! I can write content through Javascript <br>");
//Task 9
//chapter 3
//Task1
Age = 22;
alert("i am" + Age +  "olds");
 //Task 2
 time =14;
 alert("You have visited this sites"+time+ "times <br>");
//Task 3
year = 1998;
document.write("My birth Year is " +year+ "n" );
document.write("Data type of my decleared variable is number <br>");
//Task 4
name = "Hadi Mughal ";
Quantity = 10;
Product = "Shirts";
document.write(name+ "Ordered" + Quantity + Product + "on XYZ Clothing store <br>");

//Chapter 4
//Task 1
a , b , c = 2 , 5 ,8;
name = "sonam";
gender = "Female";
course_type ="software";
age_123 = 22;
Flower = "Rose";
12 ="sk";
product type ="shirt";
__math = "subject";
%name = 'sonam';
/course = "hybrid";

document.write("<h3> Rules For Naming JS Variables <h3> <br>");
document.write("1. Variable names can only contain numbers , $,_ and $myVar_1stVar.<br>");
document.write("2. Variables must begin with a letter , $name or name <br>");
document.write("3. Variable names are case sensitive <br>");
document.write("4. Variable names should not be JS Keyword");

  //Chapter 05
//Task 1
sum = 0;
a=15;
b=10;
sum = a+b;
document.write(sum);
//Task2
sub = a-b;
mult = a*b;
div = a/b;
mod =a%b;
document.write(sub + "<br>");
document.write(mult+ "<br>");
document.write(div+ "<br>");
document.write(mod+ "<br>");
//task3
document.write("The value after variable declearation is undefined <br>");
value = 5 ;
document.write("Intialize Value is"+ value +"<br>");
y = ++value;
document.write("Value after increment is "+ y +"<br>");
value = y+7
document.write("Value after addition  is "+ value +"<br>");
value--;
document.write("Value after decrement  is "+ value +"<br>");
document.write("The reminder is "+ value%3);
//Task4
ticket = 5;
price = 600;
price = ticket*price;
document.write("Total cost to buy ticket  " +ticket+ "is "  +price +"<br>" );
//Task 5
num = 4;
document.write("Table of 4");
document.write(num + "X 1 = "+num*1+"<br>"+ num + "X 2 = "+num*2 +"<br>"+ num + "X 3 = "+num*3 +"<br>"+ num + "X 4 = "+num*4 + "<br>" + num + "X 5 = "+num*1 + "<br>"+ num + "X 6 = "+num*1 +"<br>" +num + "X 7 = "+num*1 +"<br>" +num + "X 8 = "+num*1 +"<br>"+ num + "X 9 = "+num*9 +"<br>" + num + "X 10 = " +num*10 + "<br>" );
//task6
document.write("The Temperature Conversion <br>")
a = 25;
b= 70;
c = (b-32)*5/9;
f= (a*9/5)+32;
document.write(a + "C is" +c+ "<br>");
document.write(b + "F is" +f);
//task7
item_1 = 650;
item_2 = 100;
quantity_item_1 = 3;
Quantity_item_2 = 7;
Shipping_charges= 100;
total = item_1*quantity_item_1 +item_2*Quantity_item_2 +Shipping_charges;
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1:"   +item_1 +"<br>");
document.write("Quantity of item 1:" +item_1 +"<br>");
document.write("Price of item 2:" +item_2 +"<br>");
document.write("Quantity of item 2:" +item_2 +"<br>");
document.write("shipping charges is: " +Shipping_charges +"<br>");
document.write("Total Cost is:" +total +"<br>");
//task8
document.write("<h1>Marksheet</h1> <br>");
marks_tot = 980;
marks_obt = 804;
percentage = (marks_obt*100)/marks_tot;
document.write("The obtained marks is" +marks_obt +"<br>");
document.write("The total marks is" +marks_tot +"<br>");
document.write("The percentage is" +percentage);
//task 9
currency = 104.80*10+ 28*25;
document.write("<h2>Total Currency is </h2>");
document.write("Total currency in PKR is: "+currency+"<br>");
//Taask 10
va = 15;
ar = ((va+5)*10)/2;
document.write("The Arthematic operation" + ar);
//task11
document.write("<h2>Age Calculator </h2>");
current = 2020;
birth = 1998;
year = current - birth;
document.write("Current Year : " + current+"<br>");
document.write("Birth year : " + birth+"<br>");
document.write("Your age is: " + year);
//Task12
document.write("<h2>The Geometrizer</h2>");
radius = 20;
pi = 3.142;
cirfr = 2 *pi*radius;
area = pi*radius*radius;
document.write("Radius of Circle : " + radius+"<br>");
document.write("circumference of circle : " + cirfr+"<br>");
document.write("Area of circle  : " + area+"<br>");
// Chapter 6
//Task1
a = 10;
a++;
c= ++a;
d= a--;
e = --a;
document.write("The value of a is" +a+"<br>");
document.write("...........................................<br>");
document.write("The value of ++a is: "+ b +"<br>");
document.write("New Value of a is :" +b +"<br>");
document.write("The value of a++ is: "+c +"<br>");
document.write("New Value of a is : " +c + "<br>");
document.write("The value of a-- is: "+d+ "<br>");
document.write("New Value of a is :" +d+ "<br>");
document.write("The value of --a is:"+e+ "<br>");
document.write("New Value of a is :"+e+ "<br>");
// 
var a = prompt("ENTER YOUR NAME");
var b = ("Welcome" + ""+  a );
alert(b);

//CHAPTER NO 6-9 TASK 2

var a = 2 , b=1;
var result = --a - --b + ++b + b--;
document.write(result);

//CHAPTER NO 9-11 TASK1

var input = prompt("Enter City Name");

if(input == "karachi"){
  alert("Welcome to City of Lights")
}
else{
  alert("Welcome")
}

//CHAPTER NO 9-11 TASK 2

var gender = prompt("Enter Gender");

if(gender=="Male"){
  alert("Good Morning Sir")
}
else{
  alert("Good Morning Mam")
}

//CHAPTER NO 9-11 TASK 3

var input = prompt("Enter Traffic Signal Color ")

if(input == "Red"){
  alert("Must Stop")
}
else if(input == "Yellow" ){
  alert("Ready move")
}  
else{
  alert("Move Now")
}

// CHAPTER NO 9-11 TASK 4

var fuel = prompt("ENTER REMAINING FUEL");

if(fuel<= 0.25){
  alert("Please refill the fuel")
}
else {
  alert("No Need for refuel")
}

//CHAPTER NO 9-11 TASK 5

var Total= +prompt("Enter Total Marks");
var Marks= +prompt("Enter you Marks");
var percentage = (Marks * 100 / Total );
var a = "Total Marks:" + ""+ Total;
var b = "Marks Obtained:" + ""+ Marks;
var c = "Percentage:" + "" + percentage + "%" ;
if(percentage >=80 ){
  document.write("<br>"+a);
  document.write("<br>"+b);
  document.write ( "<br>"+ c);
  document.write("<br>"+"Grade : A-one ");
  document.write("<br>"+"Remarks : Excellent ");
}
else if(percentage >=70){
  document.write("<br>"+a);
  document.write("<br>"+b);
  document.write ( "<br>"+ c);
  document.write( "<br>" +"Grade : A ");
  document.write( "<br>" +"Remarks :Good ");

}
else if(percentage >=60){
    document.write("<br>"+a);
    document.write("<br>"+b);
    document.write ( "<br>"+ c);
    document.write( "<br>" +"Grade : B ");
    document.write( "<br>" +"Remarks : You need to improve ");
  
}
else{
    document.write("<br>"+a);
    document.write("<br>"+b);
    document.write ( "<br>"+ c);
    document.write( "<br>" +"Grade : Fail ");
    document.write( "<br>" +"Remarks : Sorry ");
}
// CHAPTER 9-11 TASK NO 6

var temp= +prompt("Enter Temperature");

if(temp > 40 ){
  document.write("It is too hot outside");
}
else if(temp > 30){
  document.write("The Weather today is Normal");
  
}
else if (temp >20){
  document.write("Today’s Weather is cool.")
}
else{
  document.write("“OMG! Today’s weather is so Cool")
}

//CHAPTER 9-11 TASK NO 7

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//it will run

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//it will not run

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//condition 2 and  will true..

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//it will run

if (true){
  alert("True");
  }
  if (false){
  alert("False");
  }
// it wil run true

if("car" < "cat"){
  alert("car is smaller than cat");
}
// it will run

//CHAPTER 12-13 TASK NO 1

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

if(num1 > num2){
  alert(num1);
}
else{
  alert(num2);
}

//CHAPTER NO 12-13 TASK NO 2

var password = +prompt("Enter your password");
var pswd = 123654;

if(password == pswd){
  alert("Correct! The password you entered matches the original password");
  
}
else if(password == 0 ){
    alert(" Please enter your password");
}
else{
  alert("Incorrect password");
}

//CHAPTER NO 12-13 TASK NO 3

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
else{
  greeting = "Good evening";
}

//CHAPTER NO 12-13 TASK NO 4

var time = +prompt("Enter time in 24hours format");

if(time >=0000 && time < 1200 ){
  alert("Good Morning");
}
else if( time>=1200 && time< 1700 ){
  alert("Good Afternoon");

}
else if ( time>= 1700 && time< 2100 ){
  alert("Good Evening")
}
else if(time>=2100 && time< 2359 ) {
  alert("Good Night")
}

//  CHAPTER NO 12-13 TASK NO 5

var num = +prompt("Enter number to check positive or negative");

if( num > 0 ){
  alert ("Number is positive")
}
else  if(num<0){
  alert("Numbe is negative")
}
else{
    alert("Number is zero")
}

//CHAPTER 14-16 TASK NO 1

Var studentName = [];

//CHAPTER 14-16 TASK NO 2

var studentName = {};

//CHAPTER 14-16 TASK NO 3

var first = ['sonam', 'hira','rafia',];

//CHAPTER 14-16 TASK NO 4

var first = [1,2,3,4,5,6,7,8];

//CHAPTER 14-16 TASK NO 5

var first = [true, false];

//CHAPTER 14-16 TASK NO 6

var first = [1, 'sonam', 2, 'hira' , true];  

//CHAPTER 14-16 TASK NO 6
//a
var color = ['Red, Yellow','Green'];
document.write(color)
//b
var firstColor = prompt("What color you want to add in first");
var color = [ firstColor, 'Red, Yellow','Green'];
document.write(color)
//c
var lastColor = prompt("What color you want to add in last");
var color = [ 'Red, Yellow','Green',lastColor];
document.write(color)
//d
var color = ['Red, Yellow','Green'];
color.push("Pink","Blue");
document.write(color)
//Chapter 21-25
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
// var message = "Ali and Sami are best friends. They play 
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

//chapter 26-30
 Q1
 var num = 3.45214
 var fnum = Math.floor(num)
 var rnum = Math.round(num)
 var cnum = Math.ceil(num)
 document.write("Number : " + num)
 document.write("<br>")
 document.write("Floor value : " + fnum)
 document.write("<br>")
 document.write("Round off value : " + rnum)
 document.write("<br>")
 document.write("Ceil value : " + cnum)
 Q2
 var num = +prompt("Enter negative number")
 var fnum = Math.floor(num)
 var rnum = Math.round(num)
 var cnum = Math.ceil(num)
 document.write("Number : " + num)
 document.write("<br>")
 document.write("Floor value : " + fnum)
 document.write("<br>")
 document.write("Round off value : " + rnum)
 document.write("<br>")
 document.write("Ceil value : " + cnum)
 Q3
 var a = -27.9
 var b = Math.abs(a)
 document.write("The absolute value of a: " + b)
 Q4
 var rand = 1 + Math.floor(Math.random() * 6);
 document.write("Random dice value: " + rand)
 var rand1 = 1 + Math.floor(Math.random() * 6);
 document.write("<br>")
 document.write("Random dice value: " + rand1)
 Q5
 var answer = prompt("Guess heads or tails?");
 var computerPick = Math.floor(Math.random() * 2);
 if (computerPick == 0) {
     computerPick = "heads";
     document.write(computerPick)
 } else {
     computerPick = "tails";
     document.write(computerPick)
 }
 Q6
 var rand = 1 + Math.floor(Math.random() * 100);
 document.write("The Random number between 1 to 100 is : " + rand)
 Q7
 var weight = prompt("Enter your weight")
 var a = parseInt(weight)
 document.write("The weight of user is: " + a)
 Q8
 var user = +prompt("enter your secrte number")
 var rand = 1 + Math.floor(Math.random() * 10);
 if (rand == user)
     alert("Congratualtions")
 else {
     alert("try again")
 }
//chapter 31-34 
//chapter 35-38
Q1
function dat() {
    var d = new Date();
    document.write(d)
}
dat();
Q2
var fnam = prompt("Enter your first name")
var lnam = prompt("Enter your last name")
function greet() {
    alert(" Hello " + fnam + "  " + lnam)
}
greet();
Q3
var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
function sum() {
    document.write(num1 + num2)
}
sum();
Q4
function cal() {
    var num1 = +prompt("Enter first number")
    var op = prompt("Enter operator")
    var num2 = +prompt("Enter first number")
    if (op == "+") {
        document.write(num1 + num2)
    } else if (op == "-") {
        document.write(num1 - num2)
    } else if (op == "*") {
        document.write(num1 * num2)
    } else if (op == "/") {
        document.write(num1 / num2)
    } else {
        document.write("Invalid operator")
    }
}
cal();
Q5
function sq(num) {
    var sqnum = num * num
    document.write("the square of  " + num + " is " + sqnum)
    return sqnum
}
sq(5);
Q6
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
let n = 4;
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);
Q7
function count() {
    var num1 = +prompt("Enter first number")
    var num2 = +prompt("Enter last  number")
    for (var i = num1; i <= num2; i++) {
        document.write(i + "<br>")
    }
}
count();
Q8
function pythagorean(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
document.write(pythagorean(4, 3));
//Q9
function area(hei, wid) {
    var ar = hei * wid
    return ar
}
document.write(area(4, 6))
Q10
function check_Palindrome(str_entry) {
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    if (cstr === "") {
        document.write(("Nothing found!"));
        return false;
    }
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        if (cstr.length === 1) {
            document.write(("Entry is a palindrome."));
            return true;
        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            document.write(("Entry is not a palindrome."));
            return false;
        }
    }
    document.write(("The entry is a palindrome."));
    return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');
Q11
function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    }
    document.write((capitalize_Words('the quick brown fox')));
    12
    function find_longest_word(str) {
        var array1 = str.match(/\w[a-z]{0,}/gi);
        var result = array1[0];
        for (var x = 1; x < array1.length; x++) {
            if (result.length < array1[x].length) {
                result = array1[x];
            }
        }
        return result;
    }
    document.write((find_longest_word('Web Development Tutorial')));
    Q13
    function char_count(str, letter) {
        var letter_Count = 0;
        for (var position = 0; position < str.length; position++) {
            if (str.charAt(position) == letter) {
                letter_Count += 1;
            }
        }
        return letter_Count;
    }
    document.write((char_count('JSResourceS.com', 'o')));
















//chapter 39-42
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
 //chapter 43-48
// Tasks3
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}
//Task 5
let btnadd =document.querySelector("#add");
let input  =document.querySelector("input");
let btnsub =document.querySelector("#sub");

btnadd.addEventListener('click' , ()=>{
input.value = parseInt(input.value)+1;
});

btnsub.addEventListener('click' , ()=>{
  input.value = parseInt(input.value)-1;
  });
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
 // Chapter 52-57
 function showImg(e){
    var modalimg = document.getElementById('modalimg');
     modalimg.src = e.src;

 }

















