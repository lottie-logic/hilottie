import Javascript from "./Javascript";
import TypescriptCourse from "./TypescriptCourse";

export const courseList = [
  {
    title: "HTML",
    img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZybnd4NG0weDlwMTQ2dDdqOXA1N3EwcG90ZDh1ajZlbmo5Nm95YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3osxYcHkIWl29UKdoc/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=aoHK8skFZ1U",
    starterCode: `
let fizzBuzz = function (n) {
let arr = [];

for (let i = 0; i < n; i++) {
if (i % 15 === 0) arr.push("FizzBuzz")
else if (i % 3 === 0) arr.push("Fizz")
else if (i % 5 === 0) arr.push("Buzz")
else arr.push(i.toString())
}
return arr
}
fizzBuzz(24); `,
    path: "html", // Added path option
  },
  {
    title: "Javascript",
    img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29mZGFnazI2c2pyMnQyeGVheXBsZnZ1Z3Y1N3Q5dndmc2oydzVvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sE1fbQPozKg3q5I2W2/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=aoHK8skFZ1U",
    starterCode: `
let fizzBuzz = function (n) {
let arr = [];

for (let i = 0; i < n; i++) {
if (i % 15 === 0) arr.push("FizzBuzz")
else if (i % 3 === 0) arr.push("Fizz")
else if (i % 5 === 0) arr.push("Buzz")
else arr.push(i.toString())
}
return arr
}
fizzBuzz(24); `,
    path: "javascript", // Added path option
  },
  {
    title: "Typescript",
    img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGd6ZWVrdW9sZHJ0dHhka3RtNHV3ejB5dHhhNTZjNTJwaTBwOHM5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13HgwGsXF0aiGY/giphy.gif",
    code: <TypescriptCourse />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "typescript", // For example purposes, using 'javascript' for all
  },
  {
    title: "Computer Science",
    img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2todmg2N2hrbnlpMG1iZW14N2g0ZHJxM3p2bmFkNHI3cThoNGNmcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ThrM4jEi2lBxd7X2yz/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "computer-science",
  },

  {
    title: "Next.JS",
    img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGIxaXhlbnEwaXB5M2phbjU2NnNqdDY5bnd2ZGc2bTQyODBrNGFueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/elrFAUtV7ZOH7TSPhF/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "javascript", // Added path option
  },
  {
    title: "CSS",
    img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTZ5MHRodzN6eDhqYzFncnp5dGZhemh2NHd1NHBqaW5hY29lNzJjZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "css", // For example purposes, using 'javascript' for all
  },
  {
    title: "AI",
    img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWNnNGFqdmo5OGt1M3dmNm45Y2w0dnAzOWQ1a3kzczV3a3EyOGgxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IZY2SE2JmPgFG/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "ai", // Added path option
  },
  {
    title: "Interview Prep",
    img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVsd2V3cnQ3dzd4Zml2bXNobnhoeW45dDlxOHIwaDlycHVqejB2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6Q3M4BIK0lX44/giphy.gif",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "computer-science",
  },
  {
    title: "HTML",
    img: "https://media2.giphy.com/media/zDXrOAcVnSbsJdsJdm/giphy.gif?cid=ecf05e47d1592mxv967ctoi5x0f3x97bl1qmp0k0nz4ss91j&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    code: <Javascript />,
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: `const helloLottie = 42`,
    path: "html", // Added path option
  },
];
