const student={
    name:"yashu",
    age:20,
    course:"FSD",
    marks:85
};
const jsonData=JSON.stringify(student);
console.log("JSONData");
console.log(jsonData);
const obj=JSON.parse(jsonData);
console.log("\n javascript object:");
console.log(obj);
console.log("\n Student Name:",obj.name);
console.log("Course:",obj.course);
console.log("Marks:",obj.marks);