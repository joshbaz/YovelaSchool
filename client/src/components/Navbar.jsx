// Navbar.js
import React, { useState, useRef, useEffect } from "react";
import FlexBetween from "./FlexBetween";
import Logos from "../assets/YovelaColored.svg";
import { Icon } from "@iconify/react";
import { useTheme, Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import MenuItems from "./MenuItems";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

const menuData = [
  {
    title: "Our School",
    areaControls: "Our-School",
    url: "/ourschool",
    subData: [
      { title: "About us", url: "/ourschool/aboutus" },
      { title: "Statement of Faith", url: "/ourschool/statementoffaith" },
      { title: "Board of Governors", url: "/ourschool/boardofgovernors" },
      { title: "Careers", url: "/ourschool/careers" },
    ],
  },
  {
    title: "Academics",
    areaControls: "Academics",
    url: "/academics",
    subData: [{ title: "ACE CURRICULUM", url: "/academics/ace" }],
  },
  {
    title: "Admission",
    areaControls: "Admission",
    url: "/admissions",
    subData: [{ title: "ADMISSION PROCESS", url: "/admissions/process" }],
  },
  {
    title: "School life",
    areaControls: "School-life",
    url: "/schoollife",
    subData: [
      { title: "Extra-curricular activities", url: "/schoollife/extracurricular" },
      { title: "conventions", url: "/schoollife/conventions" },
    ],
  },
  { title: "Contact us", url: "/contactus", areaControls: "Contact-us" },
];

const Navbar = () => {
  const { palette } = useTheme();
  const [navSolid, setNavSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const routeNavigate = useNavigate();
  const location = useLocation();
  const hideTimeoutRef = useRef(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    const navSolidChange = () => {
      setNavSolid(window.scrollY >= 120);
    };
    window.addEventListener("scroll", navSolidChange);
    return () => window.removeEventListener("scroll", navSolidChange);
  }, []);

  const handleMouseEnter = (area) => {
    clearTimeout(hideTimeoutRef.current);
    setHoveredArea(area);
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowSubMenu(false);
      setHoveredArea(null);
    }, 500);
  };

  const handleSubMenuMouseEnter = () => clearTimeout(hideTimeoutRef.current);
  const handleSubMenuMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowSubMenu(false);
      setHoveredArea(null);
    }, 500);
  };

  return (
    <Box>
      <FlexBetween mb="0" p="0rem 2rem" height="100%" bgcolor={palette.whites[500]} sx={{ height: [50, 80, 100] }}>
        <Avatar alt="Yovela School Logo" onClick={() => routeNavigate("/")} src={Logos} sx={{ height: { xs: 40, md: 60, lg: 70 }, width: { xs: 40, md: 60, lg: 70 }, marginBottom: "0.5rem" }} />
        <FlexBetween gap="1.6rem" sx={{ display: { xs: "none", md: "flex" } }}>
          <Button>
            <FlexBetween gap="0.6rem" fontSize={"1.2rem"} color={palette.tertiary[500]}>
              <Icon icon="bi:people" />
              <Typography variant="h5" sx={{ textTransform: "capitalize" }} color={palette.tertiary[500]}>
                Portal Log In
              </Typography>
            </FlexBetween>
          </Button>
          <Button variant="contained" onClick={() => routeNavigate("/appointment")}>
            Book Appointment
          </Button>
        </FlexBetween>
        <IconButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} sx={{ display: { xs: "block", md: "none" }, color: palette.tertiary[500] }}>
          {isMobileMenuOpen ? <Icon icon="eva:close-fill" /> : <Icon icon="charm:menu-hamburger" />}
        </IconButton>
      </FlexBetween>
      <Box sx={{ width: "100%", position: navSolid ? "fixed" : "relative", top: 0, zIndex: 30 }}>
        <Box display="flex" justifyContent={"center"} bgcolor={navSolid ? palette.whites[500] : palette.whites[500]} sx={{ opacity: navSolid ? "100%" : "70%", position: "absolute", top: 0, width: "100%", ".activeItem": { backgroundColor: navSolid ? palette.primary[50] : palette.tertiary[50] }, ".mainNavItem": { height: "40px" } }}>
          <nav style={{ width: "100%" }}>
            <FlexBetween fontSize={"1.2rem"} color={palette.tertiary[500]} justifyContent={navSolid ? "space-between" : "center !important"} sx={{ height: [50, 50, 50], p: "0rem 2rem", width: "100%" }}>
              {navSolid && <Avatar alt="Yovela School Logo" onClick={() => routeNavigate("/")} src={Logos} sx={{ height: { xs: 40, md: 50, lg: 60 }, width: { xs: 40, md: 50, lg: 60 }, marginBottom: "0.3rem" }} />}
              <FlexBetween gap="0.6rem" fontSize={"1.2rem"} color={palette.tertiary[500]} sx={{ display: { xs: "none", md: "flex" } }}>
                {menuData.map((data, index) => (
                  <MenuItems
                    navsolid={navSolid}
                    items={data}
                    key={index}
                    location={location}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    hoveredArea={hoveredArea}
                    showSubMenu={showSubMenu}
                    onSubMenuMouseEnter={handleSubMenuMouseEnter}
                    onSubMenuMouseLeave={handleSubMenuMouseLeave}
                  />
                ))}
              </FlexBetween>
              {navSolid && (
                <Button variant="contained" onClick={() => routeNavigate("/appointment")} sx={{ display: { xs: "none", md: "block" } }}>
                  Book Appointment
                </Button>
              )}
            </FlexBetween>
            {isMobileMenuOpen && (
              <Box sx={{ position: "absolute", top: "100%", left: 0, width: "100%", bgcolor: palette.whites[500], p: 2, display: "flex", flexDirection: "column", gap: 1, zIndex: 100 }}>
                <Button>
                  <FlexBetween gap="0.6rem" fontSize={"1.2rem"} color={palette.tertiary[500]}>
                    <Icon icon="bi:people" />
                    <Typography variant="h5" sx={{ textTransform: "capitalize" }} color={palette.tertiary[500]}>
                      Portal Log In
                    </Typography>
                  </FlexBetween>
                </Button>
                {menuData.map((data, index) => (
                  <NavLink to={data.url} key={index} style={{ textDecoration: "none" }}>
                    <MenuItems
                      navsolid={navSolid}
                      items={data}
                      location={location}
                      mobile={true}
                    />
                  </NavLink>
                ))}
                <Button variant="contained" onClick={() => routeNavigate("/appointment")}>
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