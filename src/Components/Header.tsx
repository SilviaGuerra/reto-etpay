import React from "react";
import Logo from "../Assets/logos/logo-dark.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="relative">
      <div className="container mx-auto">
        <div className="flex py-6 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <img className="h-8 w-auto" src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-row gap-4 z-50">
            <Button link="/" label="Get Early Access" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
