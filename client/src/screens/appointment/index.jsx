import { styled } from "@mui/system";
import { Box, Stack, useTheme, Typography, Button, Grid } from "@mui/material";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import contactus from "../../assets/contactus.png";

import PageNavLocation from "../../components/PageNavLocation";
import AboutYovela from "../../assets/AboutYovela.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Container = styled(Stack)(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",

  backgroundColor: theme.palette.primary[500],

  ".openSpanText": {
    fontWeight: "400",
  },
  ".inputWrap > label": {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "15px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
  },
  ".inputWrap > input": {
    border: "none",
    borderBottom: "1px solid #949494",
    height: "30px",
    width: "100%",
    backgroundColor: "transparent",
  },
  ".inputWrap > input:focus": {
    border: "none",
    borderBottom: "1px solid #949494",
    outline: "none",
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

const MarketingPlatforms = [
  {
    title: "Social Media",
  },
  {
    title: "Email",
  },
  {
    title: "Advert in a newspaper",
  },
  {
    title: "Search Engine",
  },
  {
    title: "Recommendation from family or friends",
  },
  {
    title: "Other",
  },
];

const Appointment = () => {
  const { palette } = useTheme();
  return (
    <Container spacing={0}>
      <CustomStack flexDirection={"column"} height="100% ">
        <Navbar />
        <PageHeader title={"Book Appointment"} headerimage={contactus} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Book Appointment"}
        prevlocation={"Home"}
      />

      <CustomStack
        sx={{
          padding: "25px 77px  65px 77px",
        }}
        bgcolor={palette.whites[100]}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems="center"
      >
        <CustomStack
          flexDirection={"column"}
          gap="40px"
          width="606px"
          sx={{
            paddingRight: "16px",
          }}
        >
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Information Request
          </Typography>

          <CustomStack flexDirection={"column"} gap="40px" width="100%">
            {/** inputs */}
            <CustomStack flexDirection={"column"} width="100%" gap={"30px"}>
              {/** names */}
              <CustomStack flexDirection={"row"} gap="20px" width="100%">
                <CustomStack
                  flexDirection={"column"}
                  className="inputWrap"
                  gap="5.5px"
                  width="100%"
                >
                  <label>Firstname</label>
                  <input />
                </CustomStack>
                <CustomStack
                  flexDirection={"column"}
                  className="inputWrap"
                  gap="5.5px"
                  width="100%"
                >
                  <label>Lastname</label>
                  <input />
                </CustomStack>
              </CustomStack>
              {/** email */}
              <CustomStack flexDirection={"row"} gap="20px" width="100%">
                <CustomStack
                  flexDirection={"column"}
                  className="inputWrap"
                  gap="5.5px"
                  width="100%"
                >
                  <label>Email</label>
                  <input />
                </CustomStack>
              </CustomStack>

              {/** phone number */}
              <CustomStack flexDirection={"row"} gap="20px">
                <CustomStack
                  flexDirection={"column"}
                  className="inputWrap"
                  gap="5.5px"
                  width="100%"
                >
                  <label>Phonenumber</label>
                  <input />
                  <label>Please start with country code e.g +256</label>
                </CustomStack>
              </CustomStack>
              {/** how they knew */}
              <CustomStack flexDirection={"row"} gap="20px">
                <CustomStack
                  flexDirection={"column"}
                  className="inputWrap"
                  gap="5.5px"
                  width="100%"
                >
                  <label>Where did you hear about Yovela School?</label>

                  <FormGroup width="100%" sx={{ paddingLeft: "10px" }}>
                    <Grid spacing={1}>
                      {MarketingPlatforms.map((data, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            control={<Checkbox />}
                            label={data.title}
                            sx={{
                              ".MuiFormControlLabel-label": {
                                fontSize: "16px",
                                fontFamily: "Roboto",
                                fontWeight: "400",
                                letterSpacing: "0.15px",
                              },
                            }}
                          />
                        );
                      })}
                    </Grid>
                  </FormGroup>
                </CustomStack>
              </CustomStack>
            </CustomStack>

            {/** button stacks */}
            <CustomStack justifyContent={"flex-end"}>
              <CustomStack
                flexDirection={"row"}
                alignItems={"center"}
                gap="20px"
              >
                <Button
                  variant="text"
                  sx={{
                    height: "40px",
                    fontSize: "15px",
                    padding: "7px 20px",
                  }}
                >
                  Cancel
                </Button>
                <Typography
                  variant="body1"
                  color={palette.tertiary[600]}
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  or
                </Typography>
                <Button
                  variant="contained"
                  paddingLeft="20px"
                  sx={{
                    height: "40px",
                    fontSize: "15px",
                    padding: "7px 20px",
                  }}
                >
                  Submit
                </Button>
              </CustomStack>
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      <Footer />
    </Container>
  );
};

export default Appointment;
