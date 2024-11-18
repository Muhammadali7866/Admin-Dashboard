"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

type MenuItem = {
  title: string;
  path: string;
  icon: string;
};

const MenuLink = ({ item }: { item: MenuItem }) => {
  // Normalize paths to avoid trailing slash issues
  const path = usePathname();
  const isActive = path.replace(/\/$/, "") === item.path.replace(/\/$/, "");

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${isActive ? styles.active : ""}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
