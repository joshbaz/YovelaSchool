import React from "react";
import CustomStack from "./CustomStack";
import { useTheme, Box, Typography } from "@mui/material";

const PageHeader = ({ title, headerimage }) => {
  const { palette } = useTheme();
  return (
    <CustomStack
      flexDirection={"column"}
      bgcolor={palette.primary[500]}
      m="0"
      p="0"
      spacing={0}
      height="50vh"
    >
      <Box
        sx={{
          backgroundImage: `url(${headerimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
        height="100%"
        display="flex"
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          color={palette.primary[50]}
          sx={{
            fontWeight: "500",
            fontSize: "45px",
            paddingLeft: "90px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </CustomStack>
  );
};

export default PageHeader;
