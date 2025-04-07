import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";
import Aboutbg from "../../assets/Aboutbg.png";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import AboutYovela from "../../assets/AboutYovela.png";
import MissionIcon from "../../assets/OurMissionIcon.png";
import coreValue1 from "../../assets/coreValue1.png";
import coreValue2 from "../../assets/coreValue2.png";
import coreValue3 from "../../assets/coreValue3.png";
import coreValue4 from "../../assets/coreValue4.png";
import PageNavLocation from "../../components/PageNavLocation";

const CoreValueContent = [
  {
    title: "Leadership",
    subText:
      "Developing students to become responsible and influential leaders in their communities and beyond.",
    image: coreValue1,
  },
  {
    title: "Excellence",
    subText:
      "Pursuing the highest standards in education and personal growth, fostering a culture of continuous improvement.",
    image: coreValue2,
  },
  {
    title: "Character",
    subText:
      "Building strong moral character based on integrity, respect, and compassion.",
    image: coreValue3,
  },
  {
    title: "Christ-centered",
    subText:
      "Integrating Christian values into all aspects of education, nurturing spiritual development alongside academic achievement.",
    image: coreValue4,
  },
];

const Container = styled(Stack)(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
  height: "100%",
  backgroundColor: theme.palette.primary[500],
}));

const ImageContainer = styled(Box)({
  ".img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

const AboutUs = () => {
  const { palette } = useTheme();

  return (
    <Container spacing={0}>
      <CustomStack flexDirection={"column"} height="100%">
        <Navbar />
        <PageHeader title={"About Our School"} headerimage={Aboutbg} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Our school: About us"}
        prevlocation={"Home"}
      />

      {/** About content */}
      <CustomStack
        sx={{
          padding: { xs: "20px", md: "33px 77px" },
        }}
        bgcolor={palette.whites[100]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[100]}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: "30px", md: "60px" }}
          justifyContent={"center"}
        >
          <Box>
            <ImageContainer
              display={"block"}
              sx={{
                height: { xs: "300px", md: "454px" },
                width: { xs: "100%", md: "529px" },
                position: "relative",
              }}
            >
              <img
                className="img"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={AboutYovela}
                alt="welcome to Yovela"
              />
            </ImageContainer>
          </Box>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{ fontWeight: "500", fontSize: { xs: "24px", md: "30px" } }}
            >
              Yovela International Christian School
            </Typography>

            <CustomStack flexDirection={"column"} gap="15px">
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                Yovela International Christian School is dedicated to providing a holistic, Christ-centered education that nurtures the intellectual, spiritual, and social development of each student. We strive to create a nurturing environment where students can discover their God-given potential and excel academically.
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                Our commitment is to equip students with the knowledge, skills, and character necessary to become responsible global citizens who make a positive impact in the world. We foster a community of lifelong learners who are inspired to serve others and embrace a life of purpose and integrity.
              </Typography>
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** Our Mission */}
      <CustomStack
        bgcolor={palette.whites[500]}
        flexDirection={{ xs: "column", md: "row" }}
        gap="67px"
        justifyContent={"center"}
        padding={{ xs: "40px 20px", md: "88px 0" }}
        alignItems={"center"}
      >
        <Box
          bgcolor={palette.secondary[500]}
          sx={{
            height: "184px",
            width: "184px",
            borderRadius: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={MissionIcon} alt={"mission icon"} />
        </Box>

        <CustomStack flexDirection={"column"} gap="30px" maxWidth={"773px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: { xs: "24px", md: "30px" } }}
          >
            Our Mission
          </Typography>

          <CustomStack flexDirection={"column"} gap="15px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              To cultivate a community of learners who are passionate about seeking knowledge, growing in faith, and making a difference in the world. We aim to provide an exceptional educational experience that empowers students to achieve academic excellence and develop a heart for service.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** Core Values */}
      <CustomStack
        flexDirection={"column"}
        bgcolor={palette.whites[100]}
        alignItems={"center"}
        padding={"82px 20px"}
        gap="30px"
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: { xs: "24px", md: "30px" } }}
        >
          Our Core Values
        </Typography>

        <CustomStack flexDirection={{ xs: "column", md: "row" }} gap="25px">
          {CoreValueContent.map((data, index) => {
            return (
              <CustomStack
                key={index}
                sx={{ width: {xs:"100%", md: "290px"}, height: "auto" }}
                flexDirection={"column"}
                gap="24px"
              >
                <Box height="161px" width="100%">
                  <img src={data.image} alt={data.title} />
                </Box>
                <CustomStack width="100%" flexDirection={"column"} gap="10px">
                  <Typography
                    variant="h6"
                    color={palette.tertiary[600]}
                    sx={{
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    {data.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color={palette.tertiary[600]}
                    sx={{
                      textAlign: "center",
                      fontSize: "17px",
                      lineHeight: "27px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                    }}
                  >
                    {data.subText}
                  </Typography>
                </CustomStack>
              </CustomStack>
            );
          })}
        </CustomStack>
      </CustomStack>
      <Footer />
    </Container>
  );
};

export default AboutUs;