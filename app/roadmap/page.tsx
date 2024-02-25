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
import List from "../components/List";
import JavascriptMarkdown from "./frontend/javascript/page.mdx";
import HTMLMarkdown from "./frontend/html/page.mdx";

const markdownComponents = {
  javascript: JavascriptMarkdown,
  html: HTMLMarkdown,
  // otherCourseKey: OtherCourseMarkdown,
};

export default function Roadmap() {
  // State to keep track of the selected course
  const [selectedTopic, setSelectedTopic] = useState({
    title: "Javascript",
    path: "frontend/javascript",
    img: "javascript",
    markdown: JavascriptMarkdown,
  });

  // Callback function to update the selected course
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  console.log("sel", setSelectedTopic);

  const SelectedMDXComponent = selectedTopic.markdown;

  return (
    <div className="grid grid-flow-col grid-cols-4 gap-4 bg-cream h-[80vh] w-[100vw]">
      <div className="col-span-1 bg-cream overflow-x-scroll scrollbar-hide pt-4 ">
        <div className="flex-1 p-4 min-w-full flex-col rounded-xl  bg-cream  shadow-neu-inner pb-10">
          <List onSelect={handleTopicSelect} />
        </div>
      </div>
      <div className="col-span-3 overflow-x-scroll scrollbar-hide  ">
        <div className="flex w-full flex-col ">
          {SelectedMDXComponent ? (
            <div className="flex-1 p-4">
              <SelectedMDXComponent />
            </div>
          ) : (
            "Select a course to see its content."
          )}
        </div>
      </div>
    </div>
  );
}
