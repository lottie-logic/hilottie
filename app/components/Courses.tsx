import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { courseList } from "./courseList/listObject";

export default function Courses({ onSelect }) {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
      {courseList.map((item, index) => (
        <Card
          className=" rounded-xl   font-black shadow-neu-outer hover:shadow-neu-inner transition-all duration-300 ease-in-out"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => onSelect(item)} // Call onSelect with the course item
        >
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px]  shadow-neu-outer"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-lg  text-center  tracking-widest	 justify-between uppercase">
            <b>{item.title}</b>
            {/* <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
