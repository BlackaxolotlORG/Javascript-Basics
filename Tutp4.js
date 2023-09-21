//object literal notation

let user = {
    name: "Crystal",
    age: 30,
    email: "crystal@gmail.com",
    location: "berlin",
    blogs: ["why i love cheese","10things to make with paper"]
};

console.log(user);
console.log(user.name);

user.age = 45
console.log(user.age);

user["age"] = 80
console.log(user["age"]);


console.log(typeof user);


let user2 = {
    name: "Crystal",
    age: 30,
    email: "crystal@gmail.com",
    location: "berlin",
    blogs: ["why i love cheese","10things to make with paper"],
    login: function(){
        console.log("user is logged in");
    },
    logout: function(){
        console.log("user logged out");
    },
    //arrow functions dont work with this keyword
    logblogs: function(){
        //console.log(this.blogs)
        console.log("This is user has written the following blogs: ")
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
    
};
//this represents contxt where code is used
user2.login();
user2.logout();
user2.logblogs();

//objects inside arrays
const blogs2 = [
    {title: "why mac n cheese", likes: 30,},
    {title: "ten things to eat with nutella", likes: 89,}
];
console.log(blogs2);




let user3 = {
    name: "Crystal",
    age: 30,
    email: "crystal@gmail.com",
    location: "berlin",
    blogs: [ {title: "why mac n cheese", likes: 30,},
    {title: "ten things to eat with nutella", likes: 89,}],
    login: function(){
        console.log("user is logged in");
    },
    logout: function(){
        console.log("user logged out");
    },
    //arrow functions dont work with this keyword
    logblogs: function(){
        //console.log(this.blogs)
        console.log("This is user has written the following blogs: ")
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        })
    }
    
};
user3.logblogs();


//math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area= 7.7;
console.log(Math.round(area));

//always round to the lowest number = floor method
console.log(Math.floor(area));
//always round to the highest number = ceil method
console.log(Math.ceil(area));

//destroys decimal and leaves integer
console.log(Math.trunc(area));



//generate random numbers

const random = Math.random()

//random between 0 and 1
console.log(random);

//random number 1-100
console.log(Math.round(random * 100));


//primitive values 

let scoreone = 50;
let scoretwo = 80;

console.log(`This is score one: ${scoreone} and this is ${scoretwo} `);



//reference values 
//if you change one thing of one of these the changes are made for both because it changes on the heap

const userone = {
    name: "diego", 
    age: 30 };
const usertwo =  userone;

console.log (userone, usertwo);



