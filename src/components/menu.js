import React, { useState } from "react";
// Utils
import { colors } from "../utils/colors";
// Styles
import { Menu as MenuStyled, MenuOption } from "../styles/menu";

export const Menu = ({ setActiveTag }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const menuOptions = ["All", "Active", "Completed"];

  return (
    <MenuStyled>
      {menuOptions.map((menu, index) => (
        <MenuOption
          key={index}
          color={activeMenu === index ? colors.secundary : "none"}
          onClick={() => {
            setActiveMenu(index);
            setActiveTag(menu);
          }}
        >
          {menu}
        </MenuOption>
      ))}
    </MenuStyled>
  );
};
