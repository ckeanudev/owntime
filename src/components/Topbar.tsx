"use client";

import { links } from "@/constants/navigations";
import { usePathname } from "next/navigation";

const Topbar = () => {
  const pathname = usePathname();

  const headerText: any = links.find((link: any) => link.url === pathname);

  return (
    <section className="flex w-full justify-between gap-2 mb-5">
      <h1 className="text-3xl font-bold">{headerText.name || ""}</h1>

      <div className="flex items-center gap-2"></div>
    </section>
  );
};

export default Topbar;
