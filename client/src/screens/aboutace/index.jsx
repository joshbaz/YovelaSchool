import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";

import aboutaceimg from "../../assets/AboutAce.png";
import PageNavLocation from "../../components/PageNavLocation";
import Footer from "../../components/Footer";
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
    <Container spacing={0} gap="0px">
      <CustomStack gap="0px" flexDirection={"column"}>
        <Navbar />
        <PageHeader title={"About ACE"} headerimage={aboutaceimg} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Academics : Ace Curriculum"}
        prevlocation={"Home"}
      />

      {/** ace video */}

      {/** what ace is */}
      <CustomStack
        flexDirection={"column"}
        width="100%"
        alignItems="center"
        padding="43px 0"
        bgcolor={palette.tertiary[600]}
        gap="25px"
      >
        <Typography
          variant="body1"
          color={palette.primary[50]}
          sx={{
            fontSize: "50px",
            fontWeight: "200",
            textTransform: "capitalize",
          }}
        >
          What Is A.C.E?
        </Typography>

        <Typography
          variant="body1"
          color={palette.whites[500]}
          sx={{
            maxWidth: "811px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "200",
          }}
        >
          The Accelerated Christian Education Curriculum Is A Unique Program
          That Emphasizes Biblical Principle Along With Strong Academic Skills.
          ACE Recognizes That Each Child Has A Unique Learning Style With
          Individual Abilities and Talents.ACE is evaluated by the International
          Certificate of Christian Education (ICCE) which awards certificates to
          the learners
        </Typography>
      </CustomStack>

      {/** levels of icce */}

      <CustomStack
        flexDirection={"column"}
        width="100%"
        alignItems="center"
        padding="43px 0"
        bgcolor={palette.whites[100]}
        gap="25px"
      >
        <Typography variant="body1" color="initial">
          Three Levels Of ICCE Certification
        </Typography>

        <CustomStack >
        
        </CustomStack>
      </CustomStack>

      {/** icce recognition */}
      <Footer />
    </Container>
  );
};

export default AboutAce;
