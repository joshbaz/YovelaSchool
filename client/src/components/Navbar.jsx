import React from "react";
import FlexBetween from "./FlexBetween";
import Logos from "../assets/YovelaColored.svg";
import { Icon } from "@iconify/react";
import { useTheme, Box, Avatar, Typography, Button } from "@mui/material";
const Navbar = () => {
  const { palette } = useTheme();
  return (
    <Box>
      <FlexBetween
        mb="0"
        p="0rem 2rem"
        height="100%"
        bgcolor={palette.whites[500]}
        sx={{
          height: [50, 100, 100],
          backgroundColor: "whites[100]",
        }}
      >
        {/** logo */}
        <Avatar
          alt="Yovela School Logo"
          src={Logos}
          sx={{
            height: [50, 100, 100],
            width: [50, 100, 100],
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
    </Box>
  );
};

export default Navbar;
