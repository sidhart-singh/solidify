"use client";

import React from "react";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "./ui/input-group";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

const PromptBox = () => {
  return (
    <div className="w-full flex items-center justify-center mt-28">
      <div className=" flex flex-col items-center justify-center space-y-4">
        <h2 className="font-bold text-4xl">
          Describe your topic, we'll design the slide
        </h2>
        <p className="text-xl text-gray-500">
          Your design will be saved as a new project
        </p>
        <InputGroup>
          <InputGroupTextarea placeholder="Enter what kind of slider do you want to create" />
          <InputGroupAddon align="block-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost">
                  No. of Slides
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="end"
                className="[--radius:0.95rem] p-3 bg-white dark:bg-slate-800 rounded-md shadow-lg space-y-2"
              >
                <DropdownMenuItem>4-6 Slides</DropdownMenuItem>
                <DropdownMenuItem>6-8 Slides</DropdownMenuItem>
                <DropdownMenuItem>8-10 Slides</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent side="bottom">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select> */}
            <InputGroupButton
              variant="default"
              className="rounded-full ml-auto"
              size="icon-xs"
            >
              <ArrowRightIcon />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default PromptBox;
