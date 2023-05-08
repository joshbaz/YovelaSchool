import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";

import aboutaceimg from "../../assets/AboutAce.png";
const Container = styled(Stack)(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
  height: "100%",
  backgroundColor: theme.palette.primary[500],

  ".openSpanText": {
    fontWeight: "400",
  },
}));
const AboutAce = () => {
  const { palette } = useTheme();
  return (
    <Container spacing={0}>
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"About ACE"} headerimage={aboutaceimg} />
      </CustomStack>
    </Container>
  );
};

export default AboutAce;
