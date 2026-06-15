"use client";
import { mobileNavLinks } from "@/lib/constants/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
import Link from "next/link";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="md:hidden block relative">
      {open ? (
        <RxCross2 size={25} onClick={() => setOpen((prev) => !prev)} />
      ) : (
        <HiOutlineBars2 size={25} onClick={() => setOpen((prev) => !prev)} />
      )}

      <div
        className={cn(
          "fixed flex flex-col inset-x-0 px-5 py-6 top-14 bottom-0 overflow-y-auto bg-white transition-all duration-300 ease-out gap-3",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        {mobileNavLinks.map((link) => (
          <h1 key={link.name} className="font-semibold text-lg ">
            {link.name}
          </h1>
        ))}

        <Button
          variant={"secondary"}
          asChild
          className="px-4 py-4 text-sm font-normal"
        >
          <Link href={"/login"}>Log in</Link>
        </Button>
        <Button asChild className="px-4 py-4 text-sm font-normal">
          <Link href={"/sign-in"}>Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
