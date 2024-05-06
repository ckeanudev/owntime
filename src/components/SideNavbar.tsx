"use client";

import { links } from "@/constants/navigations";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaClipboardList, FaMoneyCheck } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const SideNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-screen sticky top-0 left-0 min-w-[300px] flex flex-col p-6 border-r bg-white">
      <Image
        src="./images/Owntime.svg"
        width={140}
        height={80}
        alt="owntime-logo"
      />

      <div className="mt-12 flex flex-col gap-3 flex-1">
        {links.map((link: any) => (
          <Link
            href={link.url}
            className={`font-medium flex items-center gap-3 p-3 rounded-lg ${
              link.url === pathname
                ? `bg-dark-1 text-white`
                : `hover:bg-light-2`
            }`}
            key={link.id}
          >
            {link.id === 1 && <MdDashboard size={18} />}
            {link.id === 2 && <FaClipboardList size={18} />}
            {link.id === 3 && <FaMoneyCheck size={18} />}
            {link.id === 4 && <FaPeopleGroup size={18} />}

            {link.name}
          </Link>
        ))}
      </div>

      <div className="w-full">
        <p className="text-sm">Developed by Ckeanu</p>
      </div>
    </nav>
  );
};

export default SideNavbar;
