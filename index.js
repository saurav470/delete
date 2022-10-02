// const a = []
// const b = []

// for (let i = 0; i < 5; i++) {
//     let input = parseInt(prompt("enter"))
//     a.push(input)

// }




// console.log(a)
// console.log(b)

// function o() {
//     const x = 20
//     const y = 10
//     function u() {
//         console.log(x)
//     }
//     return u;
// }
// o()()

// object
// const brand = {
//     brandname: "tea",
//     cost: 20,
//     cost: 35
// }
// console.log(brand)
// let { brandname, cost: help } = brand

// for (key in brand) {
//     console.log(key, typeof key)
// }

// console.log(help)

// const users = [
//     { userid: 1, person: "happy" },
//     { userid: 2, person: "hello" },
//     { userid: 3, person: "bot" }


// ]
// for(let key in users){
//     console.log(key)
// }

// console.log(users);


// const data={
//      userid1: 1, 
//      userid2: 2,  
//      userid3: 3, 

// }


// for(let key in data){
//     console.log(data[key]);
// }


// // map

// const person= new Map()
// person.set("name","bot")
// person.set("age",7)
// person.set(1,"one")
// console.log(person);
// console.log(person.get(1));
// for([key,value] of person){
//     console.log(key,value);
// }

// for(key of person){
//     console.log(key);
// }


//oops

// const allfunc={
//     detail:function(){
//         return `name is ${this.name} age ${this.age} fav game ${this.game}`
//     } 
// }

// function make(name, age,game){
//     const user=Object.create(allfunc)//proto reffrence
//     user.name=name;
//     user.age=age;
//     user.game=game;
    
    
//     return user;  
// }


// const user1=make("bot",9,"bgmi")
// const user2=make("botop",9,"bh")
// const user3=make("saurav",9,"coc")


// console.log(user1.detail())
// console.log(user2)
// console.log(user3)

// console.log(user1.__proto__)



//prototype every function have prototype

// function make(name, age,game){
//     const user=Object.create(make.prototype)
//     user.name=name;
//     user.age=age;
//     user.game=game;
    
    
//     return user;  
// }

// make.prototype.about=function(){
//             return `name is ${this.name} age ${this.age} fav game ${this.game}`
//         } 

// const user1=make("bot",9,"bgmi")
// const user2=make("botop",9,"bh")
// const user3=make("saurav",9,"coc")

// console.log(user1.about())
// console.log(user2)
// console.log(user3)

// console.log(make.prototype)




// new keyword

// 1. this={}
// 2. return this
// 3. this=object.create(make.prototype)


// function make(name, age,game){
//     this.name=name;
//     this.age=age;
//     this.game=game;
    
// }

// make.prototype.about=function( hello){
//     return `${hello} name ${this.name} age ${this.age} fav game ${this.game}`    
// }

// const user1= new make("bot",8,"bgmi") 

// console.log(user1.about("hello"))



// function counter(number){
//     this.incrementer=number;
//     this.increment= function(){

//         return this. incrementer++;
//     }

//     // this.decrement= function(){
//     //     count--;
//     // }
// }

// const counted= new counter(2)
// console.log(counted);
// console.log(counted.increment())
// console.log(counted.increment())

// const counted1=new counter(5)
// console.log(counted1);
// console.log(counted1.increment());
// console.log(counted1.increment());
// console.log(counted1.increment());

//random array genrator

// const arr=[1,2,3,4,5,6,7]

// const newArr=arr.sort((a,b)=>{
//     c=[a-b,b-a]
//     d=c[Math.floor(Math.random()*2)]
//     return d;
// })

// console.log(newArr);

// callback fumction

// function sum(a,b,callback){
//     c=a+b;

//     callback(c,a,b);
// }

// function handal(sum1,a,b,callback){
//     console.log(sum1,a,b);
//     callback();
// }
// function hero(){
//     console.log("saurav");
// }

// sum(2,3,(c,a,b)=>{
//     console.log(c);
//     handal(c,a,b,()=>{
//         hero()
//     });
// })

// asynchronous callback


// function login(a,callback){
//     setTimeout(() => {
//         console.log(a);
//         console.log("login");
//         callback();
//     }, 2000);
// }

// function fetch(b){
//     setTimeout(() => {
//         console.log(b);
//         console.log("fetch");
//     }, 1000);
// }

// login(1,()=>{
//    fetch(4)
// })


//

// setTimeout(() => {
//    console.log("a"); 
//    setTimeout(() => {
//     console.log(1000);
//    },3000);
// }, 1000);


// function inside function
// function sum(a,b){
//     c=a+b
//     function sum1(z){
//         x=c+z
//         return x
//     }
//     return sum1
// }

// console.log(app=sum(2,4)(3))



//spredoperator


