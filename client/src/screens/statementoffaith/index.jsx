import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography, Button, Grid } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import contactus from "../../assets/contactus.png";

import PageNavLocation from "../../components/PageNavLocation";
import Admissions from "../../assets/admissions.png";
import Aboutbg from "../../assets/Aboutbg.png";
import Vinebg from "../../assets/vine.png";
import Trinitybg from "../../assets/trinity.png";

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
const StatmentOfFaith = () => {
  const { palette } = useTheme();
  return (
    <Container spacing={0} gap="0px">
      <CustomStack gap="0px" flexDirection={"column"}>
        <Navbar />
        <PageHeader title={"Statement of Faith"} headerimage={Aboutbg} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Our school : Statement of faith"}
        prevlocation={"Home"}
      />

      {/**  Vine  */}
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
              sx={{ height: "450px", width: "450px", position: "relative" }}
            >
              <img
                className="img"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={Vinebg}
                alt="welcome to Yovela"
              />
            </ImageContainer>
          </Box>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: "30px",
                textTransform: "capitalize",
              }}
            >
              The Vine and the Branches
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
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/**  The trinity */}
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
          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: "30px",
                textTransform: "capitalize",
              }}
            >
              The Trinity
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
            </CustomStack>
          </CustomStack>

          <Box>
            <ImageContainer
              display={"block"}
              sx={{ height: "450px", width: "484px", position: "relative" }}
            >
              <img
                className="img"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={Trinitybg}
                alt="welcome to Yovela"
              />
            </ImageContainer>
          </Box>
        </CustomStack>
      </CustomStack>

      {/**  Sinful nature */}
      <CustomStack
        sx={{
          padding: "86px 170px",
        }}
        bgcolor={palette.whites[500]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[500]}
          alignItems="center"
          flexDirection={"row"}
          gap={"60px"}
          maxWidth={"1100px"}
          justifyContent={"center"}
        >
          <CustomStack flexDirection={"column"} gap="10px">
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: "30px",
                textTransform: "capitalize",
              }}
            >
              The sinful nature & Salvation
            </Typography>

            <CustomStack flexDirection={"column"} gap="20px">
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

      <Footer />
    </Container>
  );
};

export default StatmentOfFaith;
