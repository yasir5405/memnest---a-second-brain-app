import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col h-110 justify-center gap-4 md:gap-6">
      <Link
        href={"/"}
        className="text-xs md:text-sm flex flex-col md:flex-row gap-0 md:gap-1"
      >
        Memnest 1.0 is here{" "}
        <span className="text-muted-foreground flex items-center gap-1 hover:gap-1.5 transition-all duration-150 ease-in">
          See everything we shipped
          <ArrowRightIcon className="size-4 text-muted-foreground" />
        </span>
      </Link>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold font-heading">
          Everything You Know.
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold font-heading">
          Instantly Accessible.
        </h1>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground">
        A centralized memory layer for your notes, conversations, documents, and
        ideas.
      </p>

      <div className="w-full flex gap-3">
        <Button className="md:px-4 md:py-4 text-xs md:text-sm font-semibold">
          Get started for free
        </Button>
        <Button
          className="md:px-4 md:py-4 text-xs md:text-sm font-semibold"
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
