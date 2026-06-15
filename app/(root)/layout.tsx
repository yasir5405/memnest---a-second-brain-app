import Navbar from "@/components/Header/Navbar";

export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="min-h-dvh w-full flex flex-col px-5 md:px-60 relative">

      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
