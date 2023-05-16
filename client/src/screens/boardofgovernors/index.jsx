import React from "react";
import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import clubsbg from "../../assets/clubs.png";
import PageNavLocation from "../../components/PageNavLocation";
import boardsbg from "../../assets/boardgovenors.png";
import InterconnectedIcon from "../../assets/InterconnectedIcon.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

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
  },
  {
    title: "Sports",
    images: BoardMember2,
  },
  {
    title: "Music",
    images: BoardMember3,
  },
];

const AdminList = [
  {
    title: "Ministry",
    images: AdminMember1,
  },
  {
    title: "Sports",
    images: AdminMember2,
  },
  {
    title: "Music",
    images: AdminMember3,
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
}));
const BoardOfGovernors = () => {
  const { palette } = useTheme();
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
        flexDirection="row"
        gap="67px"
        justifyContent={"center"}
        padding={"75px 0"}
        alignItems={"center"}
      >
        <Typography
          variant="h1"
          color={palette.secondary[700]}
          sx={{ fontWeight: "500", fontSize: "30px" }}
        >
          Board of Govenors
        </Typography>
      </CustomStack>

      <Footer />
    </Container>
  );
};

export default BoardOfGovernors;
