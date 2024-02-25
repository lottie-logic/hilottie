import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function DocsTabs({ Resources, Questions, Books }) {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="Questions" title="Questions">
          <Card>
            <CardBody>{Questions}</CardBody>
          </Card>
        </Tab>
        <Tab key="Resources" title="Resources">
          <Card>
            <CardBody>{Resources}</CardBody>
          </Card>
        </Tab>
        <Tab key="Books" title="Books">
          <Card>
            <CardBody>{Books}</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
