import { Button, useTheme } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "./Dropdown";
import { styled } from "@mui/system";
import { NavLink, useLocation } from "react-router-dom";

const MenuItemWrap = styled("li")(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
}));

const MenuItems = ({ items, navsolid }) => {
  const { palette } = useTheme();
  const [dropdown, setDropDown] = React.useState(false);
  let location = useLocation();
  let ref = React.useRef();
  console.log("location", location);
  React.useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropDown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropDown(false);
  };

  const onMouseClick = () => {
    setDropDown(true);
  }
  return (
    <MenuItemWrap
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
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
              onClick={() => setDropDown((prev) => !prev)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: navsolid ? palette.primary[500] : palette.tertiary[500],
                height: "100%",
                backgroundColor: "inherit",

                "&:hover": {
                  color: navsolid
                    ? palette.primary[900]
                    : palette.tertiary[500],
                  bgcolor: navsolid
                    ? palette.primary[100]
                    : palette.tertiary[50],
                  opacity: "100%",
                },
              }}
            >
              {items.title}
            </Button>
          </NavLink>
          <Dropdown
            submenus={items.subData}
            dropdown={dropdown}
            navsolid={navsolid}
          />
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
