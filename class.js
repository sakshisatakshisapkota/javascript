// let a  = Number(prompt("Enter a first number"))
// let b = Number( prompt ( "Enter a  second number") )
//   console.log ("Addition", a+b );   

// console.log ("Radha")

// let a = prompt( "Enter a number")
// console.log ("Type of a" );
let a= Number (prompt ( "Enter a number") );
let b= Number (prompt ( "Enter a number") );
// if ( typeof a = )
if (a<b){
    console.log ("Addition",a+b);
}else{
    console.log ("make sure B is greater");
}
a>b ? console.log ("a is greater"):b>a? ("b is greather"): console.log ("Both are equal");
let c = prompt ("writen a day of the week");

switch (c){
    case "sunday":
        console.log ("today is sunday");
      break;
      case "sunday":
        console.log ("today is Monday");
      break;
      case "Monday":
    console.log ("today is Tuesday");
  break;
  case "Tuesday":
    console.log ("today is  Wenesday");
  break;
  case "Wenesday":
  console.log ("today is Thusday");
break;
case "Thusday":
    console.log ("today is Friday");
  break;
  case "Friday":
    console.log ("today is Friday");
  break;
  case "Saturday":
    console.log ("today is Saturday");
  break;
  default: 
  alert ( "Today is not day ")
 }
 let i=0;
for ( i;i<10
  ;i++) {
console.log("for loop value");
}
while (i=3){
  console.log ( "while",i);
  i++;
}
do {
  console.log ("Do while");
  i++;
}while(i<3)

const user = {
  name:"RADHA",
  age:"16",
  address: "kathmandu",
  isprograming:true,
  hobbies : ["programming","watching movies" ]

};
console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(user.hobbies);
console.log(user.isprograming);
const object = {
  a:4,
  b:{
    c:10,
  },
};
const {
  a,
  b:{c},

} =object;

console.log(a);
console.log(c);