import React from 'react'
import CustomStack from "./CustomStack";
import { useTheme, Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
const PageNavLocation = ({ currlocation, prevlocation }) => {
  const { palette } = useTheme();
  return (
    <CustomStack
      padding={"7px 77px"}
      flexDirection="row"
      gap="10px"
      bgcolor={palette.whites[100]}
      alignItems={"center"}
    >
      <Typography
        variant="body1"
        color={palette.secondary[500]}
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: "26px",
          padding: "",
        }}
      >
        {prevlocation}
      </Typography>
      <Box width="30px" height="20px">
        <Icon icon="bi:arrow-right-short" />
      </Box>

      <Typography
        variant="body1"
        color={palette.tertiary[200]}
        sx={{
          textTransform: "uppercase",
          fontWeight: "600",
          fontSize: "13px",
          textAlign: "center",
          lineHeight: "26px",
        }}
      >
        {currlocation}
      </Typography>
    </CustomStack>
  );
};

export default PageNavLocation