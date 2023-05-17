import CustomStack from "./CustomStack";
import { useTheme, Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
const PageNavLocation = ({ currlocation, prevlocation, extendedlocation }) => {
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

      <Box
        height="100%"
        display="flex"
        alignItems={"center"}
        color={palette.tertiary[200]}
      >
        <Icon icon="bi:arrow-right-short" width="24" height="24" />
      </Box>

      <Typography
        variant="body1"
        color={
          extendedlocation ? palette.secondary[500] : palette.tertiary[200]
        }
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

      {extendedlocation && (
        <>
          <Box
            height="100%"
            display="flex"
            alignItems={"center"}
            color={palette.tertiary[200]}
          >
            <Icon icon="bi:arrow-right-short" width="24" height="24" />
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
            {extendedlocation}
          </Typography>
        </>
      )}
    </CustomStack>
  );
};

export default PageNavLocation;
