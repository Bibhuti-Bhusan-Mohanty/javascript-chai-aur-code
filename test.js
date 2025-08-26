
name = "Bibhuti";
age=10;
price=99.99;

console.log(name);
console.log(age);
console.log(price);

x=null;
y=undefined;
isFollow=true;
console.log(isFollow);
isFollow=false;
console.log(isFollow);
console.log(y);
console.log(x);

name=26;
console.log(name);

let fullName="Bibhuti Bhusan"; //can't be redeclared but can updated
console.log(fullName);

var x=10; //can be redeclared and can be updated
var x=20;
var x=30;
console.log(x);

const pi=3.14; //can't be updated and can't be redeclared
console.log(pi);


const student={
    fullName : "Bibhuti",
    age : 20,
    cgpa : 8.8,
    isPass : true,
};

student.fullName="Bibhuti Bhusan";
student["fullName"]="Bibhuti";
student.age=21;
