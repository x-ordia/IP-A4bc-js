//Experiment NO4 
const identity = {
    Name: "Bhargav",
    Age : 20,
    Gender : "Male"
};

document.getElementById("print1").innerHTML = `I am ${identity.Name}, a ${identity.Gender} student of ${identity.Age} years of age`


//constructor function

class person{
    constructor(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender; 
}
     display() {
        return `${this.name} is ${this.age}`;
    }

}

const person1 = new person("T'Chala",30,"Male");


document.getElementById("print2").innerHTML = `${person1.name} was the Black Panther at the age of ${person1.age} and was a ${person1.gender}`;

//Arrow functions cannot be used to write object methods because

function Person(name,age,gender){
    this.name = name;
    this.age =age;
    this.gender = gender;
}

const person2 = new Person("Shuri",20,"Female");
document.getElementById("print3").innerHTML = `${person2.name} is the new Black Panther at the age of ${person2.age} and is a ${person2.gender}`;

//Class student is the child class of class person and hence explains Inheritance in javascript
class student extends person{
    constructor(name,age,gender,rollno,div){
        super(name,age,gender);
        this.rollno = rollno;
        this.div = div;
    }

    display() {
        return `${this.name} is ${this.age} years old from ${this.div}`;
    }
}

const student1 = new student("Suresh" , 20 , "Male" , 42 , "D15A");

//Here the method 'display()' is overrided
document.getElementById("print4").innerHTML = student1.display();


//Generate an exception when erroneous data is enter eg: if roll no entered is zero)

function checkError(){
    const value = document.getElementById("error_checking").value;
    console.log(value);
    if (isNaN(value) || value == 0) {
    throw new Error("Invalid Input ");
    } 
    else {
    console.log("Valid");
    }
}
    

