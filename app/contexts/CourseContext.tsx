"use client";

// contexts/CourseContext.js
import React, { createContext, useContext, useState } from "react";
export const CourseContext = createContext(null);

// Export the useContext Hook directly for simplicity
export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};

export const CourseProvider = ({ children }) => {
  const [courses] = useState([
    {
      title: "Javascript",
      img: "https://media1.giphy.com/media/jsJavascriptGif/giphy.gif",
      code: "<JavascriptCodeSnippet />",
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
      path: "javascript",
    },
    {
      title: "HTML",
      img: "https://media1.giphy.com/media/html5HTMLGif/giphy.gif",
      code: "<HtmlCodeSnippet />",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      starterCode: `<!DOCTYPE html><html><body>Hello, HTML!</body></html>`,
      path: "html",
    },
    {
      title: "TypeScript",
      img: "https://media1.giphy.com/media/tsTypeScriptGif/giphy.gif",
      code: "<TypeScriptCodeSnippet />",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      starterCode: `console.log('Hello, TypeScript!');`,
      path: "typescript",
    },
  ]);

  const getCourseByPath = (path) =>
    courses.find((course) => course.path === path);

  // Ensure the value is correctly structured as an object
  const value = { courses, getCourseByPath };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
