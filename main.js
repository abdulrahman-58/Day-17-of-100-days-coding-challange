// 🚀 **Day 17 Challenge: Start Coding!** 🚀
// **Question 49:** Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function multipleHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I love ".concat(hobby, "."));
    });
}
multipleHobbies("reading", "playing", "programming");
console.log("\n");
// **Question 50:** Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
var myIdealDay = "My ideal day involve:\n1. Waking early in the morning and pray all prayers on time.\n2. Focusing on the coding.\n3. Outing with freinds.";
console.log(myIdealDay);
console.log("\n");
// **Question 51:** Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log("Area of Rectangle is ".concat(calculateAreaArrow(5, 8)));
