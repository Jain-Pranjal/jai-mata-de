"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/aarti",
    label: "Aarti",
  },
  {
    href: "/bhura-dev",
    label: "Bhura Dev",
  },
  {
    href: "/mata-chinnamasta-devi",
    label: "Mata Chinnamasta Devi",
  },
  {
    href: "/mela",
    label: "Mela",
  },
  {
    href: "/shri-shakumbhari-devi",
    label: "Shri Shakumbhari Devi",
  },
  {
    href: "/navigation",
    label: "Navigation",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative  overflow-hidden ">
           <Image src={"/jaimatadi.png"} alt="Logo"  height={130} width={130} />
          </div>
          {/* <span className="hidden font-bold sm:inline-block">Jai Mata Di</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
            <Button size="sm" className="cursor-pointer" onClick={() => window.location.href = '/contactus'}>Contact Us</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-6 py-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Logo"
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
                <span className="font-bold">Jai Mata Di</span>
              </Link>
              <div className="flex flex-col space-y-3 space-x-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <Button className="mt-2" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

