import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Box, Stack } from "@mui/material";
import React from "react";
const Layout = () => {
  return (
    <Box width="100%" height={"100vh"}>
      <Stack height="100%">
        <Navbar />

        <Outlet />
      </Stack>
    </Box>
  );
};

export default Layout;
