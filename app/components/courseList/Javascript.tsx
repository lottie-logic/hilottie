import React from "react";
import Link from "next/link";

export default function JavascriptCourse() {
  return (
    <div className="bg-cream min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Modern JavaScript Course</h1>

      {/* Card 1 */}
      <Link href="/courses/javascript" passHref>
        <div className="cursor-pointer bg-white shadow-neu-outer rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Introduction to ES6+</h2>
          <p className="text-gray-700 mt-2">
            Discover the latest features introduced in ES6 and how they can
            simplify your JavaScript development process.
          </p>
        </div>
      </Link>

      {/* Card 2 */}
      <Link href="/courses/javascript" passHref>
        <div className="cursor-pointer bg-white shadow-neu-outer rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Asynchronous JavaScript</h2>
          <p className="text-gray-700 mt-2">
            Understand the asynchronous nature of JavaScript, working with
            promises, async/await, and handling asynchronous operations.
          </p>
        </div>
      </Link>

      {/* Card 3 */}
      <Link href="/courses/javascript" passHref>
        <div className="cursor-pointer bg-white shadow-neu-outer rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Modules in JavaScript</h2>
          <p className="text-gray-700 mt-2">
            Dive into JavaScript modules, import/export syntax, and best
            practices for organizing and structuring your code.
          </p>
        </div>
      </Link>

      {/* Additional Cards with animations */}
      {/* Card 4 */}
      <Link href="/courses/javascript" passHref>
        <div className="cursor-pointer bg-white shadow-neu-outer rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Promises and Error Handling</h2>
          <p className="text-gray-700 mt-2">
            Explore how to effectively work with Promises in JavaScript to
            handle asynchronous operations and errors.
          </p>
        </div>
      </Link>

      {/* Card 5 */}
      <Link href="/courses/javascript" passHref>
        <div className="cursor-pointer bg-white shadow-neu-outer rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Modern JavaScript Frameworks</h2>
          <p className="text-gray-700 mt-2">
            Get an overview of modern JavaScript frameworks, their ecosystems,
            and how they fit into today's web development landscape.
          </p>
        </div>
      </Link>
    </div>
  );
}
