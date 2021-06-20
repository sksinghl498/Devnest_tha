
// use of call method in javascript
const person ={
    fullName: function() {
        return this.firstName+" "+this.lastName;
    }
}

const person1= {
    firstName:"Shivam",
    lastName:"Singh"
}

const person2={
    firstName: "Devsnest",
    lastName: "Developer_community"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));
// Use of apply methode

console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2));



// Use of bind method in java script

var Dev = {
    name: "Shivam_kr_singh_(mern)",

    printfunc: function(){
        console.log(this.name);
    }
}

var bd = Dev.printfunc.bind(Dev);
bd();

