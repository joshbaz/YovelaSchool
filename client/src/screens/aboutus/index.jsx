import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";
import Aboutbg from "../../assets/Aboutbg.png";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

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
      "Lorem ipsum dolor sit amet consectetur. Et mi urna libero vestibulum eleifend elementum ac suscipit neque. Pellentesque consectetur sed ut.",
    image: coreValue1,
  },
  {
    title: "Excellence",
    subText:
      "Lorem ipsum dolor sit amet consectetur. Et mi urna libero vestibulum eleifend elementum ac suscipit neque. Pellentesque consectetur sed ut.",
    image: coreValue2,
  },
  {
    title: "Character",
    subText:
      "Lorem ipsum dolor sit amet consectetur. Et mi urna libero vestibulum eleifend elementum ac suscipit neque. Pellentesque consectetur sed ut.",
    image: coreValue3,
  },
  {
    title: "Christ-centered",
    subText:
      "Lorem ipsum dolor sit amet consectetur. Et mi urna libero vestibulum eleifend elementum ac suscipit neque. Pellentesque consectetur sed ut.",
    image: coreValue4,
  },
];

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

const ImageContainer = styled(Box)({
  backgroundColor: "red",
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
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"About Our School"} headerimage={Aboutbg} />
      </CustomStack>

      {/** nav pager */}
      
      <PageNavLocation
        currlocation={" Our school: About us"}
        prevlocation={"Home"}
      />

      {/** About content */}
      <CustomStack
        sx={{
          padding: "33px 77px",
        }}
        bgcolor={palette.whites[100]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[100]}
          alignItems="center"
          flexDirection={"row"}
          gap={"60px"}
          justifyContent={"center"}
        >
          <Box>
            <ImageContainer
              display={"block"}
              sx={{ height: "454px", width: "529px", position: "relative" }}
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
              sx={{ fontWeight: "500", fontSize: "30px" }}
            >
              Yovela International Christian school
            </Typography>

            <CustomStack flexDirection={"column"} gap="0px">
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                Lorem ipsum dolor sit amet consectetur. Et mi urna libero
                vestibulum eleifend elementum ac suscipit neque. Pellentesque
                consectetur sed ut faucibus posuere ut praesent blandit tempor.
                Maecenas at orci arcu pretium tempus risus velit pharetra sit.
                Malesuada tellus et sit vulputate malesuada viverra felis nunc
                suspendisse. Dui netus semper integer id vitae consequat massa.
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                Lorem ipsum dolor sit amet consectetur. Et mi urna libero
                vestibulum eleifend elementum ac suscipit neque. Pellentesque
                consectetur sed ut faucibus posuere ut praesent blandit tempor.
                Maecenas at orci arcu pretium tempus risus velit pharetra sit.
                Malesuada tellus et sit vulputate malesuada viverra felis nunc
                suspendisse. Dui netus semper integer id vitae consequat massa.
              </Typography>
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** Our Mission */}
      <CustomStack
        bgcolor={palette.whites[500]}
        flexDirection="row"
        gap="67px"
        justifyContent={"center"}
        padding={"88px 0"}
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
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Our Mission
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet consectetur. Et mi urna libero
              vestibulum eleifend elementum ac suscipit neque. Pellentesque
              consectetur sed ut faucibus posuere ut praesent blandit tempor.
              Maecenas at orci arcu pretium tempus risus velit pharetra sit.
              Malesuada tellus et sit vulputate malesuada viverra felis nunc
              suspendisse. Dui netus semper integer id vitae consequat massa.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** Core Values */}

      <CustomStack
        flexDirection={"column"}
        bgcolor={palette.whites[100]}
        alignItems={"center"}
        padding={"82px 0px"}
        gap="30px"
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          Our Core Values
        </Typography>

        <CustomStack flexDirection="row" gap="25px">
          {CoreValueContent.map((data, index) => {
            return (
              <CustomStack
                key={index}
                sx={{ width: "290px", height: "386px" }}
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
                    Lorem ipsum dolor sit amet consectetur. Et mi urna libero
                    vestibulum eleifend elementum ac suscipit neque.
                    Pellentesque consectetur sed ut.
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
