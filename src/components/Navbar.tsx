"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Languages, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,} from "@/components/ui/dropdown-menu";
import {Collapsible,CollapsibleContent,CollapsibleTrigger} from "@/components/ui/collapsible";
import { useLanguageStore } from "@/store/languageStore";

// Updated routes with dropdown for Shri Shakumbhari Devi
const routes = [
  { href: "/", label: "Home" },
  {
    label: "Shakumbhari Devi Dham",
    href: "",
    dropdown: true,
    items: [
      {
        label: "Shri Shakumbhari Devi - Saharanpur",
        href: "/shri-shakumbhari-devi",
      },
      {
        label: "Sakrai Dham - Sikar",
        href: "/sakrai-dham",
      },
      {
        label: "Shri Banashankari - Bengaluru",
        href: "/banashankari",
      },
    ],
  },

  { href: "/bhura-dev", label: "Bhura Dev" },
  { href: "/mata-chinnamasta-devi", label: "Mata Chinnamasta Devi" },
  { href: "/mela", label: "Mela" },
  { href: "/mata-stories", label: "Mata Stories" },
  { href: "/aarti", label: "Aarti" },
  { href: "/navigation", label: "Navigation" },
  { href: "/contest", label: "Contest" },
];

const languages = [
  { value: "english", label: "English" },
  { value: "hindi", label: "हिंदी" },
  { value: "tamil", label: "தமிழ்" },
  { value: "telugu", label: "తెలుగు" },
  { value: "kannada", label: "ಕನ್ನಡ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);
  const { selectedLanguage, setLanguage } = useLanguageStore();

  const toggleCollapsible = (label: string) => {
    setOpenCollapsible(openCollapsible === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative overflow-hidden">
            <Image src="/jaimatadi.png" alt="Logo" height={130} width={130} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {routes.map((route) =>
            route.dropdown ? (
              <DropdownMenu key={route.href}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  {route.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64">
                  {route.items?.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {route.label}
              </Link>
            )
          )}
          <Link href="/contactus">
            <Button size="sm" className="cursor-pointer">
              Contact Us
            </Button>
          </Link>

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select Language">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.value}
                  onClick={() => setLanguage(lang.value)}
                  className={
                    selectedLanguage === lang.value
                      ? "font-bold text-primary"
                      : ""
                  }
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-6 py-6">
              <Link
                href="/"
                className="flex items-center gap-2 pl-2"
                onClick={() => setIsOpen(false)}
              >
                <Image src="/om.jpg" alt="Logo" width={32} height={32} />
                <span className="font-bold">Jai Mata Di</span>
              </Link>
              <div className="flex flex-col space-y-3 pl-4">
                {routes.map((route) =>
                  route.dropdown ? (
                    <Collapsible
                      key={route.href}
                      open={openCollapsible === route.label}
                      onOpenChange={() => toggleCollapsible(route.label)}
                      className="w-full"
                    >
                      <CollapsibleTrigger className="flex w-full items-center  text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                        {route.label}
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            openCollapsible === route.label ? "rotate-90" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 pt-2">
                        {route.items?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  )
                )}

                <Link href="/contactus">
                  <Button
                    className="mt-2"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Button>
                </Link>

                {/* Language Selection in Mobile Menu */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Select Language:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.value}
                        variant={
                          selectedLanguage === lang.value
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => {
                          setLanguage(lang.value);
                          setIsOpen(false);
                        }}
                      >
                        {lang.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
