import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
const Layout = () => {
  return (
    <Box width="100%" height={"100%"}>
      <Box bgcolor={'white'}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
