// "use client";

// import { CourseProvider } from "../contexts/CourseContext";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <CourseProvider>{children}</CourseProvider>;
// }

"use client";

import { createContext, useContext } from "react";
import { CourseProvider } from "./contexts/CourseContext";

export const ThemeContext = createContext({});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value="dark">
      <CourseProvider>{children}</CourseProvider>
    </ThemeContext.Provider>
  );
}
