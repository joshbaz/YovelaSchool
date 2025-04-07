import React, { useState } from "react";
import FlexBetween from "./FlexBetween";
import Logos from "../assets/YovelaColored.svg";
import { Icon } from "@iconify/react";
import { useTheme, Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import MenuItems from "./MenuItems";
import { useNavigate, useLocation } from "react-router-dom";

const menuData = [
  {
    title: "Our School",
    areaControls: "Our-School",
    url: "/ourschool",
    subData: [
      {
        title: "About us",
        url: "/ourschool/aboutus",
      },
      {
        title: "Statement of Faith",
        url: "/ourschool/statementoffaith",
      },
      {
        title: "Board of Governors",
        url: "/ourschool/boardofgovernors",
      },
      {
        title: "Careers",
        url: "/ourschool/careers",
      },
    ],
  },
  {
    title: "Academics",
    areaControls: "Academics",
    url: "/academics",
    subData: [
      {
        title: "ACE CURRICULUM",
        url: "/academics/ace",
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
        url: "/admissions/process",
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
        url: "/schoollife/extracurricular",
      },
      {
        title: "conventions",
        url: "/schoollife/conventions",
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
  const [navSolid, setNavSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let routeNavigate = useNavigate();
  const location = useLocation();

  const navSolidChange = () => {
    if (window.scrollY >= 120) {
      if (!navSolid) setNavSolid(true);
    } else {
      setNavSolid(false);
    }
  };

  window.addEventListener("scroll", navSolidChange);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box>
      {/* Top Navbar Section (Logo and Portal Logins) */}
      <FlexBetween
        mb="0"
        p="0rem 2rem"
        height="100%"
        bgcolor={palette.whites[500]}
        sx={{
          height: [50, 100, 120],
        }}
      >
        {/* Logo */}
        <Avatar
          alt="Yovela School Logo"
          onClick={() => routeNavigate("/")}
          src={Logos}
          sx={{
            height: [50, 100, 120],
            width: [50, 100, 120],
            marginBottom: "0.5rem",
          }}
        />

        {/* Portal Logins and Book Appointment (Desktop) */}
        <FlexBetween gap="1.6rem" sx={{ display: { xs: "none", md: "flex" } }}>
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

          <Button
            variant="contained"
            onClick={() => routeNavigate("/appointment")}
          >
            Book Appointment
          </Button>
        </FlexBetween>

        {/* Mobile Menu Icon */}
        <IconButton
          onClick={toggleMobileMenu}
          sx={{ display: { xs: "block", md: "none" }, color: palette.tertiary[500] }}
        >
          {isMobileMenuOpen ? <Icon icon="eva:close-fill" /> : <Icon icon="charm:menu-hamburger" />}
        </IconButton>
      </FlexBetween>

      {/* Main Navigation Section */}
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
            ".activeItem": {
              backgroundColor: navSolid
                ? palette.primary[50]
                : palette.tertiary[50],
            },
            ".mainNavItem": {
              height: "40px",
            },
          }}
        >
          <nav
            style={{
              width: "100%",
            }}
          >
            <FlexBetween
              fontSize={"1.2rem"}
              color={palette.tertiary[500]}
              justifyContent={
                navSolid ? "space-between" : "center !important"
              }
              sx={{
                height: [50, 50, 50],
                p: "0rem 2rem",
                width: "100%",
              }}
            >
              {/* Logo (Visible on scroll) */}
              {navSolid && (
                <Avatar
                  alt="Yovela School Logo"
                  onClick={() => routeNavigate("/")}
                  src={Logos}
                  sx={{
                    height: [50, 80, 80],
                    width: [50, 80, 80],
                    marginBottom: "0.3rem",
                  }}
                />
              )}

              {/* Desktop Navigation Menu */}
              <FlexBetween
                gap="0.6rem"
                fontSize={"1.2rem"}
                color={palette.tertiary[500]}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {menuData.map((data, index) => (
                  <MenuItems
                    navsolid={navSolid}
                    items={data}
                    key={index}
                    location={location}
                  />
                ))}
              </FlexBetween>

              {/* Book Appointment (Visible on scroll, Desktop) */}
              {navSolid && (
                <Button
                  variant="contained"
                  onClick={() => routeNavigate("/appointment")}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Book Appointment
                </Button>
              )}
            </FlexBetween>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  bgcolor: palette.whites[500],
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  zIndex:100,
                }}
              >
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
                {menuData.map((data, index) => (
                  <MenuItems
                    navsolid={navSolid}
                    items={data}
                    key={index}
                    isMobile={true}
                    location={location}
                  />
                ))}
                <Button
                  variant="contained"
                  onClick={() => routeNavigate("/appointment")}
                >
                  Book Appointment
                </Button>
              </Box>
            )}
          </nav>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;