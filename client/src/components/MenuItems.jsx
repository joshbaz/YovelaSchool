import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "./Dropdown";
import { styled } from "@mui/system";

const MenuItemWrap = styled("li")(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
}));

const MenuItems = ({ items }) => {
  const [dropdown, setDropDown] = React.useState(false);

  let ref = React.useRef();

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
  return (
    <MenuItemWrap
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.subData ? (
        <>
          <Button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropDown((prev) => !prev)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {items.title}
          </Button>
          <Dropdown submenus={items.subData} dropdown={dropdown} />
        </>
      ) : (
        <Button>{items.title}</Button>
      )}
    </MenuItemWrap>
  );
};

export default MenuItems;
