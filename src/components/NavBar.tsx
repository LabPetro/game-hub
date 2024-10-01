import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  return (
    <HStack padding="11px">
      <Link to='/' onClick={handleLogoClick}>
      <Image src={logo} boxSize="65px" objectFit='cover' />
      </Link>
      
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
