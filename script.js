/*
about us project💫

 Name of the programmer:
1- Fateme Satouri
2- Rahela Shirazi

project name :
School information

Project description:
 In this project, we have to build the structure of a school and calculate the grades of each student.
For example :
Average
my maximum
minimum
We did this by ids and with the help of map and forEach.

start date:
December 23

end of the project:
December 24

email:navayearamm@gmail.com
 */

//Construction of school objects
const school = {
  /* A class array:
There are several different objects of the class inside this presentation */
  class: [
    {
      className: "classA",
      maxStudent: 10,
      classNumber: 202,
      classId: "1CA",
    },
    {
      className: "classB",
      maxStudent: 20,
      classNumber: 102,
      classId: "1CB",
    },
    {
      className: "classC",
      maxStudent: 15,
      classNumber: 205,
      classId: "1CC",
    },
  ],
  /* A student array:
Each school has a large number of students, each of which we put in an object.*/
  student: [
    {
      nameStudent: "Ali",
      FamilyStudent: "Taghavi",
      age: 12,
      scores: 13,
      nationalNumber: "515165166",
      classId: "1CA",
      studentId: "10H",
    },
    {
      nameStudent: "Raha",
      FamilyStudent: "Jamali",
      age: 15,
      scores: 16,
      nationalNumber: "15667257",
      classId: "1CC",
      studentId: "12L",
    },
    {
      nameStudent: "Mohsen",
      FamilyStudent: "Poorsaadet",
      age: 16,
      scores: 19,
      nationalNumber: "106516051",
      classId: "1CB",
      studentId: "0K5",
    },
    {
      nameStudent: "Mahla",
      FamilyStudent: "lorestani",
      age: 11,
      scores: 15,
      nationalNumber: "0315616516",
      classId: "1CC",
      studentId: "5P9",
    },
    {
      nameStudent: "Nikan",
      FamilyStudent: "karami",
      age: 14,
      scores: 20,
      nationalNumber: "0616516",
      classId: "1CB",
      studentId: "8F7",
    },
    {
      nameStudent: "Nikoo",
      FamilyStudent: "Kamali",
      age: 15,
      scores: 11,
      nationalNumber: "0616516",
      classId: "1CA",
      studentId: "9SP",
    },
  ],
  /* A score array:
Each student has a score. */
  score: [
    {
      levelScore: "A",
      studentId: ["8F7", "0K5"],
      classId: ["1CB", "1CB"],
    },
    {
      levelScore: "B",
      studentId: ["5P9", "12L"],
      classId: ["1CC", "1CC"],
    },
    {
      levelScore: "C",
      studentId: ["10H", "9SP"],
      classId: ["1CA", "1CA"],
    },
  ],
  /* Well, lesson array:
In this section, the names of various subjects that are taught in this school are mentioned */
  lesson: [
    {
      title: "math",
      teacherId: ["T56"],
      lessonId: "M7T",
    },
    {
      title: "sport",
      teacherId: ["T12"],
      lessonId: "S7O",
    },
    {
      title: "chemistry",
      teacherId: ["T90"],
      lessonId: "C7Y",
    },
    {
      title: "physics",
      teacherId: ["T88"],
      lessonId: "P7P",
    },
  ],
  /* Well, teacher, each school has several teachers and each class has a teacher. */
  teacher: [
    {
      name: "Farnoosh",
      Family: "Mahmoodi",
      teacherId: "T88",
      lessonId: ["P7P"],
    },
    {
      name: "Parsa",
      Family: "Mohammadi",
      teacherId: "T90",
      lessonId: ["C7Y"],
    },
    {
      name: "Pooneh",
      Family: "Pashaie",
      teacherId: "T12",
      lessonId: ["S7O"],
    },
    {
      name: "Omid",
      Family: "Saboori",
      teacherId: "T56",
      lessonId: ["M7T"],
    },
  ],
};

const maxScores = school.student.map((student) => student.scores);
console.log(maxScores); // Getting the grades of each student through map

// Start calculating scores
let sum = 0;
let maxNumber = Number.MIN_VALUE;
let minNumber = Number.MAX_VALUE;
for (let i = 0; i < maxScores.length; i++) {
  //Get the sum of the scores, the lowest and the highest score
  let number = parseInt(maxScores[i]); //Convert all elements in the array to numbers
  if (!isNaN(number)) {
    //If error: This is not a number. He didn't give it, so put it in the number
    sum += number;
    if (number > maxNumber) {
      maxNumber = number;
    }
    if (number < minNumber) {
      minNumber = number;
    }
  }
}

console.log("Sum of numbers : " + sum); //Display sum of numbers
console.log("Maximum number : " + maxNumber); //Display maxmem of numbers
console.log("Minimum number : " + minNumber); //Display minimum of numbers

// Obtain the average of each class

// define object
const classAverages = {};
school.student.forEach((student) => {
  //Initialize each class with forEach
  if (!classAverages[student.classId]) {
    classAverages[student.classId] = {
      sum: 0,
      count: 0,
      average: 0,
      grade: "",
    };
  }
  classAverages[student.classId].sum += student.scores; //Contains total scores
  classAverages[student.classId].count++; //The number of students based on the number of grades
});

for (const classId in classAverages) {
  const averageScore =
    classAverages[classId].sum / classAverages[classId].count; //Get the average
  classAverages[classId].average = averageScore;

  if (averageScore >= 18) {
    //Classification of the average scores of each class in the specified indicators
    classAverages[classId].grade = "A";
  } else if (averageScore >= 16) {
    classAverages[classId].grade = "B";
  } else if (averageScore >= 14) {
    classAverages[classId].grade = "C";
  } else {
    classAverages[classId].grade = "D";
  }
}

console.log(classAverages);


// find classId by studentId
let studentIdToClassId = {};
for (let students of school.student) {
  studentIdToClassId[students.studentId] = students.classId;
}

// Example usage
let studentId = prompt("Enter the studentId: ");
let classId = studentIdToClassId[studentId];
if (classId) {
  console.log(`The classId of the student with studentId ${studentId} is: ${classId}`);
} else {
  console.log("StudentId not found.");
}
