"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ThemeSwitcher from "@/components/theme-switcher";


export default function NavBar() {
  const menuItems = [
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/" className="font-light tracking-tighter text-inherit text-lg" >
            TransportAI
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        <NavbarBrand className="pr-8 pb-1">
          <a href="/" className="font-light tracking-tighter text-xl flex gap-3 justify-center items-center">
            TransportAI
          </a>
        </NavbarBrand>

        <NavbarItem>
          <Button as={Link} href="/#testimonials" variant="light" size="md">
            Testimonials
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} href="/#faq" variant="light" size="md">
            FAQ
          </Button>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">

        {/* Theme mode button */}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {/* Login button */}
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="success" href="/login" variant="solid" className="hidden sm:flex text-default-800 font-base" size="sm">
            Login
          </Button>
        </NavbarItem>

        {/* Sign up button */}
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="success" href="/signup" variant="light" className="hidden sm:flex text-default-800 font-base" size="sm">
            Register
          </Button>
        </NavbarItem>



      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg" color="foreground">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
