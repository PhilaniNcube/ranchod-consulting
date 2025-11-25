"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { cn } from "@workspace/ui/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex mx-auto items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex py-2 items-center space-x-2">
          <Image
            src="/images/logo.jpg"
            alt="Ranchod Consulting"
            width={236}
            height={89}
            className="rounded-md w-[200px]  object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  items-center gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group inline-flex h-10 text-black w-max items-center justify-center rounded-md bg-white py-2 text-sm md:text-lg font-medium transition-colors hover:text-brand disabled:pointer-events-none disabled:opacity-50",
                pathname === item.href &&
                  "text-brand border-b-2 border-brand rounded-none"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/logo.jpg"
                    alt="Ranchod Consulting"
                    width={32}
                    height={32}
                    className="rounded-md"
                  />
                  <span className="text-lg font-bold">Ranchod Consulting</span>
                </div>
              </SheetTitle>
              <SheetDescription className="text-left">
                Navigate through our consulting services and resources.
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-6">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href &&
                          "text-brand border-b-2 border-brand rounded-none"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        {/* CTA Button - Desktop only */}
        <div className="hidden md:flex">
          <Button asChild className="bg-brand">
            <Link href="/contact" className="text-white hover:text-brand ">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
