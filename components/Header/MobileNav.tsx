"use client";
import { mobileNavLinks } from "@/lib/constants/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="md:hidden block relative">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <RxCross2 size={22} onClick={() => setOpen((prev) => !prev)} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <HiOutlineBars2
              size={25}
              onClick={() => setOpen((prev) => !prev)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "fixed flex flex-col inset-x-0 px-5 py-6 top-14 bottom-0 overflow-y-auto bg-white transition-all duration-300 ease-out gap-3",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <Accordion
          type="single"
          collapsible
          defaultValue=""
          className="w-full gap-3.5"
        >
          {mobileNavLinks.map(({ name, subCategories }) => (
            <AccordionItem value={name} key={name}>
              <AccordionTrigger className="font-semibold text-lg data-open:text-primary">
                {name}
              </AccordionTrigger>
              <AccordionContent className="py-4 overflow-visible">
                <div className="flex flex-col pl-2 gap-2">
                  {subCategories?.map(({ href, name, icon: Icon }) => (
                    <Link
                      href={href}
                      key={name}
                      className="text-lg flex items-center gap-2"
                    >
                      <Icon className="size-4" strokeWidth={1.7}/>
                      {name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Link href={"/customers"} className="font-semibold text-lg">
          Customers
        </Link>
        <Link href={"/pricing"} className="font-semibold text-lg">
          Pricing
        </Link>

        <Button
          variant={"outline"}
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
