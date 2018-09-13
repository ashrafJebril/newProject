function square(monky) {
  return monky * monky ;
}
//2- the result of the first square will square it again  


function age(x){

return x*365*24*60;



}

function z(x,y){
var avrage=(y/x)*100;

return avrage +"%";





};

function full(first,last){
	return first+" "+last;

}
function square1(x) { 
 return x * x ; 
 } 
 function square2 (x) {
 return x * x ; 
 } 
 function square3 (x)  { 
 return x * x;
}
 function square(x){
  return x * x;
 } 
 function square (x) {
  return x * x; 
 } 
 function square(x)  { 
 return x * x; 
 }
  function cube(x) { 
 // your code here 
   return x^3 ;

 }
  function fullName(first,last) { 
 // your code here 
 return first+" "+last;

 } 
 

 function avrage(x,y){
 	var avg=(x+y)/2;
 	return avg;
 }
 function sqrArea(l){
 	var area=l*l;
 	return area;
 }
 function sqrPeri(l){
 	var perimeter = 4*l;
 	return perimeter;
 }
 function rectArea(l,w){
 	var area=l*w;
 	return area;
 }
function rectPeri(l,w){
var perimeter = 2*l+2*w;

return perimeter;

}


function paraArea(l,h){

var area = l*h;
return area;

}

function paraPeri(l,w){

var perimeter = l*w;
return perimeter;

}

function trapArea(h , b1, b2){

var area = 0.5*h*(b1+b2);

return area;

}

function trapPeri(s1,s2,b1,b2){

var perimeter = s1+s2+b1+b2;
return perimeter
}

function traiangleArea(b,h){

	var area=0.5*b*h;
return area;

}

function traianglePeri(s1,s2,b){

var perimeter = s1+s3+b;
return perimeter;

}

function circleArea(r){
area=Math.PI*r*r
return area;
}

function circlePeri(r){

perimeter= 2*Math.PI*r;
return perimeter
}

function futureVale(p,r,n,t){

var f=p*(1+(r/2))*t;
return f;

}

function power(b,e){

var m=1;
for (i=0;i<e;i++){
m=m*b;

}
return m;

}

function sqrt(n){

for (i=n ; i>=1 ; i--){
	if (i *i === n ){
		n =i ;
		break;
	}

}
return n;


}


function oldEnoghToDrive(x){

if (x>18){
	return "you can drive"
}
return "you cant drive"
}


function sameLength(a,b){

if (a.length===b.length){

	return true;}

return false;

}

function pass(x){
if (x.length===6){

return true

}
return "you need 6 charter"

}



function rentCar(name,age){

if (name === "Joe"){
	return " you cant have the keys"
}
else if (age>21){

return name + " have fun driving";

}
else if (age <=21 || age >=18){
	return name + " have fun driving on Mondays and Tuesdays";

}
else {
	return " you cant have the keys"
}

}

function max(x,y){
if (x>y){

	return x;
}
return y;

}

function min(x,y){
if (x<y){

	return x;
}
return y;

}

function larger(x,y){

if (x.length > y.length){
return x+" "+y;

}

return y+" "+x ;

}

function score(d){
	if(d>100 || d<0){
return "invalid score"

	}

else if (d<=92 && d>=90){

	return "A-"
}

else if (d<98 && d>92){

	return "A"
}

else if (d<=100 && d>=98){

	return "A+"
}



else if (d>=80 && d<=89){

return "B"

}
else if (d>=70 && d<=79){

return "C"

}
else if (d>=60 && d<=69){

return "D"

}
else {

	return "F"
}
}

function toDo(temp,condition){
if (temp<5 && temp>-5 && condition==="snowy"){

	return "the weather is ideal for snow boarding" 
}
if (temp<45 && temp>15 && condition==="sunny"){

	return "the weather is ideal for sweming" 

}
else{
return "stay home"

}


}
function letterGrade(d,l){
	
	

if (d<=92 && d>=90 && l==="A" ){

	return "A-"
}

else if (d<98 && d>92 && l==="A"){

	return "A"
}

else if (d<=100 && d>=98 && l==="A"){

	return "A+";
}
else {
return "monky "+d;

}

}


function DrEvil(x){

if (x>9999999){
	return x+" dollar"+" (pinky)"
}
else {
return x+" dollar"

}
}


function sum(start,end){
if (start===end){
return end
}


return start+sum(start+1,end)

}
function factorial(n){

if (n===1){

return 1

}

return n*factorial(n-1)

}

function repeatStr(str,count){

if (count===0){
return ""

}

return str + repeatStr(str,count-1)

}

function fib(n){

if (n===0){

return 1

}
else if (n===1){
return 1}



else {

return	fib(n - 1) + fib(n - 2) 
}
}

function multiplyBy10(number, n){

	if (n === 0){
		return number
	}

	{
	return   (10 * multiplyBy10(number, n-1))  
} 
}

function product(start,end){
if (start===end){
return end
}


return start*product(start+1,end)

}

function isEven(n){

if (n===0){

	return "its invalid"

}
}


function multiply(x, y){
if (x === 0 || y === 0){
		return 0
	}

	{
	return  x + (multiply(x, y-1))  
} 

}

function inc(x) { 
 return x + 1; 
 } 

function dec(x) { 
 return x - 1; 
 }

//From github
 function add(x, y){

 	 var result = 0;
for(i=0; i<y; i = inc(i)) {
  result = -1 * (inc(x)-1) - inc((dec(y)));
}
return -1 * result;
}

function range(start,end){
if (start===end - 2){
return end - 1
}


return (start + 1) + ", " + range(start + 1, end) 

}

function stringLength(n) {
    if (n) {
        return 1 + stringLength(n.slice(1))
    } else return 0
}




var x=0
function counter(){
return x=x+1


}


var y=x

 function guessMyNumber(n) {
 	var x = Math.floor(Math.random() * (n + 1));
var upperBound=5;
if (n>upperBound){
return "it upper than the limit"

}


 else if (n === y) { 
 return 'You guessed my number!'; 
 } 

else if (n != y){

return "try again";

}

}

 function sum(n) {
   var count = 0;
   var total = 0;
   while (count < (n + 1)) {
     total = total + count;
     count++;
     
   }
   return total;
 }

 function product(n){
 	var count = 1;
 	var total = 1;
 	while (count <= n) {
 		total = total * count;
 		count = count + 1
 	}
 	return total;
 }

 function repeatString(str, count) {
 	var string=""
 while (count>0){
string =str+string
count--


 }
 return string
}


/*function repeatStr(str,count){

if (count===0){
return ""

}

return str + repeatStr(str,count-1)


*/

function whileMulti10(number,n){

while(n>0){

number=number*10
n--

}

return number;

}

function fencPost(n){
var str=""
var i = 1;

while (i <= n) {
str=i+ " ,"+str
i =i+1
}
return str 
}

function counting(n){
	var x = 1;
	var y = x + 1;
	var	z = x + ", " + y;
	while (n > 0)
	
	return z;
}


function reverse(str){

var newString="";
var i=str.length-1
while(i>=0){

newString=newString+str[i]

i--
}
return newString;

}

function first(s)
{

return s[0];

}
var arr1=[1,2,3,6,345,213,123,1,2,11,1,8,16,2,2,2,2,4,2,2,1]

function lastElement(s){

return s[s.length-1];



}
function nth(array,index){

return array[index];


}






function rest(array){

return array.slice(array.length-1);
}



function butFirst (array){
	return array.slice(1);
}



function cons(x,array){
	return array.unshift(x);
}

function conj(array ,x){
	return array.push(x);
}


/*function mystery(array) { 
       if (array.length === 0) { 
       return []; 
 } 
 return conj(mystery(rest(array)), first(array)); 
 }*/

function sumtion(array){

	var sum=0;
	for(var i=0;i<array.length;i++){
	sum= sum+array[i];
}
	return sum ;
}
function max(array){

var m=array[0];
for(var i=1 ; i<array.length ; i++){

if(m<array[i])
{

 m=array[i];

}

}
return m

}

// function remove(array,index){

// var newArray=[]
// var a=0
// for(var i=0 ; i<array.length; i++){
//  a=array.shift();
// if (a!==index){
// newArray.push(a);
// }

// }
// return newArray;

// }




function remove  (array  ,elemant){
	var a=0;
	var array2=[];
	for (var i = 0; i < array.length; i++) {
		a=array[i];
		if (a!== elemant){
			array2.push(a);
	}	
	}

return array2;

}





function even(array){
	var newArray=[];
	for (var i = 0; i < array.length; i++) {
		var a=array[i];

		if (a%2==0){
			newArray.push(a);
		}
	} return newArray;
}

function average(array){

	var sum=0;
	for(var i=0;i<array.length;i++){
	sum= sum+array[i];
}
	return sum /(array.length-1);
}

function min(array){

var m=array[0];
for(var i=1 ; i<array.length ; i++){

if(m>array[i])
{

 m=array[i];

}

}
return m

}

function countChar(string,char){
var count=0
var a=string.split("")
for (var i=0 ;i<a.length;i++)
{
if (a[i]===char){
count++
}

}
return count
}

function evenLengthWord(array){
var array2=[]
for(var i=0;i<array.length;i++)
{
if (array[i].length%2==0){
	array2.push(array[i])
}


}
return array2
}

function reverse(string){

var a=string.split("")
var r=a.reverse();
return r.join("");



}
function keeps(array,k){

var arr2=[]

for (var i =0;i<array.length;i++){

if (k===array[i]){
arr2.push(array[i])

}

}
return arr2

}

