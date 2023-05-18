import { styled } from "@mui/system";
import { Stack, useTheme, Typography, Divider, Box } from "@mui/material";
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

  ".acevideo": {
    width: "100%",
    height: "80vh",
    display: "relative",
  },

  ".iframe": {
    overflow: "hidden",
    border: 0,
    alignSelf: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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
      <CustomStack
        flexDirection="column"
        height="80vh"
        width="100%"
        bgcolor={palette.tertiary[600]}
        position={"relative"}
      >
        <Box className="acevideo">
          <iframe
            style={{
              width: "100%",
              height: "100% !important",
              display: "block",
            }}
            className="iframe"
            src="https://www.youtube.com/embed/ob9ZnM-Fgbs"
            title="Presenting A.C.E."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </CustomStack>

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
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          Three Levels Of ICCE Certification
        </Typography>

        <CustomStack flexDirection={"row"} gap="25px">
          <CustomStack flexDirection={"column"} maxWidth="380px" gap="10px">
            <Typography
              variant="body1"
              color={palette.tertiary[600]}
              sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "22px" }}
            >
              ICCE GENERAL CERTIFICATE
            </Typography>
            <Typography
              variant="body1"
              color={palette.tertiary[500]}
              sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}
            >
              The General Certificate requires a similar level of work needed to
              obtain GCSEs. It covers English, Mathematics, Science, History,
              Geography, Biblical Studies, and a number of options chosen by the
              student which would normally include Information Technology.
            </Typography>
          </CustomStack>
          <Divider orientation="vertical" />
          <CustomStack flexDirection={"column"} maxWidth="380px" gap="10px">
            <Typography
              variant="body1"
              color={palette.tertiary[600]}
              sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "22px" }}
            >
              ICCE INTERMEDIATE CERTIFICATE
            </Typography>
            <Typography
              variant="body1"
              color={palette.tertiary[500]}
              sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}
            >
              The Intermediate Certificate is at a similar standard to AS Level.
              Again, it includes courses in English, Mathematics and Science,
              building on the knowledge already acquired. There are additional
              courses in the Humanities including Biblical Studies.
            </Typography>
          </CustomStack>
          <Divider orientation="vertical" />
          <CustomStack flexDirection={"column"} maxWidth="380px" gap="10px">
            <Typography
              variant="body1"
              color={palette.tertiary[600]}
              sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "22px" }}
            >
              ICCE ADVANCED CERTIFICATE
            </Typography>
            <Typography
              variant="body1"
              color={palette.tertiary[500]}
              sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "24px" }}
            >
              Many students completing this certificate go on to study at degree
              level. The programme content is determined by the student’s
              intended degree course or future career aspirations.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** icce recognition */}

      <CustomStack
        flexDirection={"column"}
        width="100%"
        alignItems="center"
        padding="46px 0"
        bgcolor={palette.whites[500]}
        gap="25px"
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          ICCE INTERMEDIATE CERTIFICATE
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "20px",
            fontWeight: "400",
            maxWidth: "821px",
            textAlign: "center",
          }}
        >
          The Intermediate Certificate is at a similar standard to AS Level.
          Again, it includes courses in English, Mathematics and Science,
          building on the knowledge already acquired. There are additional
          courses in the Humanities including Biblical Studies.
        </Typography>
      </CustomStack>
      <Footer />
    </Container>
  );
};

export default AboutAce;
