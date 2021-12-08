import React from "react";
import Hamburger from "../ui/Hamburger";
import Link from "next/link";

const Header = (props) => {
  return (
    <header className="z-2">
      <Link href="/">
        <Hamburger />
      </Link>
    </header>
  );
};

export default Header;
