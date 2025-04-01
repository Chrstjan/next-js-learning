"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Nav.module.scss";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? s.activeLink : ""}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? s.activeLink : ""}
          >
            About
          </Link>
          <Link
            href="/register"
            className={pathname === "/register" ? s.activeLink : ""}
          >
            Register
          </Link>
          <Link
            href="/login"
            className={pathname === "/login" ? s.activeLink : ""}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
