// 🚀 **Day 17 Challenge: Start Coding!** 🚀

// **Question 49:** Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function multipleHobbies(...hobbies: string[]) {
  hobbies.forEach((hobby) => {
    console.log(`I love ${hobby}.`);
  });
}
multipleHobbies("reading", "playing", "programming");
console.log(`\n`)
// **Question 50:** Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
let myIdealDay = `My ideal day involve:
1. Waking early in the morning and pray all prayers on time.
2. Focusing on the coding.
3. Outing with freinds.`
console.log(myIdealDay);
console.log(`\n`)
// **Question 51:** Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateArea(width: number, height: number): number{
    return width* height;
}
let calculateAreaArrow = (width: number, height: number):number => width* height;
console.log(`Area of Rectangle is ${calculateAreaArrow(5,8)}`);
