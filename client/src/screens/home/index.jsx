import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Stack, useTheme, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";
import heroimg from "../../assets/hero.png";
import welcomeYovela from "../../assets/welcomeYovela.png";
import FlexBetween from "../../components/FlexBetween";
import Navbar from "../../components/Navbar";
import CustomStack from "../../components/CustomStack";
const Container = styled(Stack)(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
  height: "100%",
  backgroundColor: theme.palette.primary[500],
  top: "200px",
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
const Home = () => {
  const { palette } = useTheme();
  return (
    <Container>
      {/** hero & nav */}
      <Stack height="100vh">
        <Navbar />
        <Stack
          bgcolor={palette.primary[500]}
          m="0"
          p="0"
          spacing={0}
          height="100%"
        >
          {/** hero */}
          <Swiper
            scrollbar={{ hide: true }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={heroimg} alt="hero" />
            </SwiperSlide>
          </Swiper>

          <Box height="14%" display="flex" justifyContent="center">
            <FlexBetween width="50%" bgcolor={palette.primary[500]}>
              <Box>
                <Typography variant="h2" color={palette.whites[500]}>
                  Enrollment is{" "}
                  <em>
                    <span className="openSpanText">open</span>
                  </em>
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  color: palette.primary[500],
                  backgroundColor: palette.whites[500],

                  width: "180px",

                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                How to Apply
              </Button>
            </FlexBetween>
          </Box>
        </Stack>
      </Stack>

      {/**  */}
      <CustomStack
        bgcolor={palette.whites[500]}
        height="100%"
        sx={{
          padding: "61px 70px",
        }}
        flexDirection={"row"}
        alignItems="center"
        gap={"60px"}
        borderBottom="1px solid white"
      >
        <Box>
          <ImageContainer
            display={"block"}
            sx={{ height: "377px", width: "490px", position: "relative" }}
          >
            <img
              className="img"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={welcomeYovela}
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
            Welcome To Yovela
          </Typography>

          <Stack>
            <Typography variant="body1" color="initial">
              Yovela International Christian school is a private, international
              school in Kampala, Uganda. Students aged 1 to 18 gain
              individualised and biblically based education to achieve academic
              excellence with internationally-recognised courses and
              complementary activities to develop their talents.
            </Typography>

            <Typography variant="body1" color="initial">
              Our experienced educators apply a personalised teaching approach
              to meet the needs of each individual.Thus promoting experiential
              learning opportunities for all students. The effectiveness of our
              child-centred, biblically-based methodology ensures students are
              well-prepared to thrive in the world and have an appreciation of
              social responsibility.
            </Typography>
          </Stack>
        </CustomStack>
      </CustomStack>
    </Container>
  );
};

export default Home;
