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
          "fixed flex flex-col inset-x-0 px-5 pt-6 top-14 bottom-0 overflow-y-auto bg-background transition-all duration-300 ease-out gap-6",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <Accordion
          type="single"
          collapsible
          defaultValue=""
          className="w-full gap-6"
        >
          {mobileNavLinks.map(({ name, subCategories }) => (
            <AccordionItem value={name} key={name}>
              <AccordionTrigger className="font-normal text-neutral-400/90 transition-all duration-200 ease-linear text-base data-open:text-white">
                {name}
              </AccordionTrigger>
              <AccordionContent className=" overflow-visible">
                <div className="flex flex-col pl-2 gap-2 py-3 justify-center">
                  {subCategories?.map(({ href, name, icon: Icon }) => (
                    <Link
                      href={href}
                      key={name}
                      className="text-sm flex items-center gap-2"
                    >
                      <Icon className="size-4" strokeWidth={1.7} />
                      {name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Link
          href={"/customers"}
          className="font-normal text-neutral-400/90 text-base"
        >
          Customers
        </Link>
        <Link
          href={"/pricing"}
          className="font-normal text-neutral-400/90 text-base"
        >
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
