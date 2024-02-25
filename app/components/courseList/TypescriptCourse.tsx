import React from "react";
import Link from "next/link";

export default function TypescriptCourse() {
  const topics = [
    {
      title: "Getting Started with TypeScript in React",
      description:
        "Learn how to integrate TypeScript into your React projects for improved development experience and application scalability.",
      slug: "getting-started",
    },
    {
      title: "TypeScript Fundamentals for React",
      description:
        "Understand the core concepts of TypeScript that are essential for React development.",
      slug: "typescript-fundamentals",
    },
    {
      title: "Creating Functional Components with TypeScript",
      description:
        "Dive into creating React functional components using TypeScript, focusing on typing props and state effectively.",
      slug: "functional-components",
    },
    {
      title: "Using TypeScript with React Hooks",
      description:
        "Explore how to use TypeScript with React Hooks to enforce typing on your state and logic.",
      slug: "react-hooks",
    },
    {
      title: "Type Checking in React with TypeScript",
      description:
        "Master the art of type checking in React components, improving your app's reliability and maintainability.",
      slug: "type-checking",
    },
    // Add more topics as needed...
  ];

  return (
    <div className="bg-cream min-h-screen p-10 space-y-6">
      <h1 className="text-3xl font-bold mb-6">React with TypeScript Course</h1>

      {topics.map((topic, index) => (
        <div
          key={index}
          className="bg-white shadow-neu-outer rounded-lg p-6 transform transition duration-500 hover:scale-105"
        >
          <h2 className="text-2xl font-bold">{topic.title}</h2>
          <p className="text-gray-700 mt-2">{topic.description}</p>
          <Link href={`/react-with-typescript/${topic.slug}`} passHref>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
