import React from "react";
import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography, Button } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import PageNavLocation from "../../components/PageNavLocation";
import careersbg from "../../assets/careersbg.png";
import exploreIcon from "../../assets/exploreIcon.png";
import { useNavigate } from "react-router-dom";

const careerCategories = [
  {
    title: "Accounting",
  },
  {
    title: "Teaching",
  },
  {
    title: "Accounting",
  },
  {
    title: "Computing and IT",
  },
];

const careerData = [
  {
    title: "Junior Audit Clerk",
  },
  {
    title: "English Teacher Assistant",
  },
  {
    title: "Administrative Assistant",
  },
  {
    title: "Database administrator",
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
  ".yearspan": {
    color: theme.palette.tertiary[200],
  },
  ".swiper2": {
    backgroundColor: theme.palette.whites[100],
    position: "relative",
  },
}));
const Careers = () => {
  const { palette } = useTheme();
  let routeNavigate = useNavigate();
  return (
    <Container gap={"0px"}>
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"Careers"} headerimage={careersbg} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Our School : Careers"}
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
          <img src={exploreIcon} alt="connected" />
        </Box>

        <CustomStack flexDirection={"column"} gap="5px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Explore careers
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              We’ve grouped similar careers together to make it easy for you to
              explore.
            </Typography>

            <CustomStack flexDirection="row" gap="15px">
              {careerCategories.map((data, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      padding: "8px 20px",
                      border: `1px solid ${palette.tertiary[500]}`,
                      borderRadius: "2px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={palette.tertiary[500]}
                      sx={{
                        textTransform: "uppercase",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                );
              })}
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** jobs */}
      <CustomStack
        flexDirection={"column"}
        bgcolor={palette.whites[100]}
        padding={"40px 0"}
        alignItems={"center"}
        gap="34px"
      >
        {careerData.length > 0 ? (
          <>
            {careerData.map((data, index) => {
              return (
                <CustomStack
                  key={index}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  padding={"40px 50px"}
                  width="1017px"
                  sx={{
                    border: `1px solid ${palette.tertiary[50]}`,
                    borderRadius: "15px",
                  }}
                >
                  <CustomStack
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap="30px"
                  >
                    <Typography
                      variant="h1"
                      color={palette.secondary[700]}
                      sx={{ fontWeight: "600", fontSize: "30px" }}
                    >
                      Junior Audit Clerk
                    </Typography>

                    <CustomStack flexDirection={"row"} gap="15px">
                      <Box
                        sx={{
                          padding: "8px 20px",
                          background: "rgba(195, 195, 195, 0.2)",
                          borderRadius: "2px",
                        }}
                      >
                        <Typography
                          variant="body1"
                          color={palette.tertiary[500]}
                          sx={{
                            textTransform: "uppercase",
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          FULLTIME
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          padding: "8px 20px",

                          background: "rgba(195, 195, 195, 0.2)",
                          borderRadius: "2px",
                        }}
                      >
                        <Typography
                          variant="body1"
                          color={palette.tertiary[500]}
                          sx={{
                            textTransform: "uppercase",
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          Accounting
                        </Typography>
                      </Box>
                    </CustomStack>
                  </CustomStack>
                  <CustomStack
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                    justifyContent={"space-between"}
                    gap="30px"
                  >
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "23px",
                        fontWeight: "500",
                      }}
                    >
                      400K - 2,000,000 <span className="yearspan">/Year</span>
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{ padding: "9px 23px", width: "143px" }}
                      onClick={() => routeNavigate("/ourschool/careers/info")}
                    >
                      Apply
                    </Button>
                  </CustomStack>
                </CustomStack>
              );
            })}
          </>
        ) : (
          <CustomStack
            flexDirection={"column"}
            alignItems={"center "}
            gap="30px"
            width="847px"
            padding={"40px 0px"}
            sx={{
              border: `1px solid ${palette.tertiary[50]}`,
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h1"
              color={palette.tertiary[200]}
              sx={{ fontWeight: "600", fontSize: "25px" }}
            >
              NO JOB POSTED
            </Typography>
          </CustomStack>
        )}
      </CustomStack>

      <Footer />
    </Container>
  );
};

export default Careers;
