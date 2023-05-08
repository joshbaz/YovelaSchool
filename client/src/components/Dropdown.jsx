import React from "react";
import { styled } from "@mui/system";
import { Button, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

const SubMenuWrap = styled("ul")(({ theme }) => ({
  backgroundColor: theme.palette.whites[500],
  padding: 0,
  borderRadius: "4px",
  position: "absolute",
  opacity: "100%",
  paddingTop: "10px",
}));

const Dropdown = ({ submenus, dropdown, navsolid }) => {
  const { palette } = useTheme();
  return (
    <SubMenuWrap className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((data, index) => {
        return (
          <li key={index} className="menu-items">
            <NavLink
              role="button"
              to={data.url}
              className={({ isActive }) => (isActive ? "activeItem" : "")}
            >
              <Button
                sx={{
                  bgcolor: "inherit",
                  width: "100%",
                  opacity: "100%",
                  textAlign: "left",
                  color: navsolid
                    ? palette.primary[500]
                    : palette.tertiary[500],
                  justifyContent: "flex-start",
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
                {data.title}
              </Button>
            </NavLink>
          </li>
        );
      })}
    </SubMenuWrap>
  );
};

export default Dropdown;
