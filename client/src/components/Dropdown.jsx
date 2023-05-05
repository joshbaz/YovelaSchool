import React from "react";
import { styled } from "@mui/system";
import { Button, useTheme } from "@mui/material";

const SubMenuWrap = styled("ul")(({ theme }) => ({
  backgroundColor: theme.palette.whites[500],
  padding: 0,
  borderRadius: "4px",
  position: "absolute",
  opacity: "100%",
}));

const Dropdown = ({ submenus, dropdown }) => {
  const { palette } = useTheme();
  return (
    <SubMenuWrap className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((data, index) => {
        return (
          <li key={index} className="menu-items">
            <Button
              sx={{
                bgcolor: palette.whites[500],
                width: "100%",
                opacity: "100%",
                textAlign: "left",
               
                justifyContent: "flex-start",
                "&:hover": {
                  color: palette.primary[900],
                  bgcolor: palette.primary[100],
                  opacity: "100%",
                },
              }}
            >
              {data.title}
            </Button>
          </li>
        );
      })}
    </SubMenuWrap>
  );
};

export default Dropdown;
