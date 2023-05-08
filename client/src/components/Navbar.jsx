import React from "react";
import FlexBetween from "./FlexBetween";
import Logos from "../assets/YovelaColored.svg";
import { Icon } from "@iconify/react";
import { useTheme, Box, Avatar, Typography, Button } from "@mui/material";

import MenuItems from "./MenuItems";

const menuData = [
  {
    title: "Our School",
    areaControls: "Our-School",
    url: "/ourschool",
    subData: [
      {
        title: "About us",
      },
      {
        title: "Statement of Faith",
      },
    ],
  },
  {
    title: "Academics",
    areaControls: "Academics",
    url: "/acdemics",
    subData: [
      {
        title: "ACE CURRICULUM",
      },
    ],
  },
  {
    title: "Admission",
    areaControls: "Admission",
    url: "/admissions",
    subData: [
      {
        title: "ADMISSION PROCESS",
      },
    ],
  },
  {
    title: "School life",
    areaControls: "School-life",
    url: "/schoollife",
    subData: [
      {
        title: "Extra-curricular activities",
      },
      {
        title: "conventions",
      },
    ],
  },
  {
    title: "Contact us",
    url: "/contactus",
    areaControls: "Contact-us",
  },
];

const Navbar = () => {
  const { palette } = useTheme();
  const [navSolid, setNavSolid] = React.useState(false);
  const navSolidChange = () => {
    if (window.scrollY >= 95) {
      if (!navSolid) setNavSolid(true);
    } else {
      setNavSolid(false);
    }
  };
  window.addEventListener("scroll", navSolidChange);

  return (
    <Box>
      <FlexBetween
        mb="0"
        p="0rem 2rem"
        height="100%"
        bgcolor={palette.whites[500]}
        sx={{
          height: [50, 100, 120],
        }}
      >
        {/** logo */}
        <Avatar
          alt="Yovela School Logo"
          src={Logos}
          sx={{
            height: [50, 100, 120],
            width: [50, 100, 120],
            marginBottom: "0.5rem",
          }}
        />

        {/** portal logins */}
        <FlexBetween gap="1.6rem">
          <Button>
            <FlexBetween
              gap="0.6rem"
              fontSize={"1.2rem"}
              color={palette.tertiary[500]}
            >
              <Icon icon="bi:people" />
              <Typography
                variant="h5"
                sx={{ textTransform: "capitalize" }}
                color={palette.tertiary[500]}
              >
                Portal Log In
              </Typography>
            </FlexBetween>
          </Button>

          <Button variant="contained">Book Appointment</Button>
        </FlexBetween>
      </FlexBetween>

      <Box
        sx={{
          width: "100%",
          position: navSolid ? "fixed" : "relative",
          top: 0,
          zIndex: 30,
        }}
      >
        <Box
          display="flex"
          justifyContent={"center"}
          bgcolor={navSolid ? palette.whites[500] : palette.whites[500]}
          sx={{
            opacity: navSolid ? "100%" : "70%",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <nav>
            <ul>
              <FlexBetween
                gap="0.6rem"
                fontSize={"1.2rem"}
                color={palette.tertiary[500]}
              >
                {menuData.map((data, index) => {
                  return (
                    <MenuItems navsolid={navSolid} items={data} key={index} />
                  );
                })}
              </FlexBetween>
            </ul>
          </nav>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
