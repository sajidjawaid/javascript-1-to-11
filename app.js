// Chapter no 1

// // qno1
// alert("Welcome to our website!");
// // qno2
// alert("Error! Please enter a valid password");
// // qno3
// alert("Welcome to javascript land  Happy Coding");
// // qno4
// alert("Welcome to javascript land");
// // qno5
// alert("Welcome to javascript land");
// console.log(
//   "This message is generated through the browser's developer console."
// );

// // chapter no 2

// // qno 1
// var username;
// // qno 2
// var myName = "Sajid Jawed";

// // qno 3
// var message;
// message = "Hello World";
// alert(message);

// // qno 4
// var studentName = "sajid";
// var studentAge = 30;
// var studentGrade = "A";
// var studentInfo =
//   "Name: " + studentName + "\nAge: " + studentAge + "\nGrade: " + studentGrade;
// alert(studentInfo);

// // qno 5

// var pizza = "pizza";
// alert(
//   pizza +
//     " " +
//     pizza.substring(0, 4) +
//     " " +
//     pizza.substring(0, 3) +
//     " " +
//     pizza.substring(0, 2) +
//     " " +
//     pizza.substring(0, 1)
// );

// // qno 6

// var email = "sajidjaved43@gmail.com";
// alert("My email address is: " + email);

// // qno 7
// var book = "A smarter way to learn JavaScript";
// alert(book);

// // qno 8

// document.write("hello i can write html content through javascript");

// //qno 9

// var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(specialString);
// document.write(specialString);

// // // // // // // // chapter 3

// // qno 1

// var age = 30;
// alert("Your age is: " + age)

// // qno 2

// var visitCount = 0;
// if (localStorage.getItem("visitCount")) {
//   visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
// } else {
//   visitCount = 1;
// }
// localStorage.setItem("visitCount", visitCount);
// document.write("You have visited this site " + visitCount + " times.");

// // qno 3

// var birthYear = 1994;
// document.write("My birth year is " + birthYear);

// // qno 4

// var visitorName = "sajid";
// var productTitle = "T-shirt";
// var quantity = 5;

// document.write(
//   visitorName +
//     " ordered " +
//     quantity +
//     " " +
//     productTitle +
//     "(s) on XYZ Clothing store."
// );

// // chapter 4

// // qno 1

// var var1, var2, var3;

// // qno 2

// var legalName = "$myVariable";
// var legalName2 = "my_variable";
// var legalName3 = "myVariable";
// var legalName4 = "myVariable1";
// var legalName5 = "_myVariable";

// // qno 3

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write(
//   "<p>Variable names can only contain letters, digits, underscores, and dollar signs. For example: $my_1stVariable</p>"
// );
// document.write(
//   "<p>Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name</p>"
// );
// document.write("<p>Variable names are case-sensitive</p>");
// document.write("<p>Variable names should not be JS reserved words</p>");

// // // // // // // // // // // chapter  5

// // qno 1

// var num1 = 10;
// var num2 = 5;

// var sum = num1 + num2;

// document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

// // qno 2

// var num1 = 10;
// var num2 = 5;

// var difference = num1 - num2;
// var product = num1 * num2;
// var quotient = num1 / num2;
// var remainder = num1 % num2;

// document.write("Subtraction result: " + difference + "<br>");
// document.write("Multiplication result: " + product + "<br>");
// document.write("Division result: " + quotient + "<br>");
// document.write("Modulus result: " + remainder);

// // qno 3

// var num;
// document.write("Value after variable declaration is: " + num + "<br>");
// num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment is: " + num + "<br>");
// num += 7;
// document.write("Value after addition is: " + num + "<br>");
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// var remainder = num % 3;
// document.write("The remainder is: " + remainder);

// // qno 4

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write(
//   "The cost of buying 5 tickets to a movie is: " + totalCost + " PKR"
// );

// // qno 5

// var number = 5;
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + number * i + "<br>");
// }

// // qno 6

// var celsiusTemp = 30;
// var fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

// var fahrenheitTemp2 = 86;
// var celsiusTemp2 = ((fahrenheitTemp2 - 32) * 5) / 9;
// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// // qno 7

// var priceItem1 = 25;
// var priceItem2 = 30;
// var quantityItem1 = 3;
// var quantityItem2 = 2;
// var shippingCharges = 5;

// var totalCost =
//   priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
// document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
// document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
// document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
// document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
// document.write("<p><strong>Total Cost: $" + totalCost + "</strong></p>");

// // qno 8

// var totalMarks = 500;
// var marksObtained = 420;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h2>Percentage Calculation</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

// // qno 9

// var totalUSDollars = 10;
// var totalSaudiRiyals = 25;
// var usdToPKR = 104.8;
// var sarToPKR = 28;
// var totalPKR = totalUSDollars * usdToPKR + totalSaudiRiyals * sarToPKR;
// document.write("Total amount in Pakistani Rupees: " + totalPKR);

// // qno 10
// var num = 10;
// var result = ((num + 5) * 10) / 2;
// document.write("Result of arithmetic operations: " + result);

// // qno 11

// var currentYear = new Date().getFullYear();
// var birthYear = 1990;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("They are either " + age1 + " or " + age2 + " years old");

// // qno12

// var radius = 5;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;
// document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// document.write("The area is " + area.toFixed(2));

// // qno13

// var favoriteSnack = "chocolate";
// var currentAge = 25;
// var maxAge = 80;
// var amountPerDay = 2;

// var yearsRemaining = maxAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var totalAmountNeeded = daysRemaining * amountPerDay;

// document.write(
//   "You will need " +
//     totalAmountNeeded +
//     " " +
//     favoriteSnack +
//     " to last you until the ripe old age of " +
//     maxAge
// );


// Chapter #6-9 Math Expressions 

// Question #1

// var a = 10;
// document.write("<h4>Result:</h4>")
// document.write("The Value of a is: " + a)
// document.write("<br><br>The Value of ++a is: "+ ++a)
// document.write("<br>Now the value of a is:" +a)
// document.write("<br><br> The value of a++ is: " + a++)
// document.write("<br>Now the value of a is: " +a)
// document.write("<br><br>The value of --a is: "+ --a)
// document.write("<br>Now the value of a is: " + a)
// document.write("<br><br>The value of a-- is: " + a--)
// document.write("<br>Now the value of a is: " + a)


// Question #2

// var a = 2 ;
// var b = 1 ; 
// var result = --a - --b + ++b + b--; 

// --a; pre-deceremnt a=1
// --a - --b; 1 - 0 = 1 
// --a - --b + ++b; 1 + 1 = 2
// --a - --b + ++b + b--; 2 + 1 = 3 


// document.write("a is: " + a)
// document.write("<br>b is: " + b)
// document.write("<br>Result is: " + result)

// Question #3

// var user = prompt("What is your name?")
// document.write("Welcome to Our Site " + user)

// Question #4 is missing in the pdf 

// Question #5 

// var number = prompt("Please enter a number:", "");
//     if (number == "") {
//       number = 5;
//     }
//     document.write("<table>");
//     for (var i = 1; i <= 10; i++) {
//       document.write("<tr>");
//       document.write("<td>" + number + "</td>");
//       document.write("<td>x</td>");
//       document.write("<td>" + i + "</td>");
//       document.write("<td>=</td>");
//       document.write("<td>" + number * i + "</td>");
//       document.write("</tr>");
//     }
//     document.write("</table>");

// Question #6 


// var subject1 = prompt("Enter the name of first subject: ");
// var subject2 = prompt("Enter the name of second subject: ");
// var subject3 = prompt("Enter the name of third subject: ");
// var totalMarks = 100;
// var obtainedMarks1 = +prompt("Enter the obtained marks for "+subject1+": ");
// var obtainedMarks2 = +prompt("Enter the obtained marks for "+subject2+": ");
// var obtainedMarks3 = +prompt("Enter the obtained marks for "+subject3+": ");
// var totalObtainedMarks = (obtainedMarks1) + (obtainedMarks2) + (obtainedMarks3);
// var percentage = (totalObtainedMarks/300)*100;
// document.write("")



















// Chapter #9-11 USER INPUT & CONDITIONAL STATEMENT

// Question #1

// var city = prompt("Type City Name")
// if(city == "Karachi"){
//     alert("Welcome To The City Where There Is No Light!")
// }else{
//     alert("Welcome")
// }

// Question #2

// var gender = prompt("Type Your Gender")
// if(gender == "male"){
//     alert("Good Morning/Afternoon Sir.")
// }else if(gender == "Female"){
//     alert("Good Morning/Afternoon Ma'am.")
// }else{
//     alert("Good Day!!")
// }

// Question #3 

// var signal = prompt("Write The Signal Color.")
// if(signal == "Red"){
//     alert("Must Stop!")
// }else if(signal == "Yellow"){
//     alert("Ready To Move!")
// }else if(signal == "Green"){
//     alert("Move Now!")
// }else{
//     alert("Please Write the correct color!!!")
// }


// Question #4

// var fuel = +prompt("Type How many liters fuels are remaining in your car!")
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("You are good to go!!")
// }


// Question #5

// var a = 4;
// if(++a ===5){
//     alert("given condition for variable a is true")
// }; // gives output / given condition for variable a is true.
// var b =82;
// if(b++ === 83){
//     alert("given condition for variable b is true")
// };
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// } // gives output / condition 2 is true
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }; // gives output / condition 4 is true.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }// gives output / The Cost equals.
// if (true){
// alert("True");
// } // gives output / true
// if (false){
// alert("False");
// };
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }; // gives output / car is smaller than cat.

// Question #6

// var Subject1 = prompt("Enter marks obtained in Subject1: ");
// var Subject2 = prompt("Enter marks obtained in Subject2: ");
// var Subject3 = prompt("Enter marks obtained in Subject3: ");
// var TotalMarks = prompt("Enter Total Marks: ");
// var ObtainedMarks = parseInt(Subject1) + parseInt(Subject2) + parseInt(Subject3);
// var Percentage = (ObtainedMarks/TotalMarks)*100;
// document.write("Total Marks: " + TotalMarks + "<br>");
// document.write("Marks Obtained: " + ObtainedMarks + "<br>");
// document.write("Percentage: " + Percentage + "%" + "<br>");

// if (Percentage >= 80) {
//     document.write("Grade: A+" + "<br>");
//     document.write("Remarks: Excellent" + "<br>");
// } else if (Percentage >= 70 && Percentage < 80) {
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good" + "<br>");
// } else if (Percentage >= 60 && Percentage < 70) {
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: Average" + "<br>");
// } else if (Percentage >= 50 && Percentage < 60) {
//     document.write("Grade: C" + "<br>");
// } else if(Percentage >= 50 && Percentage < 40) {
//     document.write("Grade: D" + "<br>");
// }else{
//     document.write("You Failed.")
// }

// Question #7

// let secretNumber = 5;
// let guess = prompt("Guess a number between 1 and 10");

// if (guess == secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (guess == secretNumber + 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Wrong answer!");
// }

// Question #8


// var divisionNumber = +prompt("Enter number");
// if(divisionNumber % 3 == 0){
//     document.write( divisionNumber + " is divisible by 3");
// }else{
//     document.write(divisionNumber + " is not divisible by 3");
// }


// Question #9

// let userInput = +prompt("Please enter a number:");
// if (userInput % 2 === 0) {
//     document.write("The number " + userInput + " is an even number.");
// } else {
//     document.write("The number " + userInput + " is an odd number.");
// }

// Question #10

// var temp = +prompt("Input The Temperature: ")
// if(temp > 40){
//     document.write("It is too hot outside.")
// } else if( temp > 30){
//     document.write("The Weather today is Normal.")
// } else if( temp > 20){
//     document.write("Today's Weather is cool")
// } else if( temp > 10){
//     document.write("OMG! Today's weather is so Cool.")
// }

// Question #11

// var number1 = +prompt("ENTER NUMBER 1")
// var number2 = +prompt("ENTER NUMBER 2")
// var opt = prompt("ENTER opt")


// if (opt === "+") {
//     document.write(number1+ number2)
// } else if (opt === "-") {
//     document.write(number1 - number2)
// } else if (opt === "*") {
//     document.write(number1 * number2)

// } else if (opt === "/") {
//     document.write(number1 / number2)

// } else {
//     document.write("INVALID OpT")
// }