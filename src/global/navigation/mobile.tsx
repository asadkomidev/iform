"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Sidebar from "./sidebar";

type Props = {};

const MobileSidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-48 p-0 bg-muted">
        <Sidebar className="mb-6" setIsOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
