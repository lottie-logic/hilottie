"use client";

import React, { useContext } from "react";
import { usePathname } from "next/navigation"; // Next.js 13+ navigation hooks
import { CourseContext } from "@/app/contexts/CourseContext"; // Ensure the path is correct
import LiveCode from "@/app/components/LiveCodeEditor/LiveCodeEditor";

const CourseDetail = () => {
  const { getCourseByPath } = useContext(CourseContext);
  const pathname = usePathname();
  const coursePath = pathname.split("/").pop(); // Assuming the last segment is the course path

  const courseData = getCourseByPath(coursePath);

  if (!courseData) {
    return <div>Course not found.</div>;
  }

  // Rendering logic with grid layout for courseData
  return (
    <div className="grid grid-flow-col grid-cols-2 gap-4 bg-cream h-[80vh] w-[100vw]">
      <div className="col-span-1 bg-cream overflow-x-scroll scrollbar-hide">
        <div className="flex-1 min-w-full flex-col">
          {/* Optionally render starter code if available */}
          {/* {courseData.starterCode && <pre>{courseData.starterCode}</pre>} */}

          <LiveCode renderNow={true} initialValue={courseData.starterCode} />
        </div>
      </div>
      <div className="col-span-1 bg-cream">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-2xl mb-4">{courseData.title}</h1>
          {/* Ensure there's a video URL to render */}
          {courseData.videoUrl && (
            <iframe
              className="rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ec8vSKJuZTk?si=OJ6xOgN5kGPZZKW0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
