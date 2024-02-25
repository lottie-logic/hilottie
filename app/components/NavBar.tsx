"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      maxWidth="full"
      className="sticky top-0 z-50 max-h-[10vh] bg-cream  shadow-neu-outer rounded-b-xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="group " href="/">
            <p className="text-4xl neumorphic-text  wave mr-3">👋</p>
            <p className="font-bold text-inherit neumorphic-text text-3xl">
              hi lottie
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link href="/courses" aria-current="page">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/roadmap">Roadmap</Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link href="/resources">Resources</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link href="/blog">Blog</Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <button className=" uppercase text-lg   mt-2 mb-2 p-2 px-4  rounded-xl   font-black shadow-neu-outer hover:shadow-neu-inner transition-all duration-300 ease-in-out">
            Contact
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
