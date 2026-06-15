import { Folders, History, Inbox, LucideIcon, NotebookPen, Search, Sparkles, SquarePen, WandSparkles } from "lucide-react";

type MobileNavLinksType = {
  name: string;
  subCategories?: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
};
export const mobileNavLinks: MobileNavLinksType[] = [
  {
    name: "Product",
    subCategories: [
      { name: "Capture", href: "/capture", icon: SquarePen },
      { name: "Organise", href: "/organise", icon: Folders },
      { name: "Recall", href: "/recall", icon: History },
      { name: "Create", href: "/create", icon: WandSparkles },
    ],
  },
  { name: "Solution" },
  { name: "Resources" },
];
