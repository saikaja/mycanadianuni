"use client";

import React, { useState } from "react";
import univData from "./data";
import courseData from "./coursedata";
import links from "./links";

export default function Finder() {
  const [searchBy, setSearchBy] = useState("University");
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
    setCourse("");
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
    setUniversity("");
  };

  // Function to get the link or "No Data"
  const getLink = () => {
    var key = university + course;
    console.log("University:", university);
    console.log("Course:", course);
    key = key.replaceAll(" ", "");
    return links[key] || "No Data";
  };

  return (
    <main>
      <nav className="flex flex-row justify-center items-center p-8 bg-blue-50 dark:bg-blue-900">
        <div className="relative flex flex-row space-x-2 items-center">
          <div className="absolute h-6 w-4 bg-blue-500 z-10"></div>
          <div className="absolute top-0 left-1 h-6 w-4 bg-green-500"></div>
          <h1 className="pl-8 text-2xl font-bold italic text-gray-700 dark:text-gray-50">
            University Course Selections
          </h1>
        </div>
      </nav>

      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-10 pt-5 lg:px-40 bg-blue-50 dark:bg-blue-900">
        <div className="mx-auto md:mb-10 mb-2 md:mt-10">
          <div className="badge bg-green-500 inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 text-gray-50">
              Here we go
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Let&apos;s search the index!
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Fill the form to find out the university or course you are searching
            for.
          </p>
          <div
            className={
              getLink() !== "No Data"
                ? "badge bg-blue-500 w-full h-14 inline-block rounded-xl mt-5 flex items-center justify-center animate-pulse"
                : "badge bg-blue-500 w-full h-14 inline-block rounded-xl mt-5 flex items-center justify-center"
            }
          >
            <p className="font-heavy text-base text-gray-50 px-3 py-1">
              {getLink() !== "No Data" ? (
                <a href={getLink()} target="_blank" rel="noopener noreferrer">
                  Click Here: {course} ({university})
                </a>
              ) : (
                "No Data"
              )}
            </p>
          </div>
        </div>

        <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
          <h1 className="text-1xl font-bold dark:text-gray-50">
            Choose by University or Course
          </h1>

          <select
            name="searchBy"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500 mt-5"
          >
            <option value="University">University</option>
            <option value="Course">Course</option>
          </select>

          {searchBy === "University" && (
            <>
              <label
                htmlFor="university"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
              >
                Select a university
                <span className="text-red-500 dark:text-gray-50">*</span>
              </label>
              <select
                name="university"
                value={university}
                onChange={handleUniversityChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              >
                <option value="" disabled>
                  Select University
                </option>
                {[...new Set(univData.universities)].map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>

              <label
                htmlFor="course"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
              >
                Select a course
                <span className="text-red-500 dark:text-gray-50">*</span>
              </label>
              <select
                name="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              >
                <option value="" disabled>
                  Select Course
                </option>
                {[...new Set(univData[university] || [])].map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </>
          )}

          {searchBy === "Course" && (
            <>
              <label
                htmlFor="course"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
              >
                Select a course
                <span className="text-red-500 dark:text-gray-50">*</span>
              </label>
              <select
                name="course"
                value={course}
                onChange={handleCourseChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              >
                <option value="" disabled>
                  Select Course
                </option>
                {[...new Set(courseData.courses)].map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>

              <label
                htmlFor="university"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
              >
                Select a university
                <span className="text-red-500 dark:text-gray-50">*</span>
              </label>
              <select
                name="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              >
                <option value="" disabled>
                  Select University
                </option>
                {[...new Set(univData.universities)].map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>
            </>
          )}
        </form>
      </header>
    </main>
  );
}
