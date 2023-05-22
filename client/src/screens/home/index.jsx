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
      "Accelerated Christian Education curriculum is an individualised, self-paced, biblically based educational programme.",
    icon: content_Ace,
  },
  {
    title: "1 on 1 Teaching",
    subText:
      "Accelerated Christian Education curriculum is an individualised, self-paced, biblically based educational programme.",
    icon: content_Teaching,
  },
  {
    title: "Cutting-Edge Technologies",
    subText:
      "Accelerated Christian Education curriculum is an individualised, self-paced, biblically based educational programme.",
    icon: content_tech,
  },
  {
    title: "Extra Curriculum activities",
    subText:
      "Accelerated Christian Education curriculum is an individualised, self-paced, biblically based educational programme.",
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
  const paginationRef = React.useRef(null);

  return (
    <Container spacing={0}>
      {/** hero & nav */}
      <CustomStack flexDirection={"column"} height="100vh !important">
        <Navbar />
        <CustomStack
          flexDirection={"column"}
          bgcolor={palette.primary[500]}
          m="0"
          p="0"
          spacing={0}
          height="100vh"
        >
          {/** hero */}
          <Box height="86%">
            <Swiper
              scrollbar={{ hide: true }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={heroimg} alt="hero" />
              </SwiperSlide>
            </Swiper>
          </Box>

          <CustomStack
            height="14%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FlexBetween width="50%" bgcolor={palette.primary[100]}>
              <Box>
                <Typography variant="h2" color={palette.whites[500]}>
                  Enrollment is{" "}
                  <em>
                    <span className="openSpanText">open</span>
                  </em>
                </Typography>
              </Box>

              <Box>
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
              </Box>
            </FlexBetween>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** welcome message  */}
      <CustomStack
        sx={{
          padding: "0px 70px",
        }}
        bgcolor={palette.whites[500]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[500]}
          height="100%"
          flexDirection={"row"}
          alignItems="center"
          gap={"60px"}
          sx={{
            padding: "61px 0px",
          }}
          borderBottom={`1px solid ${palette.tertiary[50]}`}
          justifyContent={"center"}
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

            <CustomStack flexDirection={"column"} gap="30px">
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                Yovela International Christian school is a private,
                international school in Kampala, Uganda. Students aged 1 to 18
                gain individualised and biblically based education to achieve
                academic excellence with internationally-recognised courses and
                complementary activities to develop their talents.
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                Our experienced educators apply a personalised teaching approach
                to meet the needs of each individual.Thus promoting experiential
                learning opportunities for all students. The effectiveness of
                our child-centred, biblically-based methodology ensures students
                are well-prepared to thrive in the world and have an
                appreciation of social responsibility.
              </Typography>
            </CustomStack>
          </CustomStack>
        </CustomStack>

        {/** why choose the school  */}

        <CustomStack
          bgcolor={palette.whites[500]}
          height="100%"
          sx={{
            padding: "61px 0px",
          }}
          flexDirection={"row"}
          alignItems="center"
          gap={"60px"}
        >
          <CustomStack
            width="100%"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap="35px"
          >
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: "30px",
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
              <CustomStack justifyContent={"space-between"} width="90%">
                {cirriculumContent.map((data, index) => {
                  return (
                    <CustomStack
                      key={index}
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap="20px"
                      width="260px"
                    >
                      <Box
                        bgcolor={palette.primary[100]}
                        sx={{
                          width: "160px",
                          height: "160px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "15%",
                        }}
                      >
                        <img src={data.icon} alt={data.title} />
                      </Box>

                      <CustomStack
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap="20px"
                      >
                        <Typography
                          variant="h4"
                          color="initial"
                          sx={{
                            fontSize: "18px",
                            textTransform: "uppercase",
                            textAlign: "center",
                            height: "46px",
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
                          sx={{ textAlign: "center", fontSize: "16px" }}
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

      {/** slider for types */}
      <Box
        sx={{
          padding: "61px 70px",
        }}
        bgcolor={palette.tertiary[500]}
      >
        <CustomStack flexDirection={"column"} position="relative" width="100%">
          <CustomStack padding={"0px 28px"} width="100%">
            <Swiper
              init="false"
              ref={swiperElRef}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{
                clickable: true,
                el: paginationRef.current,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              className="mySwiper"
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              }}
            >
              <SwiperSlide>
                <CustomStack
                  bgcolor={palette.tertiary[500]}
                  width="100%"
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap="20px"
                >
                  <Box
                    sx={{
                      height: "360px",
                      width: "540px",
                      position: "relative",
                    }}
                  >
                    <img src={earlyYears} alt="hero" />
                  </Box>
                  <CustomStack
                    flexDirection={"column"}
                    gap="30px"
                    width={"530px"}
                  >
                    <Typography
                      variant="h1"
                      color={palette.primary[50]}
                      sx={{ fontWeight: "300", fontSize: "30px" }}
                    >
                      Early Years
                    </Typography>

                    <Typography
                      variant="body1"
                      color={palette.whites[500]}
                      sx={{ fontSize: "17px", textAlign: "center" }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Et mi urna libero
                      vestibulum eleifend elementum ac suscipit neque.
                      Pellentesque consectetur sed ut faucibus posuere ut
                      praesent blandit tempor.
                    </Typography>
                  </CustomStack>
                </CustomStack>
              </SwiperSlide>

              <SwiperSlide>
                <CustomStack
                  bgcolor={palette.tertiary[500]}
                  width="100%"
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap="20px"
                >
                  <Box
                    sx={{
                      height: "360px",
                      width: "540px",
                      position: "relative",
                    }}
                  >
                    <img src={earlyYears} alt="hero" />
                  </Box>
                  <CustomStack
                    flexDirection={"column"}
                    gap="30px"
                    width={"530px"}
                  >
                    <Typography
                      variant="h1"
                      color={palette.primary[50]}
                      sx={{ fontWeight: "300", fontSize: "30px" }}
                    >
                      Early Years
                    </Typography>

                    <Typography
                      variant="body1"
                      color={palette.whites[500]}
                      sx={{ fontSize: "17px", textAlign: "center" }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Et mi urna libero
                      vestibulum eleifend elementum ac suscipit neque.
                      Pellentesque consectetur sed ut faucibus posuere ut
                      praesent blandit tempor.
                    </Typography>
                  </CustomStack>
                </CustomStack>
              </SwiperSlide>
            </Swiper>
          </CustomStack>

          {/** navs */}
          <Box
            className="swiper-button-prev"
            ref={navigationPrevRef}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-1.5rem",

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
              right: "-1.5rem",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-right-short" width="40" height="40" />
          </Box>

          {/** swiper pagination */}
          <Box
            className="swiper-pagination"
            ref={paginationRef}
            sx={{
              bottom: "-30px !important",
              width: "100%",
            }}
          ></Box>
        </CustomStack>
      </Box>

      {/** Accreditations */}

      <CustomStack
        flexDirection={"column"}
        sx={{
          padding: "61px 70px",
        }}
        gap={"30px"}
        alignItems="center"
        bgcolor={"#FFFDFC"}
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "300", fontSize: "30px" }}
        >
          Accreditations
        </Typography>

        <CustomStack>
          {accreditationContent.map((data, index) => {
            return (
              <Box key={index}>
                <img src={data.icon} alt={data.title} />
              </Box>
            );
          })}
        </CustomStack>
      </CustomStack>

      {/** word from principal */}
      <CustomStack
        flexDirection={"row"}
        bgcolor={palette.whites[500]}
        sx={{
          padding: "61px 90px",
        }}
        gap="80px"
        justifyContent={"center"}
      >
        <Avatar
          alt="principal"
          src={PrincipalPhoto}
          sx={{ width: "240px", height: "240px" }}
        />

        <CustomStack maxWidth="811px" flexDirection={"column"} gap="25px ">
          <CustomStack flexDirection="column" gap="18px">
            <Typography
              variant="h3"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: "30px",
                textTransform: "capitalize",
              }}
            >
              A Word From Our Principal
            </Typography>

            <Typography
              variant="body1"
              color={palette.tertiary[400]}
              sx={{ fontSize: "18px", textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet consectetur. Et mi urna libero
              vestibulum eleifend elementum ac suscipit neque. Pellentesque
              consectetur sed ut faucibus posuere ut praesent blandit tempor.
              Maecenas at orci arcu pretium tempus risus velit pharetra sit.
              Malesuada tellus et sit vulputate malesuada viverra felis nunc
              suspendisse. Dui netus semper integer id vitae consequat massa.
            </Typography>
          </CustomStack>
          <Typography
            variant="h6"
            color={palette.tertiary[400]}
            sx={{
              textTransform: "uppercase",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            RESUL USTAALIOGU — principal
          </Typography>
        </CustomStack>
      </CustomStack>

      {/** slider for exciting acitivities */}

      <Box bgcolor={palette.tertiary[500]} height="350px">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,

            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          slidesPerView={2}
          className="mySwiper"
        >
          {exPhotosData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={data.image} alt={data.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      {/** footer */}
      <Footer />
    </Container>
  );
};

export default Home;
