import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";

export const CompanyLogo = () => {
  return <img src="/logo.png" alt="Logo" width="130" height="130" />;
};

export default function CompanyNavbar() {
  return (
    <Navbar className="sticky">
      <NavbarBrand>
        <Link href="/">
          <CompanyLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/properties" color="foreground">
            Properties
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
