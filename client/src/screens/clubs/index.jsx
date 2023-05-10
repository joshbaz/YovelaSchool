import React from "react";
import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography, Button } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import clubsbg from "../../assets/clubs.png";
import PageNavLocation from "../../components/PageNavLocation";

import clubsintroicon from "../../assets/clubsIntroIcon.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Scrollbar, Navigation, Pagination } from "swiper";

import activityministry from "../../assets/ActivityMinistry.png";
import activitysport from "../../assets/ActivitySport.png";
import activitymusic from "../../assets/ActivityMusic.png";

const ActivityList = [
  {
    title: "Ministry",
    images: activityministry,
  },
  {
    title: "Sports",
    images: activitysport,
  },
  {
    title: "Music",
    images: activitymusic,
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
    backgroundColor: theme.palette.tertiary[600],
  },
}));
const Clubs = () => {
  const { palette } = useTheme();
  return (
    <Container gap={"0px"}>
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"Clubs"} headerimage={clubsbg} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"School life : Clubs"}
        prevlocation={"Home"}
      />
      {/** Intro */}
      <CustomStack
        bgcolor={palette.whites[100]}
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
          <img src={clubsintroicon} alt="club intro icon" />
        </Box>

        <CustomStack flexDirection={"column"} gap="30px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Wide Range of Extra-Curricular Activities
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Our wide range of clubs, after-school lessons, and additional
              classes provides children with the ideal foundation for
              self-guided learning. During events and co-curricular sessions,
              our students can unleash their individuality, spend time with
              their peers and refine abilities that open up a world of
              possibilities.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** club activites */}
      <CustomStack
        flexDirection={"column"}
        width="100%"
        alignItems="center"
        padding="43px 90px"
        bgcolor={palette.tertiary[600]}
        gap="25px"
      >
        <CustomStack
          flexDirection={"column"}
          gap="20px"
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="body1"
            color={palette.primary[50]}
            sx={{
              fontSize: "30px",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            Club Activities
          </Typography>
          <Typography
            variant="body1"
            color={palette.whites[100]}
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            The following clubs are offered regularly throughout the year
          </Typography>
        </CustomStack>

        <CustomStack overflow={"hidden"} width="100%">
          <Swiper
            scrollbar={{ hide: true }}
            slidesPerView={2}
            spaceBetween={20}
            className="mySwiper swiper2"
            module={[Navigation]}
          >
            {ActivityList.map((data, index) => {
              return (
                <SwiperSlide key={index} className="swiper2">
                  <CustomStack
                    bgcolor={palette.tertiary[600]}
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
                    <Typography
                      variant="body1"
                      color={palette.whites[100]}
                      sx={{
                        fontSize: "27px",
                        fontWeight: "200",
                        textTransform: "capitalize",
                      }}
                    >
                      {data.title}
                    </Typography>
                  </CustomStack>
                </SwiperSlide>
              );
            })}

            <div className="swiper-button-prev">
              <Icon icon="bi:arrow-left-short" width="60px" height="60px" />
            </div>
            <div className="swiper-button-next">
              <Icon icon="bi:arrow-right-short" width="60px" height="60px" />
            </div>
          </Swiper>
        </CustomStack>
      </CustomStack>

      {/** club moments */}
    </Container>
  );
};

export default Clubs;
