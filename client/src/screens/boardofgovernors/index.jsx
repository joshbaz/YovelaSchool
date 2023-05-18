import React from "react";
import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import PageNavLocation from "../../components/PageNavLocation";
import boardsbg from "../../assets/boardgovenors.png";
import InterconnectedIcon from "../../assets/InterconnectedIcon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import BoardMember1 from "../../assets/Governor1.png";
import BoardMember2 from "../../assets/Governor2.png";
import BoardMember3 from "../../assets/Govenor3.png";

import AdminMember1 from "../../assets/admin1.png";
import AdminMember2 from "../../assets/admin2.png";
import AdminMember3 from "../../assets/admin3.png";

const BoardList = [
  {
    title: "Ministry of Education Collaboration & Registration",
    images: BoardMember1,
    Name: "Dr. Oboyo Oludhe",
  },
  {
    title: "Finance Management",
    images: BoardMember2,
    Name: "Dr. Oboyo Oludhe",
  },
  {
    title: "Infrastructure development",
    images: BoardMember3,
    Name: "Dr. Oboyo Oludhe",
  },
  {
    title: "Infrastructure development",
    images: BoardMember3,
    Name: "Dr. Oboyo Oludhe",
  },
];

const AdminList = [
  {
    title: "School Principal",
    images: AdminMember1,
    Name: "Dr. Oboyo Oludhe",
  },
  {
    title: "Deputy School Principal",
    images: AdminMember2,
    Name: "Oboyo Oludhe",
  },
  {
    title: "Secretary",
    images: AdminMember3,
    Name: "Dr. Oboyo Oludhe",
  },
  {
    title: "Secretary",
    images: AdminMember3,
    Name: "Dr. Oboyo Oludhe",
  },
];

const Container = styled(Stack)(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
  overflowX: "hidden",
  backgroundColor: theme.palette.primary[500],

  ".openSpanText": {
    fontWeight: "400",
  },
  ".swiper2": {
    backgroundColor: theme.palette.whites[100],
    position: "relative",
  },
  ".swiper-button-next, .swiper-button-prev ": {
    color: theme.palette.secondary[500],

    borderRadius: "3px",
    width: "44px",
    height: "44px",
  },
  ".swiper-button-disabled": {
    backgroundColor: "transparent !important",
  },
}));
const BoardOfGovernors = () => {
  const { palette } = useTheme();
  const navigationPrevRef1 = React.useRef(null);
  const navigationNextRef1 = React.useRef(null);
  const swiperElRef = React.useRef(null);

  const navigationPrevRef2 = React.useRef(null);
  const navigationNextRef2 = React.useRef(null);
  return (
    <Container gap={"0px"}>
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"Board of Governors"} headerimage={boardsbg} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Our School : Board of Governors"}
        prevlocation={"Home"}
      />

      {/** Intro */}
      <CustomStack
        bgcolor={palette.whites[500]}
        flexDirection="row"
        gap="67px"
        justifyContent={"center"}
        padding={"75px 0"}
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
          <img src={InterconnectedIcon} alt="connected" />
        </Box>

        <CustomStack flexDirection={"column"} gap="20px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            We are guided by forward thinking leaders
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Our Governors, Administrative staff are esteemed individuals who
              &quot;Inspire young people through the calibre of their
              contributions to the society &quot;.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** board of governors */}
      <CustomStack
        bgcolor={palette.whites[100]}
        flexDirection="column"
        gap="67px"
        justifyContent={"center"}
        padding={"71px 47px 20px 47px"}
        alignItems={"center"}
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          Board of Govenors
        </Typography>

        <CustomStack flexDirection={"column"} position="relative" width="100%">
          <CustomStack padding={"0px 28px"} width="100%">
            <Swiper
              init="false"
              ref={swiperElRef}
              slidesPerView={3}
              spaceBetween={20}
              className="mySwiper swiper2"
              modules={[Navigation]}
              navigation={{
                prevEl: navigationPrevRef1.current,
                nextEl: navigationNextRef1.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef1.current;
                swiper.params.navigation.nextEl = navigationNextRef1.current;
              }}
            >
              {BoardList.map((data, index) => {
                return (
                  <SwiperSlide key={index} className="swiper2">
                    <CustomStack
                      bgcolor={palette.whites[100]}
                      flexDirection={"column"}
                      alignItems={"center"}
                      gap="20px"
                      overflow={"hidden"}
                    >
                      <Box
                        sx={{
                          height: "438px",
                          width: "404.11px",
                          position: "relative",
                        }}
                      >
                        <img src={data.images} alt="hero" />
                      </Box>
                      <CustomStack flexDirection="column">
                        <Typography
                          variant="body1"
                          color={palette.tertiary[500]}
                          sx={{
                            fontSize: "22px",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          {data.Name}
                        </Typography>
                        <Typography
                          variant="body1"
                          color={palette.tertiary[500]}
                          sx={{
                            fontSize: "17px",
                            fontWeight: "400",
                            textTransform: "capitalize",
                          }}
                        >
                          {data.title}
                        </Typography>
                      </CustomStack>
                    </CustomStack>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </CustomStack>

          {/** navs */}
          <Box
            className="swiper-button-prev"
            ref={navigationPrevRef1}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "45%",
              left: "-1.5rem",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-left-short" width="40" height="40" />
          </Box>

          <Box
            className="swiper-button-next"
            ref={navigationNextRef1}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "45%",
              color: palette.primary[500],
              right: "-1.5rem",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-right-short" width="40" height="40" />
          </Box>
        </CustomStack>
      </CustomStack>

      {/** Administrators */}
      <CustomStack
        bgcolor={palette.whites[100]}
        flexDirection="column"
        gap="44px"
        justifyContent={"center"}
        padding={"75px 47px"}
        alignItems={"center"}
      >
        <Box width="100%" borderTop={`1px solid ${palette.tertiary[50]}`} />
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          School Administration
        </Typography>

        <CustomStack flexDirection={"column"} position="relative" width="100%">
          <CustomStack padding={"0px 28px"} width="100%">
            <Swiper
              init="false"
              slidesPerView={3}
              spaceBetween={20}
              className="mySwiper swiper2"
              modules={[Navigation]}
              navigation={{
                prevEl: navigationPrevRef2.current,
                nextEl: navigationNextRef2.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef2.current;
                swiper.params.navigation.nextEl = navigationNextRef2.current;
              }}
            >
              {AdminList.map((data, index) => {
                return (
                  <SwiperSlide key={index} className="swiper2">
                    <CustomStack
                      bgcolor={palette.whites[100]}
                      flexDirection={"column"}
                      alignItems={"center"}
                      gap="20px"
                      overflow={"hidden"}
                    >
                      <Box
                        sx={{
                          height: "438px",
                          width: "404.11px",
                          position: "relative",
                        }}
                      >
                        <img src={data.images} alt="hero" />
                      </Box>
                      <CustomStack flexDirection="column">
                        <Typography
                          variant="body1"
                          color={palette.tertiary[500]}
                          sx={{
                            fontSize: "22px",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          {data.Name}
                        </Typography>
                        <Typography
                          variant="body1"
                          color={palette.tertiary[500]}
                          sx={{
                            fontSize: "17px",
                            fontWeight: "400",
                            textTransform: "capitalize",
                          }}
                        >
                          {data.title}
                        </Typography>
                      </CustomStack>
                    </CustomStack>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </CustomStack>

          {/** navs */}
          <Box
            className="swiper-button-prev"
            ref={navigationPrevRef2}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "45%",
              left: "-1.5rem",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-left-short" width="40" height="40" />
          </Box>

          <Box
            className="swiper-button-next"
            ref={navigationNextRef2}
            zIndex={"10"}
            sx={{
              position: "absolute",
              top: "45%",
              color: palette.primary[500],
              right: "-1.5rem",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon="bi:arrow-right-short" width="40" height="40" />
          </Box>
        </CustomStack>
      </CustomStack>
      <Footer />
    </Container>
  );
};

export default BoardOfGovernors;
