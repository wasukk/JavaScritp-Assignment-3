// Chapter 31-34
function ch31q1(){
    var now = new Date();
    document.write(now);
}
function ch31q2(){
    var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    var now = new Date();
    var month = now.getMonth();
    alert("CURRENT MONTH: " + monthNames[month]);
}
function ch31q3(){
    var daysName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI','SAT']
    var now = new Date();
    var day = now.getDay();
    alert("CURRENT DAY : "+ daysName[day])
}
function ch31q4(){
    var daysName = ['SUNDAY', 'MONDAY', 'TUEDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY','SATURDAY']
    var now = new Date();
    var day = now.getDay();
    if(day=== 0 || day===1){
        alert("Today is" + daysName[day]  +" and Its Fun day!");
    }
    else{
        alert("Today is "+daysName[day] + " Work Hard, OK!");
    }
    
}
function ch31q5(){
    var now = new Date();
    var day = now.getDate();
    if(day<=15){
        alert("First Fifteen Days of the Month ")
    }
    else{
        alert("Last Fifteen Days of the Month ")
    }
}
function ch31q6(){
    var now  = new Date()
    var miliSec = now.getTime();
    var min = miliSec/60000;
    document.write(" Current Date "+ now +" <br>");
    document.write( "Elapsed millisecods since January 1, 1970: "+  miliSec+"<br>");
    document.write( "Elapsed minutes since January 1, 1970: " + min);
}
function ch31q7(){
    var now = new Date();
    var hours = now.getHours();
    if(hours<=23|| hours>=12){
        alert("Its PM")
    }
    else{
        alert("Its AM")
    }
}
function ch31q8(){
    var was = new Date("December, 31, 2020");
    document.write("<b>Later Date: </b> "+ was);
}
function ch31q9(){
    var firstRamadan = new Date("April, 12, 2021");
    var now = new Date();
    var daysPassed = now- firstRamadan;
        daysPassed = daysPassed / (1000*60*60*24);
        daysPassed = Math.floor(daysPassed)
    document.write(daysPassed +" days have been passed since first Ramadan 2021");
}
function ch31q10(){
    var miliSec =  new Date().getTime() - new Date("July, 1, 2021").getTime();
    var seconds = Math.floor(miliSec/(1000));
    document.write(seconds + " Seconds had been passed since the begning of July 2021");
}
function ch31q11(){
    var today = new Date();
    var now = new Date();
        now.setHours(22);
    // var reduceHour = now.setHours(21);
    document.write(today+" <br>");
    document.write(" 1 Hour ago it was :  "+now);
}
function ch31q12(){
    var thisYear = new Date();
    var hundredYearAgo = new Date();
        hundredYearAgo.setFullYear(1921);
    document.write(thisYear + "<br>");
    document.write("100 Year back it was "+ hundredYearAgo);
}
function ch31q13(){
    var yourAge = +prompt("Enter your age ");
       document.write(yourAge)
    
    // var now = new Date();
    // document.write("Your Age is : " + yourAge   );
    // document.write("Your Birth year was : " );


}
function ch31q14(){

}

// Chater 35 to 37

function ch35q1(){
    var now = new Date()
    document.write(now);
}
function ch35q2(){
    var firstName = prompt("Please enter first name : " );
    var lastName   = prompt("Please enter last name : ");
    document.write( " Asalam o Alekum " + firstName + " "+ lastName);
}

////Question Number 3 from 35-37 Assignment
function addTwoNumbers(a, b){
    add = a+b;
    return add;
}
function ch35q3(){
    var num1 = +prompt("Please enter first number : " );
    var num2   = +prompt("Please enter second number : ");
    document.write( "Sum of  " + num1 + " & "+ num2 +" is "+  addTwoNumbers(num1,num2));
}

////Question Number 4 from 35-37 Assignment
function calculateWithOperator(num1, Operator, num2){
    if(Operator==='+'){
        return "Sum of " +num1 + " and "+num2 + " : "+ (num1+num2);
        
    }
    if(Operator === '-'){
        return "Substraction of " +num1 + " and "+num2 + " : "+ (num1-num2);
    }
    if(Operator === '*'){
        return "Multiplication of " +num1 + " and "+num2 + " : "+ (num1*num2);
        
    }
    if(Operator === '/'){
        return "Division of " +num1 + " and "+num2 + " : "+ ( num1 /num2);
    }
   
}
function ch35q4(){
    var num1 = +prompt("Please enter first number : " );
    var Operator =   prompt("Enter Operator ");
    var num2   = +prompt("Please enter second number : ");
    document.write(calculateWithOperator(num1, Operator, num2));
}

////Question Number 5 from 35-37 Assignment
function sqr(num){
    var sqr = num*num;
    return "Squares of "+ num +" = "+ sqr;
}
function ch35q5(){
var num = +prompt("Enter any number to get squares of "); 
document.write(sqr(num));
}


////Question Number 6 from 35-37 Assignment
function factorial(num){
    var fact = 1;
    for(var i=1; i<=num; i++){
        fact = fact*i;
    }
    return " Factorial of  " + num +" : "+ fact;
}
function ch35q6(){
var num = +prompt("Enter number for its factorial");
document.write(factorial(num));
}
////Question Number 7 from 35-37 Assignment
function counting(){
   var s = +prompt("Please Enter Starting Point For Counting");
   var e = +prompt( "Please Enter End Point for Counting");

   
    if(s>e){
        // document.write(s +" "+ e + " S is greater");
        // for(var i=s; i<=e; i++){
        //     document.write(i+"-");
        // }
        for(var i=s; i>=e; i--){
            document.write(i+"-");
            }
        // document.write("starting point is greater than end point");
    }
    else if(e>s){
        for(var i=s; i<=e; i++)
        document.write(i+"-");
        // document.write(s+" "+ e + " E is greater");
    }
    else if(s==e){
        document.write("Both Starting point and ending point contain same value");
    }
    else{
        document.write("Format not matched");
    }

}
function ch35q7(){
    // var startingPoint = +prompt("Please Enter Starting Point For Counting" );
    // var endingPoint = +prompt( "Please Enter End Point for Counting");
    counting();
    
}
////Question Number 8 from 35-37 Assignment
/// outer function
    function calculateHypotenuse(b,p){ ////b represent base and p represent Perpendicular
        var base =b*b;
        var perpendicular = p*p;
        var hypotenuse = (base+perpendicular);
        return hypotenuse;
    }
    function ch35q8(){
        var base = +prompt("Enter base :");
        var perpendicular = +prompt("Enter perpendicular");
        var result = calculateHypotenuse(base,perpendicular);
        ////INNER FUNCTION
            function calculateSquare(num){
                return num*num;
            }

        document.write("Hypotenuse : "+ calculateSquare(result))
        
        
        // document.write("Hyp is "+(result*result));
        // document.write(result);
    }

    
////Question Number 9 from 35-37 Assignment

function calculateAreaOfRectangle(a,b){
    return a*b;
}
function ch35q9(){
    var height = +prompt("Enter height of rectangle:");
    var width  = +prompt("Enter width of rectangle: ");
    document.write("Calculation of area with Variable and assigned value by user: "+calculateAreaOfRectangle(height,width)+"<br>");
    document.write("Calculation of area with Values: Height = 4 and Width = 5 " + calculateAreaOfRectangle(4,5) )
}
////Question Number 10 from 35-37 Assignment
function ch35q10(){
    var  word = prompt();
    var  palindrome ="";
        for(var x=word.length-1; x>=0; x--){
            palindrome += word[x];
        }
    if(palindrome === word){
        document.write(word +" is palindrome");
    }
    else{
        document.write(word +" is not palindrome");
    }
}
////Question Number 11 from 35-37 Assignment
function ch35q11(){
    var str = "the quick brown fox";
    var strInWord = str.split(" ");
    var wordInLetters = strInWord[0].split("");
    document.write(wordInLetters[0].toUpperCase()+wordInLetters[1]+wordInLetters[2]);
    var wordInLetters = strInWord[1].split("");
    document.write(" "+wordInLetters[0].toUpperCase()+wordInLetters[1]+wordInLetters[2]+wordInLetters[3]+wordInLetters[4]);
    var wordInLetters = strInWord[2].split("");
    document.write(" "+wordInLetters[0].toUpperCase()+wordInLetters[1]+wordInLetters[2]+wordInLetters[3]+wordInLetters[4]);
    var wordInLetters = strInWord[3].split("");
    document.write(" "+wordInLetters[0].toUpperCase()+wordInLetters[1]+wordInLetters[2]);
    // document.write(strInWord[0].toUpperCase());
}
////Question Number 12 from 35-37 Assignment
function longestWord(str){
    // var str = prompt();
    var stringInWords = str.split(" ");
    var longestWord = stringInWords[0];
    for(var i=0; i<=stringInWords.length-1; i++){
       if(stringInWords[i].length>longestWord.length){
           longestWord = stringInWords[i];
       }
    }
    document.write(longestWord);
}
function ch35q12(){
    var str = prompt("Enter any string to check longest word!");
    longestWord(str);
}
////Question Number 13 from 35-37 Assignment
function occuranceInString(str,letter){
    var letter = letter.toLowerCase();
    var count = 0;
    for(var i=0; i<=str.length;i++){
        if(str[i]===letter){
            count++
        }
    }
    return count;
}
function ch35q13(){
    var str = prompt("Enter any string ");
    var letter = prompt("Enter any letter to check the number of occurance in string");
   document.write( letter + " comes "+ occuranceInString(str,letter) + " times in "+"<br>"+ str);
}

////Question Number 14 from 35-37 Assignment

function calcCircumference(radius){
    var pi = 3.14;
    return "The Circumference is : "+  2*pi*radius;
}
function calArea(radius){
    var pi = 3.14;
    return "The area of Circle is : " + pi*(radius*radius);
}
function  ch35q14(){
    var radius = +prompt("Enter value of radius to calculate 'Area' & 'Circumference' of circle");
document.write(calcCircumference(radius) +"<br>");
document.write(calArea(radius));
}

// Chater 38 to 42


////Question Number 1 from 38-42 Assignment
function power(a,b){
   var p = a;
    for(var i=1; i<=b-1; i++){
       p = a*p; 
    }
    return p;
}
function ch38q1(){
    var numberValue = +prompt("Enter Value ");
    var powerValue =  +prompt("Enter Power ")
    document.write(power(numberValue,powerValue));
}

////Question Number 2 from 38-42 Assignment
function leapYear(year){
    
    var a = new Date(year, 1, 29).getDate() === 29;
    if(a===true){
        document.write("Leap Year");
    }
    else{
        document.write("Not a Leap Year");
    }
}   
function ch38q2(){
    var year = +prompt("Enter Year to check its leap or not ");
    leapYear(year);
}

////Question Number 3 from 38-42 Assignment

function calS(a,b,c){
    var s = (a+b+c)/2
    return s;
}
function calA(s,a,b,c){

    var area =  s*(s-a)*(s-b)*(s-c);

    return area;

}

function ch38q3(){

        var a = +prompt("Please enter value for side a:");
        var b = +prompt("Please enter value for side b:");
        var c = +prompt("Please enter value for side c:");
        var sFunctionValue = calS(a,b,c);
        document.write("Value of a :"+ a+" <br>");
        document.write("Value of b :"+ b+" <br>");
        document.write("Value of c :"+ c+" <br>");
        document.write("Value of s :"+ sFunctionValue +" <br>");
        var area = calA(sFunctionValue,a,b,c);
        document.write(" Area : "+area+"<br>");
        var sqrOfArea = Math.sqrt(area);
        document.write("Squar root of Area "+  sqrOfArea.toFixed(2));
        ///// document.write(Math.floor(Math.sqrt(area)));

}

////Question Number 4 from 38-42 Assignment 

function calculateAverage(s1,s2,s3){
    var a =(s1+s2+s3)/3;
    return  a;
}
function calculatePercentage(s1,s2,s3,totalMarks){
    var p = (s1+s2+s3)/totalMarks*100;
    return p;
}
function ch38q4(){
    var sub1 = +prompt("Enter marks in 1st subject: ");
    var sub2 = +prompt("Enter marks in 2nd subject: ");
    var sub3 = +prompt("Enter marks in 3rd subject: ");
    var totalMarks = 300;
    var Average = calculateAverage(sub1,sub2,sub3);
    var Percentage = calculatePercentage(sub1,sub2,sub3,totalMarks)
    document.write("Percentage : "+ Percentage.toFixed(2)+"<br>");
    document.write("Average : "+ Average.toFixed(2));
}

////Question Number 5 from 38-42 Assignment 
function ch38q5(){
    var str = prompt("Enter String: ");
    // var splitStr = str.split(" ");
    var value = prompt("Enter character or word to find the index in string:");
    var indexValue = 0 ;
    if(value.length>=2){
        var splitStr = str.split(" ");
        for(var i=0; i<=splitStr.length-1; i++){
            if(splitStr[i]===value){
                indexValue = i;
            }
        }
        document.write("String : " + str +"<br>");
        document.write("Index of "+value + " is " +indexValue);
    }
    
    else if(value.length<=1){
        var splitStr = str.split("");
        for(var i=0;i<=splitStr.length-1;i++){
            if(splitStr[i]===value){
                indexValue = i
            }
        }
        document.write("String : " + str +"<br>");
        document.write("Index of "+value + " is "+indexValue);
    }

    // for(var i=0; i<=splitStr.length-1;i++){
    //     if(splitStr[i]===value){
    //         indexValue = i;
    //     }
    //     // document.write(splitStr[i]);
    // }
    // document.write(indexValue);
    // document.write(splitStr[2]);
    // return indexValue;
}

////Question Number 6 from 38-42 Assignment
function ch38q6(){
   var str = "web development";
       str = str.toLowerCase();
    document.write("String with Vowels: "+str+"<br>");
    for(var i=0; i<=str.length-1; i++){
        if(str[i]==='a'|| str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
          str = str.replace(str[i],"_");
        }
    }
          document.write("String after removing Vowels : " +str);
}
////Question Number 8 from 38-42 Assignment
function ch38q8(){
    function kmInMeter(km){
        return km*1000;
    }
    function kmInFeet(km){
        var m = kmInMeter(km);
        return m*3.281;
    }
    function kmInInches(km){
        var f = kmInFeet(km);
        return f*12
    }
    function kmInCent(km){
        var i = kmInInches(km);
        return i*2.5;
    }
    var km = prompt("Enter distance in ");
    document.write("KM in Meters: "+kmInMeter(km)+"<br>");
    document.write("KM in Feets: "+kmInFeet(km)+"<br>");
    document.write("KM in Inches: "+kmInInches(km)+"<br>");
    document.write("KM in Centimeters: "+kmInCent(km)+"<br>");
}   
////Question Number 9 from 38-42 Assignment
    
function ch38q9(){
    var workHours = +prompt("Enter work hours of employ");
    var overTime = 0;
    if(workHours>40){
        overTime = workHours - 40;
        document.write("Total over time was "+ overTime +"Hrs, <br> Amount for your over time will be: " +"Rs."+overTime*12+"/-  (as per rate of Rs. 12/hrs)" );
    }
    else{
        document.write("you dont have any over time");
    }

}

////Question Number 10 from 38-42 Assignment

function ch38q10(){

    var amount = +prompt("Enter amount to withdrawn");
    //// for 100 notes
    var a = amount%100;
    var b = amount-a;
    var h = b/100;
    //// for 50 notes 
    var a2 = a%50;
    var b2 = a-a2;
    var f = b2/50;
    //// for 10 notes
    var a3 = a2%10;
    var b3 = a2-a3;
    var t = b3/10;


    document.write("100 notes : "+ h+"<br>");
    document.write("50 Notes : "+ f+"<br>");
    document.write("10 Notes : "+t+"<br>");

}

// Chater 43 to 48


////Question Number 1 from 43-48 Assignment

function ch43q1(){
    alert(" You clicked on link ")
}
////Question Number 2 from 43-48 Assignment
function ch43q2(){
    alert("Thanks for purchasing a phone from us.")
}
////Question Number 3 from 43-48 Assignment
function deleteRow1(){
    document.getElementById("row1").remove();
}
function deleteRow2(){
    document.getElementById("row2").remove();
}
function deleteRow3(){
    document.getElementById("row3").remove();
}
function deleteRow4(){
    document.getElementById("row4").remove();
}
function deleteRow5(){
    document.getElementById("row5").remove();
}
function deleteRow6(){
    document.getElementById("row6").remove();
}
function deleteRow7(){
    document.getElementById("row7").remove();
}
function deleteRow8(){
    document.getElementById("row8").remove();
}
function deleteRow9(){
    document.getElementById("row9").remove();
}
function deleteRow10(){
    document.getElementById("row10").remove();
}
////Question Number 4 from 43-48 Assignment


        // <div>
        // <img width="100px" height="120px" src="off.jpg" alt="off" onmouseover="src='on.jpg'" onmouseout="src='off.jpg'">
        // </div>



////Question Number 5 from 43-48 Assignment
var c = 0;
function countUp(){
    c += 1;
    document.getElementById("countIt").innerHTML = c ;
}
function countDown(){
    c -=1;
    document.getElementById("countIt").innerHTML = c;
}
function resetCounter(){
    c = 0;
    document.getElementById("countIt").innerText = c;
    
}

