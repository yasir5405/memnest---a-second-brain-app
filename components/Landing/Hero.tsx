import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col h-110 justify-center gap-4 md:gap-6">
      <Link
        href={"/"}
        className="text-xs md:text-sm flex gap-1 hover:gap-1.5 transition-all duration-150 ease-in items-center"
      >
        <span>
          Framer 3.0 is here{" "}
          <span className="text-muted-foreground">
            See everything we shipped
          </span>
        </span>
        <ArrowRightIcon className="size-4 text-muted-foreground hidden md:block" />
      </Link>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-semibold font-heading">
          Everything You Know.
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold font-heading">
          Instantly Accessible.
        </h1>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground">
        A centralized memory layer for your notes, conversations, documents, and
        ideas.
      </p>

      <div className="w-full flex flex-col md:flex-row gap-3">
        <Button className="px-4 py-4 text-sm font-semibold">
          Get started for free
        </Button>
        <Button
          className="px-4 py-4 text-sm font-semibold"
          variant={"secondary"}
          asChild
        >
          <Link href={"/sign-up"}>Sign up for Memnest</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
