var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log("Before deleting property of roll no:");
for(let item in student){
    console.log(item,"=>",student[item]);
}
delete student.rollno;
console.log("After deleting property of roll no:");
for(let item in student){
    console.log(item,"=>",student[item]);
}