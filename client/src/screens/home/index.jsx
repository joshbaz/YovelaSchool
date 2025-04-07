import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Stack,
  useTheme,
  Typography,
  Avatar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Scrollbar, Navigation, Pagination } from "swiper";
import heroimg from "../../assets/hero.png";
import welcomeYovela from "../../assets/welcomeYovela.png";
import FlexBetween from "../../components/FlexBetween";
import Navbar from "../../components/Navbar";
import CustomStack from "../../components/CustomStack";
import content_Ace from "../../assets/content_ACE.svg";
import content_Activities from "../../assets/content_Activities.svg";
import content_Teaching from "../../assets/content_Teaching.svg";
import content_tech from "../../assets/content_tech.svg";
import earlyYears from "../../assets/earlyYears.png";

import acc_icce from "../../assets/icce.png";
import ace_ace from "../../assets/ace.png";

import PrincipalPhoto from "../../assets/Principal.png";

import exPhoto1 from "../../assets/exPhoto1.png";
import exPhoto2 from "../../assets/exPhoto2.png";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

const cirriculumContent = [
  {
    title: "Ace curriculum school",
    subText:
      "A globally recognized Christian education program focusing on individualized learning and character development.",
    icon: content_Ace,
  },
  {
    title: "1 on 1 Teaching",
    subText:
      "Personalized instruction tailored to each student's unique learning pace and needs, fostering deeper understanding.",
    icon: content_Teaching,
  },
  {
    title: "Cutting-Edge Technologies",
    subText:
      "Integration of modern technology in classrooms to enhance learning experiences and prepare students for the digital age.",
    icon: content_tech,
  },
  {
    title: "Extra Curriculum activities",
    subText:
      "A wide array of activities including sports, arts, and clubs, promoting holistic development and talent discovery.",
    icon: content_Activities,
  },
];

const accreditationContent = [
  {
    title: "ICCE",
    icon: acc_icce,
  },
  {
    title: "ACE",
    icon: ace_ace,
  },
];

const exPhotosData = [
  {
    image: exPhoto1,
    title: "exphoto1",
  },
  {
    image: exPhoto2,
    title: "exphoto2",
  },
  {
    image: exPhoto2,
    title: "exphoto2",
  },
];

const Container = styled(Stack)(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
  height: "100%",
  backgroundColor: theme.palette.primary[500],
  overflowX: "hidden",

  ".openSpanText": {
    fontWeight: "400",
  },
  ".swiper-button-next, .swiper-button-prev ": {
    color: theme.palette.primary[50],
    backgroundColor: "rgba(205, 238, 228, 0.3)",
    borderRadius: "3px",
    width: "44px",
    height: "44px",
  },
  ".swiper-button-disabled": {
    backgroundColor: "transparent !important",
  },
  ".swiper-pagination-bullet": {
    width: "12px",
    height: "12px",
    textAlign: "center",
    borderRadius: "3px",
    color: "#000",
    opacity: 1,
    background: "rgba(0, 0, 0, 0.2)",
    border: `2px solid ${theme.palette.primary[50]}`,
  },
  ".swiper-pagination-bullet-active": {
    background: theme.palette.primary[50],
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
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperElRef = React.useRef(null);

  return (
    <Container spacing={0}>
      {/* Hero & Nav */}
      <CustomStack flexDirection={"column"} height="auto">
        <Navbar />
        <CustomStack
          flexDirection={"column"}
          bgcolor={palette.primary[500]}
          m="0"
          p="0"
          spacing={0}
          height="auto"
        >
          {/* Hero */}
          <Box height={{ xs: "50vh", md: "70vh" }}>
            <Swiper
              scrollbar={{ hide: true }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={heroimg} alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </SwiperSlide>
            </Swiper>
          </Box>

          <CustomStack
            height={"auto"}
            display="flex"
            justifyContent="center"
            bgcolor={palette.primary[500]}
            overflow={"hidden"}
            padding={{ xs: "20px", md: "0" }}
          >
            <FlexBetween width={{ xs: "90%", md: "50%" }} bgcolor={palette.primary[500]}>
              <Typography
                variant="h2"
                color={palette.whites[500]}
                sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}
              >
                Enrollment is
                <em>
                  <span className="openSpanText">open</span>
                </em>
              </Typography>

              <Button
                variant="contained"
                sx={{
                  color: palette.primary[500],
                  backgroundColor: palette.whites[500],
                  fontSize: { xs: "14px", sm: "16px" },
                  padding: {xs: "8px 12px", sm:"10px 16px"}
                }}
              >
                How to Apply
              </Button>
            </FlexBetween>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/* Welcome message */}
      <CustomStack
        sx={{
          padding: { xs: "20px", md: "0px 70px" },
        }}
        bgcolor={palette.whites[500]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[500]}
          height="auto"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={{ xs: "20px", sm: "30px", md: "60px" }}
          sx={{
            padding: "40px 0px",
          }}
          borderBottom={`1px solid ${palette.tertiary[50]}`}
          justifyContent={"center"}
        >
          <Box>
            <ImageContainer
              display={"block"}
              sx={{ height: { xs: "250px", sm: "300px", md: "377px" }, width: { xs: "100%", md: "490px" }, position: "relative" }}
            >
              <img
                className="img"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={welcomeYovela}
                alt="welcome to Yovela"
              />
            </ImageContainer>
          </Box>

          <CustomStack flexDirection={"column"} gap="20px">
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{ fontWeight: "500", fontSize: { xs: "20px", sm: "24px", md: "30px" } }}
            >
              Welcome To Yovela
            </Typography>

            <CustomStack flexDirection={"column"} gap="20px">
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: { xs: "15px", sm: "16px", md: "17px" }, textAlign: "justify" }}
              >
                Yovela International Christian School, nestled in the heart of Kampala, Uganda, offers a unique educational journey for students aged 1 to 18. We provide an individualized, biblically based education, fostering academic excellence and nurturing the diverse talents of our students through internationally recognized courses and enriching extracurricular activities.
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: { xs: "15px", sm: "16px", md: "17px" }, textAlign: "justify" }}
              >
                Our dedicated educators employ a personalized teaching approach, ensuring each student's needs are met and promoting experiential learning. We are committed to a child-centered, biblically grounded methodology, preparing students to excel in a globalized world while cultivating a strong sense of social responsibility.
              </Typography>
            </CustomStack>
          </CustomStack>
        </CustomStack>

        {/* Why choose the school */}
        <CustomStack
          bgcolor={palette.whites[500]}
          height="auto"
          sx={{
            padding: "40px 0px",
          }}
          flexDirection={"column"}
          alignItems="center"
          gap={"40px"}
        >
          <CustomStack
            width="100%"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap="25px"
          >
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: { xs: "20px", sm: "24px", md: "30px" },
                textAlign: "center !important",
              }}
            >
              Why Choose Our International School
            </Typography>

            <Box
              width="100%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomStack justifyContent={"space-around"} width={{ xs: "100%", md: "90%" }} flexDirection={{ xs: "column", md: "row" }} alignItems={"center"}>
                {cirriculumContent.map((data, index) => {
                  return (
                    <CustomStack
                      key={index}
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap="15px"
                      width={{ xs: "100%", md: "260px" }}
                    >
                      <Box
                        bgcolor={palette.primary[100]}
                        sx={{
                          width: "120px",
                          height: "120px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "15%",
                        }}
                      >
                        <img src={data.icon} alt={data.title} style={{ maxWidth: "80%", maxHeight: "80%" }} />
                      </Box>

                      <CustomStack
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap="15px"
                      >
                        <Typography
                          variant="h4"
                          color="initial"
                          sx={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                            textAlign: "center",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {data.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ textAlign: "center", fontSize: "15px" }}
                        >
                          {data.subText}
                        </Typography>
                      </CustomStack>
                    </CustomStack>
                  );
                })}
              </CustomStack>
            </Box>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/* Slider for types */}
      <Box
        sx={{
          padding: { xs: "20px", md: "61px 70px" },
        }}
        bgcolor={palette.tertiary[500]}
      >
        <CustomStack flexDirection={"column"} position="relative" width="100%">
          <CustomStack padding={"0px 28px"} width="100%">
            <Swiper
              init="false"
              ref={swiperElRef}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className="mySwiper"
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = ".swiper-button-prev";
                swiper.params.navigation.nextEl = ".swiper-button-next";
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide>
                <CustomStack
                  bgcolor={palette.tertiary[500]}
                  width="100%"
                  flexDirection={{ xs: "column", md: "row" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap="20px"
                >
                  <Box
                    sx={{
                      height: { xs: "200px", sm: "250px", md: "360px" },
                      width: { xs: "100%", md: "540px" },
                      position: "relative",
                    }}
                  >
                    <img src={earlyYears} alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Box>
                  <CustomStack
                    flexDirection={"column"}
                    gap="20px"
                    width={{ xs: "100%", md: "530px" }}
                  >
                    <Typography
                      variant="h1"
                      color={palette.primary[50]}
                      sx={{ fontWeight: "300", fontSize: { xs: "20px", sm: "24px", md: "30px" } }}
                    >
                      Early Years
                    </Typography>

                    <Typography
                      variant="body1"
                      color={palette.whites[500]}
                      sx={{ fontSize: "16px", textAlign: "center" }}
                    >
                      Our Early Years program at Yovela International Christian School provides a nurturing and stimulating environment for young learners. We focus on developing foundational skills through play-based activities, fostering curiosity and a love for learning.
                    </Typography>
                  </CustomStack>
                </CustomStack>
              </SwiperSlide>

              <SwiperSlide>
                <CustomStack
                  bgcolor={palette.tertiary[500]}
                  width="100%"
                  flexDirection={{ xs: "column", md: "row" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap="20px"
                >
                  <Box
                    sx={{
                      height: { xs: "200px", sm: "250px", md: "360px" },
                      width: { xs: "100%", md: "540px" },
                      position: "relative",
                    }}
                  >
                    <img src={earlyYears} alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Box>
                  <CustomStack
                    flexDirection={"column"}
                    gap="20px"
                    width={{ xs: "100%", md: "530px" }}
                  >
                    <Typography
                      variant="h1"
                      color={palette.primary[50]}
                      sx={{ fontWeight: "300", fontSize: { xs: "20px", sm: "24px", md: "30px" } }}
                    >
                      Primary & Secondary Education
                    </Typography>

                    <Typography
                      variant="body1"
                      color={palette.whites[500]}
                      sx={{ fontSize: "16px", textAlign: "center" }}
                    >
                      Our primary and secondary programs build on the strong foundation laid in the early years. We emphasize academic rigor, critical thinking, and character development, preparing students for higher education and future success.
                    </Typography>
                  </CustomStack>
                </CustomStack>
              </SwiperSlide>
            </Swiper>
          </CustomStack>

          {/* Navs */}
          <Box
            className="swiper-button-prev"
            ref={navigationPrevRef}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "50%",
              left: { xs: "0", md: "-1.5rem" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-left-short" width="40" height="40" />
          </Box>

          <Box
            className="swiper-button-next"
            ref={navigationNextRef}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "50%",
              color: palette.primary[500],
              right: { xs: "0", md: "-1.5rem" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-right-short" width="40" height="40" />
          </Box>
        </CustomStack>
      </Box>

      {/* Accreditations */}
      <CustomStack
        flexDirection={"column"}
        sx={{
          padding: { xs: "20px", md: "61px 70px" },
        }}
        gap={"20px"}
        alignItems="center"
        bgcolor={"#FFFDFC"}
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "300", fontSize: { xs: "20px", sm: "24px", md: "30px" } }}
        >
          Accreditations
        </Typography>

        <CustomStack flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} gap={"15px"}>
          {accreditationContent.map((data, index) => {
            return (
              <Box key={index} sx={{ maxWidth: "150px", maxHeight: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={data.icon} alt={data.title} style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </Box>
            );
          })}
        </CustomStack>
      </CustomStack>

      {/* Word from principal */}
      <CustomStack
        flexDirection={{ xs: "column", md: "row" }}
        bgcolor={palette.whites[500]}
        sx={{
          padding: { xs: "20px", md: "61px 90px" },
        }}
        gap={{ xs: "20px", sm: "30px", md: "80px" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Avatar
          alt="principal"
          src={PrincipalPhoto}
          sx={{ width: { xs: "120px", sm: "150px", md: "240px" }, height: { xs: "120px", sm: "150px", md: "240px" } }}
        />

        <CustomStack maxWidth="811px" flexDirection={"column"} gap="20px ">
          <CustomStack flexDirection="column" gap="15px">
            <Typography
              variant="h3"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: { xs: "20px", sm: "24px", md: "30px" },
                textTransform: "capitalize",
              }}
            >
              A Word From Our Principal
            </Typography>

            <Typography
              variant="body1"
              color={palette.tertiary[400]}
              sx={{ fontSize: { xs: "15px", sm: "16px", md: "18px" }, textAlign: "justify" }}
            >
              At Yovela International Christian School, we are committed to nurturing not just academic excellence, but also the character and spiritual growth of each student. We believe in providing a safe, supportive, and stimulating environment where students can discover their God-given talents and prepare to make a positive impact on the world.
            </Typography>
          </CustomStack>
          <Typography
            variant="h6"
            color={palette.tertiary[400]}
            sx={{
              textTransform: "uppercase",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            RESUL USTAALIOGU — principal
          </Typography>
        </CustomStack>
      </CustomStack>

      {/* Slider for exciting activities */}
      <Box bgcolor={palette.tertiary[500]} height="auto" padding={"20px 0"}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 2,
            }
          }}
          className="mySwiper"
        >
          {exPhotosData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={data.image} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Home;