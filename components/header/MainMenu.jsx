"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { title: "Home", href: "/#s1" },
  { title: "About us", href: "/#s2" },
  { title: "Why Choose us", href: "/#s3" },
  { title: "Features", href: "/#s4" },
  { title: "Contact us", href: "/#s5" },
];
const socialIcons = [
  {
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/karl.demetria95/",
  },
  {
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/karl-demetria-7a9b19130/",
  },
  {
    icon: "fa-solid fa-globe",
    url: "/",
  },
];
const PortfolioMenu = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2 offcanvas-end sidebar-nav d-flex flex-column">
      <button
        className="sidebar-nav-button d-block d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="one-page-nav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/portfolio/KD.png"
                  alt="logo"
                  width={90}
                  height={25}
                />
              </Link>
            </div>
          </li>
          {navItems.map((navItem, i) => (
            <li key={i} className="nav-item">
              <a
                className={`nav-link ${activeLink === i ? "active" : ""}`}
                href={navItem.href}
                onClick={() => handleLinkClick(i)}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="d-flex social-icon style-none mt-auto d-lg-none">
          {socialIcons.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                <i className={item.icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="pt-10 fs-15 d-lg-none">
          © 2024 Karl Demetria. All rights reserved.
        </p>
      </div>
    </nav>
  );
};

export default PortfolioMenu;
