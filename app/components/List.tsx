import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { courseList } from "./courseList/listObject";
import { fullStackList } from "../roadmap/frontendList";

export default function List({ onSelect }) {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-1">
      {fullStackList.map((item, index) => (
        <Card
          className=" rounded-xl  font-black shadow-neu-outer hover:shadow-neu-inner transition-all duration-300 ease-in-out"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => onSelect(item)} // Call onSelect with the course item
        >
          <CardBody className="overflow-visible p-0 "></CardBody>
          <CardFooter className="text-lg  text-center  tracking-widest	 justify-between uppercase">
            <b>{item.title}</b>
            {/* <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
