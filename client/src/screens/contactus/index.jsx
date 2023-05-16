import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography, Button } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import contactus from "../../assets/contactus.png";

import PageNavLocation from "../../components/PageNavLocation";
import AboutYovela from "../../assets/AboutYovela.png";
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
const ContactUs = () => {
  const { palette } = useTheme();
  return (
    <Container spacing={0}>
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"Contact Us"} headerimage={contactus} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation currlocation={"Contact us"} prevlocation={"Home"} />

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
              sx={{ height: "529px", width: "454px", position: "relative" }}
            >
              <img
                className="img"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={AboutYovela}
                alt="welcome to Yovela"
              />
            </ImageContainer>
          </Box>

          <CustomStack
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            height="100%"
            gap="26px"
          >
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{ fontWeight: "500", fontSize: "30px" }}
            >
              Our Campus
            </Typography>

            <CustomStack
              flexDirection={"column"}
              justifyContent={"space-between"}
              height="100%"
              gap="35px"
            >
              <CustomStack flexDirection={"column"} gap="20px">
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: "16px",
                    textAlign: "justify",
                    letterSpacing: "1px",
                  }}
                >
                  We look forward to welcoming your family to our wonderful
                  School. Contact our School Administrator to find out more
                  about our School and they will be happy to answer any
                  questions.
                </Typography>

                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: "16px",
                    textAlign: "justify",
                    letterSpacing: "1px",
                  }}
                >
                  To register your interest, please complete the appointment
                  form. Our Administrator will then contact you with further
                  details about our School and meeting details. Or Visit the
                  School in person to learn more about our School,
                </Typography>

                <CustomStack flexDirection={"column"} gap="2px">
                  <Typography
                    variant="body1"
                    color={palette.primary[500]}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textAlign: "justify",
                    }}
                  >
                    Location:
                  </Typography>

                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "16px",
                      textAlign: "justify",
                      letterSpacing: "1px",
                    }}
                  >
                    P O Box - Yovela International Christian school
                  </Typography>
                </CustomStack>

                <CustomStack flexDirection={"column"} gap="2px">
                  <Typography
                    variant="body1"
                    color={palette.primary[500]}
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textAlign: "justify",
                    }}
                  >
                    Directions:
                  </Typography>

                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "16px",
                      textAlign: "justify",
                      letterSpacing: "1px",
                    }}
                  >
                    Yovela Campus is located next to --. From the city centre,
                    access can be gained via x Road, turning left into y lane.
                    The school is 100 m along x Road on the right-hand side.
                  </Typography>
                </CustomStack>
              </CustomStack>

              <Button
                bgcolor={palette.primary[500]}
                sx={{
                  width: "205px",
                  height: "46px",
                  backgroundColor: palette.primary[500],
                  color: palette.whites[500],
                }}
              >
                Book Appointment
              </Button>
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>
      <Footer />
    </Container>
  );
};

export default ContactUs;
