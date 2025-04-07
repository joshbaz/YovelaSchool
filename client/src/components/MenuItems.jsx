import { Button, useTheme } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "./Dropdown";
import { styled } from "@mui/system";
import { NavLink, useLocation } from "react-router-dom";

const MenuItemWrap = styled("li")(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
}));

const MenuItems = ({
  items,
  navsolid,
  onMouseEnter,
  onMouseLeave,
  hoveredArea,
  showSubMenu,
  onSubMenuMouseEnter,
  onSubMenuMouseLeave,
  mobile,
}) => {
  const { palette } = useTheme();
  const [dropdown, setDropDown] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  let location = useLocation();
  let ref = useRef(null);

  useEffect(() => {
    if (showSubMenu && hoveredArea === items.areaControls) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }, [showSubMenu, hoveredArea, items.areaControls]);

  const handleMobileSubMenuToggle = () => {
    setMobileSubMenuOpen(!mobileSubMenuOpen);
  };

  return (
    <MenuItemWrap
      ref={ref}
      onMouseEnter={mobile ? undefined : (onMouseEnter ? () => onMouseEnter(items.areaControls) : undefined)}
      onMouseLeave={onMouseLeave}
    >
      {items.subData ? (
        <>
          <NavLink
            role="button"
            className={({ isActive }) =>
              isActive && location.pathname.includes(items.url)
                ? "activeItem mainNavItem"
                : "mainNavItem"
            }
          >
            <Button
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              endIcon={mobile ? undefined : <KeyboardArrowDownIcon />}
              onClick={mobile ? handleMobileSubMenuToggle : undefined} // Ensure onClick is set correctly
              sx={{
                color: navsolid ? palette.primary[500] : palette.tertiary[500],
                height: "100%",
                backgroundColor: "inherit",
                "&:hover": {
                  color: navsolid ? palette.primary[900] : palette.tertiary[500],
                  bgcolor: navsolid ? palette.primary[100] : palette.tertiary[50],
                  opacity: "100%",
                },
              }}
            >
              {items.title}
            </Button>
          </NavLink>
          {(mobile && mobileSubMenuOpen) || (!mobile && dropdown) ? (
            <div onMouseEnter={onSubMenuMouseEnter} onMouseLeave={onSubMenuMouseLeave}>
              <Dropdown submenus={items.subData} dropdown={dropdown} navsolid={navsolid} />
            </div>
          ) : null}
        </>
      ) : (
        <NavLink
          to={items.url}
          className={({ isActive }) =>
            isActive ? "activeItem mainNavItem" : "mainNavItem"
          }
        >
          <Button
            sx={{
              color: navsolid ? palette.primary[500] : palette.tertiary[500],
              height: "100%",
              backgroundColor: "inherit",
              "&:hover": {
                color: navsolid ? palette.primary[900] : palette.tertiary[500],
                bgcolor: navsolid ? palette.primary[100] : palette.tertiary[50],
                opacity: "100%",
              },
            }}
          >
            {items.title}
          </Button>
        </NavLink>
      )}
    </MenuItemWrap>
  );
};

export default MenuItems;