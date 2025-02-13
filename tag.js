// function sum () {
    //12 let a=5;
    // let b=10;
    // return a+b;
// }
// console.log(sum());
// const multiply=(c,d)=>{
    // let c =5;
    // let d=10;
    // console.log(multiply);
// }
//  function sub (a,b){
    // let a = 2;
    // let b=8;
    // return a-b;
//  }
//  console.log((sub));
// 11 let c=2;
// let d=8;
// function substract(c,d ){
    // console.log(c-d);
// }
// console.log(c);
// substract(c,d);
// console.log(sum())
// async function asyncHandle() {
    // const response= await fetch ("https://dummyjson.com/quotes")
    // console.log(response);    
// }
// asyncHandle();
// const name ="Satakshi";
// let splittedValue=name.split("")
// console.log(name.Length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.trim());
// console.log(name.slice(1,3));
// console.log(name.replace("A","B"));
// console.log(name.charAt(2));
// console.log(name.split(""));
// console.log(splittedValue);
// console.log(splittedValue.join("-"));
// console.log(name.indexOf("a"));
// console.log(name.split("")[0].toUpperCase().slice(1));
// console.log(splittedValue.reverse);
// 
//10 const name = "netra";
// let splittedValue=name.split("")
// console.log(name.split("")[0].toUpperCase()+name.slice(1));
// console.log(splittedValue );
// console.log(name.split(""));
// 
// 9 let a= prompt("Enter a words");
// console.log (a.split("").reverse().join("").toUpperCase);
//  const age=[18,19,20,35,25];
//  const ageGreater=
// console.log(age.every((ele)=>{
    // ele>=18;
// })
// );
// console.log(numbers);
// console.log(
    // number.map((ele)=> {
//   return ele *2 ; 
// })
// );
// 
//8  let usercredential={
    // username :"radha",
    // password:"sakshi",
// };
// console.log( usercredential.username);
// console.log( usercredential.password);

// const validator=()=>
// { 

    // const un =prompt("Enter the username");
    // const pn =prompt("Enter the password");

    // if (un=== usercredential.username && pn === usercredential.password)
//  {
        // alert("you are Login apply😊😊 .!");
// 
// 7 const num1=prompt ( "enter a num1");
// const operator =prompt("enter operator (+,-,*,/)");
// const num2 = prompt("enter a num2");

// let result;

// switch(operator){
    // case "+":
    // result = num1+num2;
    // break;
//    case "-":
    // result = num1-num2;
    // break;

    // case "*":
        // result = num1*num2;
        // break;
        // case "/":
            // result = num1/num2;
            // break;

//   }  
//   alert(result)

// }
//   
//   else {
    // alert ("you are Unauthorized to log in!"); 
// }
// }
// validator();

//6 const mycountry = [" india", "Nepal"];
// const countryfunc =(country)=>console.log(country);
// countryfunc([...mycountry]);
//  
// 5 let t=[5,3];
//  function sum (x,y){
    // const add =x+y;
    // console.log(add);
//  }
// 
// sum(...t);
// 
// 4 let  Afriuts =["apple,orange,graps,banana"];
// const friutsfunc=(friuts)=>console.log(friuts);
// friutsfunc([...Afriuts],"apple" , "orange","grap","banana");

//  const car =["Sedan (Saloon)","Coupe","Station", "Wagon","Hatchback","Convertible","Cabriolet",
    // "Sports", "Minivan","Pickup Truck"];
   
    //1. console.log(
        // car.map(function gaddi(gadi,index){
            // console.log(gadi,index,"gadi");
        // })
    // );

    // const newcar=car.map((item,index)=>item);
    // console.log(newcar,"newcar");

//    2. const filtercar=car.filter((item,index)=>item!=="Station");
    //   console.log(filtercar,"filtercar");
    // console.log(filtercar);

// 3const nums =[1,2,3,4,5,6,7,8,9,10];
// nums.map((item)=>{
    // return item;
// });
// const initialvalue =0;
// const reduceNums =nums.reduce((acc,item)=>acc+item,initialvalue);
// console.log(reduceNums,"ReduceWala");

// 14 let Amovies = ["RADHE","PATHAN","FIGHTER"];
// 
// const moviesfunu = (movies)=>console.log(movies);
// moviesfunu([...Amovies],"RADHE","PATHAN","FIGHTER");
  
const  femalemarvel = [
    {
        name:"Black Widow (Natasha Romanoff)",
        age:20-30,height:5.6,
        Power:{type:" Reality Warping / Chaos Magic ",range:"100m "}
     },
    {
        name:"Scarlet Witch (Wanda Maximoff)",
        age:20-30,height:5.8,
        Power:{type:" Telekinesis ",range:"5m "} 
    },
    {name:"Captain Marvel (Carol Danvers)",age:20-30,height:5.9,Power:{type:" Telekinesis ",range:"200m "} },
    {name:"Storm (Ororo Munroe)",age:30-35,height:5.5,Power:{type:" Atmospheric Control ",range:"10m "} },
    {name:"Jean Grey" ,age:30-40,height:5.10,Power :{type:" Reality Warping / Chaos Magic ",range:" 200m"} },
    {name:"Black Panther (Shuri)" ,age:20-30,height:5.6,Power:{type:" Atmospheric Control ",range:"100m "} },
    {name:"Gamora ", age:5.5,height:6.1,Power:{type:"  Reality Warping / Chaos Magic",range:"5mm "} },
    {name:"Invisible Woman (Sue Storm)" ,age:30-40,height:6.3,Power:{type:" Reality Warping / Chaos Magic ",range:"200m "} },
    {name:"She-Hulk (Jennifer Walters)", age:25-35,height:5.10, Power:{type:" Atmospheric Control ",range:"5m "} },
    {name:"Mantis ",age:5.3,height:5.9,Power:{type:" Atmospheric Control ",range:" 100m"}   },
    
]
// 1. console.log (
    // femalemarvel.map(function heroni(heroni,index){
        // console.log(heroni,index,"type");
    // } ) 
// );
// femalemarvel.map((item,index)=>{
    // console.log(item.name,item.Power.type);
// });
// const rangedheroni=femalemarvel.filter((item)=>{
    // const filter=item.Power.type ==="Atmospheric Control";
    // return filter;
// });
// console.log(rangedheroni,"rangedheroni");

// let openState = false;
// const handleOpenClose = () => (openState = !openState);
// const aside = document.querySelector(".full");
// document
//   .querySelector(".opener")
//   .addEventListener("click", () => handleOpenClose());
//  
// if (openState) {
//   aside.style.color = "red";
// } else {
//   aside.style.color = "blue";
// }
// console.log(openState, "openState");

//hero of range greater than 5mm and less then 200mm
// let range = femalemarvel.filter (i=>{
// return i.Power.range>"5m" && i.Power.range>"200m"
// });
// console.log(range);
//add lowest rating field i.e 60%of actual rating.
const newmarvelheroni=femalemarvel.map((item)=>{
    const newArr = {...item,lowestRating:item.rating*0.6};
    return newArr;
});
console.log (newmarvelheroni,"newmarvelheroni");

//API product of Store.
const baseUrl="https://fakestoreapi.com/products";
const data =fetch(`${baseUrl}product`)
. then((res )=> console.log(res,"res"));
const apiData= res.json();

    console.log(json)


    