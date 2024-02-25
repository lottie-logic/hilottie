"use client";

// import React from "react";
// import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import CourseOptions from "../components/Courses";

// export default function Courses() {
//   return (
//     // <div className="flex bg-red-400 h-screen justify-center items-center">
//     // <div className="flex bg-red-400 h-screen justify-center items-center">
//     <div className="grid  grid-flow-col grid-cols-2 gap-4 bg-cream h-[80vh] w-[100vw] ">
//       <div className="col-span-1  bg-cream  overflow-x-scroll scrollbar-hide">
//         <div className="flex-1 p-4 min-w-full flex-col">
//           <CourseOptions />
//         </div>
//       </div>
//       <div className="col-span-1  bg-purple-300 ">
//         <div className="flex w-full flex-col">
//           show course content here on click
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// }

// In your Courses.js file

import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import CourseOptions from "../components/Courses";
import JavascriptCourse from "../components/courseList/Javascript";

export default function Courses() {
  // State to keep track of the selected course
  const [selectedCourse, setSelectedCourse] = useState({
    title: "Javascript",
    img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjEx…9naWZfYnlfaWQmY3Q9Zw/SvFocn0wNMx0iv2rYz/giphy.gif",
    videoUrl: "https://www.youtube.com/watch?v=_gRxCvDjWjs",
    starterCode: "const helloLottie = 42",
    code: <JavascriptCourse />,
  });

  // Callback function to update the selected course
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="grid grid-flow-col grid-cols-2 gap-4 bg-cream h-[80vh] w-[100vw]">
      <div className="col-span-1 bg-cream overflow-x-scroll scrollbar-hide pt-4 ">
        <div className="flex-1 p-4 min-w-full flex-col rounded-xl  bg-cream  shadow-neu-inner pb-10">
          <CourseOptions onSelect={handleCourseSelect} />
        </div>
      </div>
      <div className="col-span-1 overflow-x-scroll scrollbar-hide  ">
        <div className="flex w-full flex-col ">
          {/* Display selected course content here */}
          {selectedCourse ? (
            <div className="">{selectedCourse.code}</div>
          ) : (
            "Select a course to see its content."
          )}
        </div>
      </div>
    </div>
  );
}
