import next from "next/types";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
const dashboardLayout = ({ children }) => {
  const links = [
    { href: "/home", label: "Home" },
    { href: "/journal", label: "Journal" },
    { href: "/analysis", label: "Analysis" },
  ];
  return (
    <div>
      <header  className="flex justify-between items-center">
      <h1>Dashboard Layout</h1>
      <UserButton className="self-center" />

      </header>
     
      <aside>
        {" "}
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </aside>
      <main className="flex justify-center">{children}</main>
    </div>
  );
};

export default dashboardLayout;
