//object destructure
const course = {
  courseName: "javascript",
  price: "999",
  courseInstructor: "sanjeev",
};

//const { courseInstructor } = course; // destructure

const { courseInstructor: insructor } = course; // destructure with custom name
console.log(insructor);
//console.log(courseInstructor);
