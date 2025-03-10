"use client";
import {
  about_page,
  contact_page,
  photos_page,
  work_page,
} from "@/constants/urls";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Toolbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/">
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

        <Link
          href="/"
          className={`nav-items-link ${pathname === "/" ? "opacity-1" : ""}`}
        >
          <div
            className={`nav-dot ${pathname === "/" ? "nav-active-dot" : ""}`}
          ></div>
          Home
        </Link>
        <Link
          href={`/${work_page}`}
          className={`nav-items-link ${pathname === `/${work_page}` ? "opacity-1" : ""}`}
        >
          <div
            className={`nav-dot ${pathname === `/${work_page}` ? "nav-active-dot" : ""}`}
          ></div>
          Work
        </Link>

        {/* <Link
                  href={`/${contact_page}`}
                  className={`nav-items-link ${pathname === `/${contact_page}` ? "opacity-1" : ""}`}
                >
                  <div
                    className={`nav-dot ${pathname === `/${contact_page}` ? "nav-active-dot" : ""}`}
                  ></div>
                  Contact
                </Link> */}
        <Link
          href={`/${about_page}`}
          className={`nav-items-link ${pathname === `/${about_page}` ? "opacity-1" : ""}`}
        >
          <div
            className={`nav-dot ${pathname === `/${about_page}` ? "nav-active-dot" : ""}`}
          ></div>
          About
        </Link>
        <Link
          href={`/${photos_page}`}
          className={`nav-items-link ${pathname === `/${photos_page}` ? "opacity-1" : ""}`}
        >
          <div
            className={`nav-dot ${pathname === `/${photos_page}` ? "nav-active-dot" : ""}`}
          ></div>
          Photos
        </Link>
        <Link href={`/${photos_page}`} className={`project-btn navbar-btn`}>
          Get In Touch
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_244_566)">
              <path
                d="M10.6667 3.83331C10.6667 4.32798 11.1553 5.06665 11.65 5.68665C12.286 6.48665 13.046 7.18465 13.9173 7.71731C14.5707 8.11665 15.3627 8.49998 16 8.49998M16 8.49998C15.3627 8.49998 14.57 8.88331 13.9173 9.28265C13.046 9.81598 12.286 10.514 11.65 11.3126C11.1553 11.9333 10.6667 12.6733 10.6667 13.1666M16 8.49998H0"
                stroke="white"
                strokeWidth="0.666667"
              />
            </g>
            <defs>
              <clipPath id="clip0_244_566">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </nav>
  );
}
