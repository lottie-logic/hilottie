"use client";

import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import CourseOptions from "./components/Courses";
import { useContext } from "react";
import { ThemeContext } from "./Providers";
import { CourseContext } from "./contexts/CourseContext";
import { usePathname } from "next/navigation";

const useTheme = () => useContext(ThemeContext);
export default function Home() {
  const theme = useTheme();
  console.log("ThemeContext", theme);

  // const theme = useTheme();
  // Your rendering logic for courseData
  return (
    <div className="grid  grid-flow-col grid-cols-3 gap-4 bg-cream h-[80vh] w-[100vw] ">
      <div className="col-span-1  bg-cream  overflow-x-scroll scrollbar-hide">
        <div className="flex-1 min-w-full flex-col ">
          {/* <CourseOptions onSelect={undefined} /> */}
          {/* <Tabs aria-label="Options">
            <Tab key="photos" title="Photos"> 
              <Card className="flex-grow">
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs> */}
        </div>
      </div>
      <div className="col-span-1  bg-purple-300 ">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
