import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography, Grid } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Aboutbg from "../../assets/Aboutbg.png";
import Vinebg from "../../assets/vine.png";
import Trinitybg from "../../assets/trinity.png";
import PageNavLocation from "../../components/PageNavLocation";

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

      {/** Vine  */}
      <CustomStack
        sx={{
          padding: { xs: "20px", md: "33px 77px" },
        }}
        bgcolor={palette.whites[100]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[100]}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: "30px", md: "60px" }}
          justifyContent={"center"}
        >
          <Box>
            <ImageContainer
              display={"block"}
              sx={{
                height: { xs: "300px", md: "450px" },
                width: { xs: "100%", md: "450px" },
                position: "relative",
              }}
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
                fontSize: { xs: "24px", md: "30px" },
                textTransform: "capitalize",
              }}
            >
              The Vine and the Branches
            </Typography>

            <CustomStack flexDirection={"column"} gap="15px">
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                At Yovela International Christian School, we believe in the intimate connection between Christ, the Vine, and us, the branches (John 15:5). We are committed to fostering a community where students understand their reliance on Christ for spiritual growth and fruitful living. We aim to cultivate an environment that nurtures spiritual development alongside academic excellence, enabling students to bear fruit that glorifies God.
              </Typography>
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      {/** The trinity */}
      <CustomStack
        sx={{
          padding: { xs: "20px", md: "33px 77px" },
        }}
        bgcolor={palette.whites[100]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[100]}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: "30px", md: "60px" }}
          justifyContent={"center"}
        >
          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="h1"
              color={palette.secondary[700]}
              sx={{
                fontWeight: "500",
                fontSize: { xs: "24px", md: "30px" },
                textTransform: "capitalize",
              }}
            >
              The Trinity
            </Typography>

            <CustomStack flexDirection={"column"} gap="15px">
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "17px", textAlign: "justify" }}
              >
                We affirm the doctrine of the Trinity: one God in three persons—Father, Son, and Holy Spirit. This foundational belief guides our understanding of God's nature and our relationship with Him. We strive to create a learning environment where students understand the profound love and unity within the Godhead.
              </Typography>
            </CustomStack>
          </CustomStack>

          <Box>
            <ImageContainer
              display={"block"}
              sx={{
                height: { xs: "300px", md: "450px" },
                width: { xs: "100%", md: "484px" },
                position: "relative",
              }}
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

      {/** Sinful nature */}
      <CustomStack
        sx={{
          padding: { xs: "40px 20px", md: "86px 170px" },
        }}
        bgcolor={palette.whites[500]}
        flexDirection={"column"}
      >
        <CustomStack
          bgcolor={palette.whites[500]}
          alignItems="center"
          flexDirection={"column"}
          gap="30px"
          maxWidth={"1100px"}
          justifyContent={"center"}
        >
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{
              fontWeight: "500",
              fontSize: { xs: "24px", md: "30px" },
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
              We acknowledge the reality of the sinful nature and its separation from God. However, we also believe in the transformative power of salvation through Jesus Christ. At Yovela, we aim to guide students in understanding this fundamental truth, fostering an environment where they can experience and embrace God's grace and redemptive love.
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Our educational approach integrates this belief into our curriculum, encouraging students to live lives that reflect their understanding of salvation and embody the values of Christian faith.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      <Footer />
    </Container>
  );
};

export default StatmentOfFaith;