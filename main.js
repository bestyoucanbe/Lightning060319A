const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
//This sends out the entire object
console.log('empirestatebuilding', empireStateBuilding);
//This sends out every key in the object
for (let foo in empireStateBuilding) {
  console.log(`empire state building ${foo}: `, empireStateBuilding[foo]);
}
// Outputting individual values:
console.log ('------------'); //create a separation!
console.log('empire state building stories', empireStateBuilding.stories);
console.log('empire state building height', empireStateBuilding.height);

//Outputting using square bracket notation:

const holdAddress = "address";
const holdConstDate = "constructionDate";
console.log ('------------'); //create a separation!
console.log('empire building address', empireStateBuilding[holdAddress]);
console.log('empire building Construction Date', empireStateBuilding[holdConstDate]);

const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
      fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
      partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log ('------------'); 
console.log('part time instructors', nashvilleSoftwareSchool.instructors.partTime);
console.log('full time instructors', nashvilleSoftwareSchool.instructors.fullTime);
console.log('Andy', nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log('Zoe', nashvilleSoftwareSchool.instructors.partTime[0]);






