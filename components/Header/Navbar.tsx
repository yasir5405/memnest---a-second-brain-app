import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "w-full h-16 px-5 md:px-60 fixed top-0 left-0 z-10 flex items-center justify-between transition-all duration-200 ease-linear bg-background",
      )}
    >
      <Link href={"/"} className="font-bold text-xl">
        <DiaTextReveal
          className="text-xl font-semibold tracking-tight"
          text="Memnest"
          colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
        />
      </Link>

      <NavMenu />

      <MobileNav />

      <div className="h-full w-fit hidden md:flex items-center justify-center gap-2">
        <Button
          size={"lg"}
          variant={"outline"}
          className="px-4 py-4 text-muted-foreground font-normal"
          asChild
        >
          <Link href={"/login"}>Log in</Link>
        </Button>

        <Button className="px-4 py-4 font-semibold" asChild>
          <Link href={"/sign-up"}>Sign up</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
