import React from "react";
import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "./ui/empty";

const Project = () => {
  return (
    <div className="mx-32 mt-20 ">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">My Projects</h2>
        <Button>Create project</Button>
      </div>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderCodeIcon />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects yet. Get started by creating
            your first project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button>Create Project</Button>
            </div>
        </EmptyContent>
        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <a href="#">
            Learn More <ArrowUpRightIcon />
          </a>
        </Button>
      </Empty>
    </div>
  );
};

export default Project;
