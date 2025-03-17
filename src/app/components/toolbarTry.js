"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  about_page,
  contact_page,
  home_page_url,
  photos_page,
  resume_page,
  work_page,
} from "@/constants/urls";
import { usePathname } from "next/navigation";
import {
  NavbarAbout,
  NavbarCV,
  NavbarHome,
  NavbarMail,
  NavbarPhotos,
  NavbarWork,
} from "@/constants/icons";
// import ThemeToggle from "./themeToggle";

const navLinks = [
  { href: home_page_url, label: "Home", icon: <NavbarHome /> },
  { href: work_page, label: "Work", icon: <NavbarWork /> },
  { href: about_page, label: "About", icon: <NavbarAbout /> },
  { href: photos_page, label: "Photos", icon: <NavbarPhotos /> },
  { href: resume_page, label: "Resume", icon: <NavbarCV /> },
];

export default function NavbarTest() {
  const pathname = usePathname();
  const [shrink, setShrink] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 200);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      className="navbar"
      animate={{
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`navbar-container ${shrink && !hovered ? "shrink-gap" : ""}`}
      >
        <Link href="/" className="nav-logo">
          <svg
            width="51"
            height="40"
            viewBox="0 0 51 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.0043 14.8487C39.3915 15.5534 39.7932 16.2677 40.2074 16.9843C43.011 21.8353 46.1462 26.3726 48.9544 28.8906L43.6137 34.8469C40.3381 31.9098 37.1751 27.4439 34.5275 23.0908C31.9889 27.2746 28.8399 31.6896 25.3729 34.8323L20 28.9051C22.8248 26.3445 25.6888 22.332 28.1739 18.1298C28.8184 17.04 29.426 15.957 29.9898 14.9089C28.617 12.2057 27.5313 9.83987 26.8627 8.24284L34.242 5.15317C34.5964 5.9996 35.0975 7.12195 35.7175 8.42791L40.9339 10.5883C40.4532 11.749 39.8001 13.209 39.0043 14.8487Z"
              fill="#011438"
            />
          </svg>
        </Link>

        {navLinks.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={`/${href}`}
            className={`nav-items-link ${pathname === `/${href}` ? "opacity-1" : ""}`}
          >
            <div className="nav-one">
              <div
                className={`nav-dot ${pathname === `/${href}` ? "nav-active-dot" : ""}`}
              ></div>
              {icon}
            </div>
            <motion.span
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              className={`nav-items-text ${pathname === `/${href}` ? "opacity-1" : ""}`}
              initial={{ width: "auto" }}
              animate={{
                // width: shrink && !hovered ? 0 : "auto",
                width: isSmallScreen ? "auto" : shrink && !hovered ? 0 : "auto",
              }}
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.span>
          </Link>
        ))}
        {/* <ThemeToggle /> */}
        <Link href={`/${contact_page}`} className={`project-btn navbar-btn`}>
          Get in touch
        </Link>
      </div>
    </motion.nav>
  );
}
