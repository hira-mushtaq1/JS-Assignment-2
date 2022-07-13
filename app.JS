//Changing Case:
/* 1. Write a program that takes user input. Convert and show the input
in capital letters. */

var char=prompt().toUpperCase();  // convert all letters to uppercase
document.write(char+"<br>")

/*2. Write a program that takes user input. Convert and show the
input in title case.*/
// if usr gives one word string
var input_1= prompt("Enter your string");
var first_Letter=input_1.slice(0,1).toUpperCase()
var restof_String=input_1.slice(1,input_1.length);
document.write(first_Letter+restof_String+"<br>")
// if usr gives more than one word string
var input= prompt("Enter your string");
var arr=input.split(" ");
var finalString= "";
for(var i=0;i<arr.length;i++){
    var firstLetter=arr[i].slice(0,1);
    var restofString=arr[i].slice(1,input.length);
    firstLetter=firstLetter.toUpperCase();
    restofString=restofString.toLowerCase();
    finalString=finalString+(firstLetter+restofString+" ")
}
document.write(finalString+"<br>")


//Strings: measuring length and extracting parts
/* 1. Write a program to take a user input about his favorite mobile
phone model. Find and display the length of user input in your
browser.*/

var str=prompt("Your Favorite Mobile Phone Model ");
document.write(str.length+"<br>");

 /* 2. Write a program to display the last character of a user input.*/
var stng= prompt("Enter your string/character");
var lastCharOfstng=stng.slice(-1); 
document.write(lastCharOfstng+"<br>");


//Strings: finding segments
/*1. Write a program to find the index of letter “n” in the word “Pakistani”
and display the result in your browser.*/

var strn= "Pakistani";
document.write(strn.lastIndexOf("n")+"<br>")


/* 2. Write a program to take user input and store username in a
variable. If the username contains any special symbol among (@ . ,
!), prompt the user to enter a valid username. */

var usrInp= prompt("Enter your name: ");
var splChr1=usrInp.indexOf("@");
var splChr2=usrInp.indexOf(".");
var splChr3=usrInp.indexOf("!");
if(splChr1!==-1 || splChr2!==-1 ||  splChr2!==-1 ){
  alert("Enter a valid username! ")
}
else{
  document.write(usrInp+" is valid "+"<br>");
}


/*3. You have a string “The quick brown fox jumps over the lazy
dog”. Write a program to count number of occurrences of word “the”
in given string.*/
var str= "The quick brown fox jumps over the lazy dog"
var occurrence=0;
for(i=0; i<str.length; i++){
  var sel=str.slice(i,i+3).toLowerCase();
  if(sel==="the"){
    occurrence++;
  }
}
document.write("The occurance of the is: "+occurrence+"<br>")




// Strings: finding a character at a location
/*1. Write a program to find the character at 3 rd index in the word
“Pakistani” and display the result in your browser.*/

var n= "Pakistan";
document.write(n[3]+"<br>")


// Strings: replacing characters
/*1. Write a program to replace the “Hyder” to “Islam” in the word
“Hyderabad” and display the result in your browser.*/

var m="Hyderabad";
var rep= m.replace("Hyder", "Islam");
document.write(rep+"<br>")



/* 2. Write a program to replace all occurrences of “and” in the string
with “&” and display the result in your browser.  */
var message = "Ali and Sami are best friends. They play cricket and football together";
var new_rep=message.replace(/and/g, "&");
document.write(new_rep+"<br>");


// Rounding numbers
/*1. Write a program that takes a positive integer from user & display
the following in your browser.
a. number (example number: 3.45214)
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/

var num= parseFloat(prompt("enter positive number"));
document.write("The userInput is:   "+num+"<br> The rounded value is:   "+Math.round(num)+"<br>  The floor value of "+num+ " is:   "+Math.floor(num)+ "<br> The ceil value of "+num+ " is:   " +Math.ceil(num)+"<br>");

/*2. Write a program that takes a negative floating point number
from user & display the following in your browser.
a. Number (example number: -2.678 )
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var num_1=parseFloat(prompt("Enter any neg number"));
document.write(num_1+"<br>");
document.write("The userInput is:   "+num_1+"<br> The rounded value is:   "+Math.round(num_1)+"<br>  The floor value of "+num_1+ " is:   "+Math.floor(num_1)+ "<br> The ceil value of "+num_1+ " is:   " +Math.ceil(num_1)+"<br>");


/* Generating random numbers
1. Write a program that simulates a dice using random() method of JS
Math class. Display the value of dice in your browser.  */

var ran_dice= Math.random();
document.write(ran_dice+"<br>");

/* 2. Write a program that simulates a coin toss using random() method
of JS Math class. Display the value of coin in your browser.
2 = Heads and 1 = Tails */

var toss = Math.round(Math.random())
document.write(toss+"<br>")

/* 3. Write a program that stores a random secret number from 1 to 10 in a
variable. Ask the user to input a number between 1 and 10. If the user input
equals the secret number, congratulate the user. */

var randomSecretNum= Math.ceil(Math.random()*10);
var userInp=parseInt(prompt("Enter your number; "));
if(userInp==randomSecretNum){
  alert("Congratulation! you guessed the secret number ");
}

/* Converting strings to integers and decimals
1. Write a program that asks the user about his weight. Parse the user
input and display his weight in your browser.
Possible user inputs can be: */
//a. 50
var user_wgt=parseInt(prompt("Enter you weight"));
document.write(user_wgt+"<br>")
//b. 50kgs
var user_wgt=parseInt(prompt("Enter you weight"));
document.write(user_wgt+"Kgs <br>")
//c. 50.2kgs
var user_wgt=parseFloat(prompt("Enter you weight"));
document.write(user_wgt+"Kgs <br>")
//d. 50.2kilograms
var user_wgt=parseFloat(prompt("Enter you weight"));
document.write(user_wgt+"Kilograms <br>")

/* Converting strings to numbers, numbers to strings
1. Write a program that converts a string “472” to a number 472.
Display the values & types in your browser.
Hint: (use typeof()) */
var x= "472";
x=+x;
document.write("vale of x is: "+x+ "<br> Type of x is: "+typeof(x)+"<br>");


/* 2. Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */

var new_num=parseInt(prompt("Enter your number"));
new_num = new_num.toString()
document.write("Our string is: "+new_num+"<br> The type of "+new_num+ " is "+ typeof(new_num)+"<br>")


/* Controlling the length of decimals
1. Write a program to control the length of decimals to 2.
var percentage = 30 / 45 * 100; -> 66.66666666666666 */

var percentage = (30 / 45) * 100; // 66.66666666666666
percentage=Math.round(percentage);
document.write(percentage+"<br>");


//===============================================================================

// Chapter: 31-34 DATE METHODS
/*Q1  Write a program that displays current date and time in
your browser.  */
document.write("<h3>For Current Date and Time</h3>");
var a = new Date();
document.write(a+"<br>");

/* 2. Write a program that alerts the current month in words.
For example December. */
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var  mnth_name = month[a.getMonth()];
alert(mnth_name)

/*3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */
var day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var nxt=day[a.getDay()];
document.write(nxt.slice(0,3))

/* 4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */

var day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var nxt=day[ a.getDay()];
if(nxt==="Saturday" || nxt==="Sunday"){
    alert("Its a fun day")
}
else{
    alert("Its not a weekend")
}


/* 5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */

if(a.getDate()<16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}

/* 6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */
var a= new Date() 
var newDate= new Date('1-1-1970');
newDate.setHours(0,0,0,0);
var mint=(a.getTime()-newDate.getTime())/(1000*60);
document.write("Current Date"+a+"<br> Elapsed Milliseconds since Januray 1,1970: "+(a.getTime()-newDate.getTime())+"<br> Elapsed Minutes since Januray 1,1970: "+mint)

/* 7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.*/

var hors= a.toLocaleString('en-US', {hour:'numeric', hour12: true})
var chk=hors.indexOf("PM");
if(chk===-1){
  alert("It's AM")

}
else{
  alert("It's PM")
}

/*8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

var lstdte=new Date('12-31-2020');
document.write("The last day of the last month of 2020 is "+lstdte+"<br>")


/* 9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/
var rmdn=new Date('6-18-2015');
var  passedtme=((a.getTime()-rmdn.getTime())/(1000*60*60*24));
document.write(passedtme+" days have passed since 1st ramadan, 2015 <br>")

/* 10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.*/
var rfdate= new Date('12-05-2015');
rfdate.setHours(0,0,0,0);
document.write("On reference date "+rfdate+"<br>"+rfdate.getTime()/(1000*60)+"seconds has passed since the beginning of 2015<br>");


/* 11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.*/

var crntdate1= new Date();
var crntdate2= new Date();
crntdate1.getHours();
var chngedhours=crntdate2.setHours(crntdate1.getHours()-1);
document.write("Current date: "+crntdate1+ "<br> 1 hour ago, it was "+crntdate2+"<br>")


/* 12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */

var crntdate3= new Date();
var crntdate4= new Date();
// crntdate4.setFullYear(crntdate3.getFullYear()-100);
document.write("Current Date "+ crntdate3+ "<br> 100 Years back, it was"+crntdate4.setFullYear(crntdate3.getFullYear()-100)+"<br>")

/* 13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser.*/
var usrage=parseInt(prompt("Enter your age in Years"));
var brthyear=crntdate3.getFullYear()-usrage;
document.write("Your age is "+ usrage+"<br> Your birth year is: "+brthyear+"<br>")

/* 4. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

var cstmrname= prompt("Enter your name");
var mnth= prompt("Enter  the billing month");
var units= parseInt(prompt("Enter the unit"));
var charPerUnit=parseInt(prompt("Enter the charges per unit"));
var netAmount=units*charPerUnit;
var latepay= 350;
var aftrdue= (units*charPerUnit)+latepay;
document.write("Customer name: "+cstmrname+ "<br> Month"+mnth+"<br> Number of Units: "+units+"<br> Charges per Unit: "+charPerUnit+"<br> Net Amount Payable: "+netAmount+"<br> Late payment subcharges: "+latepay+"<br> Gross amount payable(after Due Date: "+aftrdue+"<br>")


//============================================================================

// FUNCTION

/*1. Write a function that displays current date & time in your
browser.*/

function date(){
    var j= new Date()
    document.write(j+"<br>");
}
date();

/* 2. Write a function that takes first & last name and then it
greets the user using his full name. */

function xyz(first_name, lastname){
    document.write("Welcome: "+first_name+lastname+"<br>")
}
xyz("Hira", "Mushtaq")

/* 3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

function sum(){
    var m= parseInt(prompt("Enter 1st numer"));
    var n= parseInt(prompt("Enter 2nd numer"));
    return m+n;
}
var cal= sum();
document.write(cal+"<br>");

/* 4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

function caltr(num1,num2,operator){
    if(operator==="+"){
      document.write("Addition:" +num1+num2+"<br>")
      }
        else if(operator==="-"){
          document.write("Subtraction:" +num1-num2+"<br>") 
        }
        else if(operator==="/"){
          document.write("Division: " +num2/num1+"<br>")}
        else if(operator==="*"){
          document.write("Multiplication: " +num1*num2+"<br>")
    }
 
}
caltr(2,4,"+");
caltr(2,4,"-");
caltr(2,4,"*");
caltr(2,4,"/");

/* 5. Write a function that squares its argument.*/

function sqr(y){
    document.write(y*y+"<br>")
}
sqr(3)

// 6. Factorial of a number 
// factorial(5);

function factorial(n){
  var answer = 1;
  if (n == 0 || n == 1){
    document.write(1+ "<br>")
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    document.write(answer+"<br>")
  }  
}
factorial(5)


/* 7. Write a function that take start and end number as inputs
& display counting in your browser. */

function counting(a,b){
    for(var i=a;i<=b; i++){
        document.write(i+"<br>")
}
}
counting(1,10)

/* 8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/


function Hypotenous(base, perpendicular){
  var hyp= square(base)+square(perpendicular);
  function square(numb){
    return numb**2
  } 
  document.write("Hypotenous: "+hyp+"<br>")
}
Hypotenous(2,4)

/* 9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables*/

function areOfRectangle(width,height){
  var area = width*height  // 2*4=8
  document.write("Area of Rectangle: "+area+"<br>")
}
//argument as a value
areOfRectangle(2,4);
// argument as a variable
var wdt= parseInt(prompt("Enter the value of Width"))
var hgt= parseInt(prompt("Enter the value of Height"))
areOfRectangle(wdt,hgt);

/* 10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam*/

function palindrome(newstring){
  var lent =newstring.length;
  for(var i=0; i<lent/2; i++){
    if(newstring[i]!==newstring[lent-1-i]){
      document.write("It's not a palindrome"+"<br>")
    }
  }
  document.write("Its a palindrome"+"<br>")

}
var newstring=prompt("Enter your string");
palindrome(newstring);

/* 11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/
function titleCase(string){
  var sent=string.toLowerCase().split(" ");
  for(var i=0;i<sent.length; i++){
    sent[i]=sent[i][0].toUpperCase()+sent[i].slice(1);
  }
  return sent.join(" ");

}
var titleCased= titleCase('the quick brown fox');
document.write("The original string: 'the quick brown fox' "+"<br> The TitledCase String: "+titleCased);

/* 12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

function longestWordCheck(string){
  var strSplit=string.split(' ');
  var longestWord=0;
  var word;
  for(var i=0; i<strSplit.length; i++){
    if(strSplit[i].length>longestWord){
      longestWord=strSplit[i].length;
      word=strSplit[i]
    }
  }
  document.write("The longest Word in the string is: "+word+"<br>")
}
longestWordCheck("Web Development Tutorial")

/* '
13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of  occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'*/

function occurance(string,char){
  var occurance=0;
  for(var i=0;i<string.length;i++){
    if(char===string[i]){
      occurance+=1;
    }
  }
  document.write("The character "+char+" occurs "+occurance+" times in the string"+"<br>");
}
occurance('JSResourceS.com', 'o');

/* 14. The Geometrizer:-
 Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN". */

function circumference(radius){
  document.write("The circumference is "+Math.round((2*Math.PI*radius))+"<br>");
}
circumference(4);
document.write("<h3>Calclator Area</h3>");
function calcArea(radius){
  document.write("The area is "+Math.round(((Math.PI)*(radius**2)))+"<br>");
}
 
calcArea(4);


