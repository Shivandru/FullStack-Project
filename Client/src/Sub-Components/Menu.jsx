import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const MenuComponent = ({ name, menuItems }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Menu
      isOpen={isHover}
      onClose={() => setIsHover(false)}
      onOpen={() => setIsHover(true)}
    >
      <MenuButton
        righticon={<ChevronDownIcon />}
        onMouseEnter={() => setIsHover(true)}
      >
        {name}
      </MenuButton>
      <MenuList zIndex={10} onMouseLeave={() => setIsHover(false)}>
        {menuItems.map((items, index) => (
          <MenuItem key={index}>{items}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
