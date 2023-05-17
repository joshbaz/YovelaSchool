import { styled } from "@mui/system";
import { Stack, useTheme, Typography, Button } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";

import PageNavLocation from "../../components/PageNavLocation";
import careersbg from "../../assets/careersbg.png";

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
  ".ul": {
    padding: "0px 0px 0px 15px",
    margin: 0,
    fontSize: "17px",
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
const CareerInfo = () => {
  const { palette } = useTheme();

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
        extendedlocation={"Application:  Junior Audit Clerk"}
      />

      <CustomStack
        flexDirection={"column"}
        bgcolor={palette.whites[100]}
        alignItems={"center"}
      >
        <CustomStack
          flexDirection={"column"}
          bgcolor={palette.whites[100]}
          padding={"40px 0"}
          alignItems={"center"}
          gap="73px"
          width="1105px"
        >
          <CustomStack flexDirection={"column"} width="100%" gap="31px">
            {/** title & button */}
            <CustomStack
              width="100%"
              flexDirection="row"
              justifyContent={"space-between"}
              height="45px"
            >
              <Typography
                variant="h1"
                color={palette.secondary[700]}
                sx={{ fontWeight: "600", fontSize: "30px" }}
              >
                Junior Audit Clerk (Full time)
              </Typography>

              <Button
                variant="contained"
                sx={{ padding: "9px 23px", width: "143px" }}
              >
                APPLY NOW
              </Button>
            </CustomStack>

            {/** Job summary */}
            <CustomStack flexDirection="column" gap="6px">
              <Typography
                variant="body1"
                color={palette.tertiary[600]}
                sx={{ fontSize: "19px", fontWeight: "500" }}
              >
                Job Summary
              </Typography>

              <CustomStack flexDirection="column" gap="20px">
                <Typography
                  variant="body1"
                  color={palette.tertiary[600]}
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Services the public sector by providing information on Parking
                  & Transportation items such as: discounted parking passes,
                  parking permits, appeal process/problem resolution, removal of
                  wheel locks, issuance of refunds, and other related duties.
                </Typography>
                <Typography
                  variant="body1"
                  color={palette.tertiary[600]}
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Monitors, answers and transmits radio calls. Dispatches calls
                  for service needed from the field staff. Tracks parking spaces
                  and monitors occupancy, equipment issues. Change signs to
                  reflect when lots are full and communicate to field staff
                  which lots are available for over flow.
                </Typography>
                <Typography
                  variant="body1"
                  color={palette.tertiary[600]}
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Provide clerical assistance such as completing forms, typing
                  reports that support specific offices, maintaining customer
                  files, and other related duties as required. Maybe required to
                  work evening shift when rotating weekend and/or holiday
                  coverage.
                </Typography>
              </CustomStack>
            </CustomStack>

            {/** key roles and responsibility */}
            <CustomStack flexDirection="column" gap="6px">
              <Typography
                variant="body1"
                color={palette.tertiary[600]}
                sx={{ fontSize: "19px", fontWeight: "500" }}
              >
                Key Roles & Responsibilities
              </Typography>

              <CustomStack flexDirection="column" gap="20px">
                <ul className="ul">
                  <li>
                    <Typography
                      variant="body1"
                      color={palette.tertiary[600]}
                      sx={{
                        fontSize: "17px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                      }}
                    >
                      Answering telephone calls and if needed, direct calls to
                      appropriate personnel.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      color={palette.tertiary[600]}
                      sx={{
                        fontSize: "17px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                      }}
                    >
                      Answering telephone calls and if needed, direct calls to
                      appropriate personnel.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      color={palette.tertiary[600]}
                      sx={{
                        fontSize: "17px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                      }}
                    >
                      Answering telephone calls and if needed, direct calls to
                      appropriate personnel.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      color={palette.tertiary[600]}
                      sx={{
                        fontSize: "17px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                      }}
                    >
                      Answering telephone calls and if needed, direct calls to
                      appropriate personnel.
                    </Typography>
                  </li>
                </ul>
              </CustomStack>
            </CustomStack>

            {/** key skills & qualifications */}
            <CustomStack flexDirection="column" gap="6px">
              <Typography
                variant="body1"
                color={palette.tertiary[600]}
                sx={{ fontSize: "19px", fontWeight: "500" }}
              >
                Key Skills & Qualifications
              </Typography>

              <ul className="ul">
                <li>
                  <Typography
                    variant="body1"
                    color={palette.tertiary[600]}
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                    }}
                  >
                    ADiploma or Degree in relevant field.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    color={palette.tertiary[600]}
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                    }}
                  >
                    Two (2) years of experience working as an office admin.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    color={palette.tertiary[600]}
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                    }}
                  >
                    Proficiency in use of Microsoft Word and Excel.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    color={palette.tertiary[600]}
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                    }}
                  >
                    Experience with QuickBooks is an added advantage
                  </Typography>
                </li>
              </ul>
            </CustomStack>
          </CustomStack>

          {/** Job application form */}
          <CustomStack flexDirection="column" gap="40px" width="100%">
            <Typography
              variant="h1"
              width="100%"
              color={palette.secondary[700]}
              sx={{ fontWeight: "500", fontSize: "30px" }}
            >
              Apply for this job
            </Typography>

            <CustomStack flexDirection={"column"} gap="40px" width="590px">
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
                </CustomStack>

                <CustomStack flexDirection={"row"} gap="20px" width="100%">
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
                {/** Resume/CV*/}
                <CustomStack flexDirection={"column"} gap="20px">
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "15px",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Resume/CV <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <CustomStack
                    flexDirection={"column"}
                    className="inputWrap"
                    gap="5.5px"
                    width="100%"
                  >
                    <label>
                      Share link to Dropbox, Google Drive or upload manually
                    </label>
                    <input />
                    <label>File types: pdf,doc and docx,</label>
                  </CustomStack>
                </CustomStack>

                {/** File Upload*/}
                <CustomStack flexDirection={"column"} gap="20px">
                  <CustomStack
                    flexDirection={"row"}
                    bgcolor={palette.whites[500]}
                    border="1px dashed #AFAFAF"
                    borderRadius="6px"
                    className="inputWrap"
                    gap="20px"
                    width="100%"
                    padding="20px 30px"
                    alignItems={"center"}
                  >
                    <Button
                      variant="contained"
                      paddingLeft="20px"
                      sx={{
                        height: "40px",
                        fontSize: "15px",
                        padding: "7px 20px",
                      }}
                    >
                      CHOOSE
                    </Button>
                    <label>No File Selected</label>
                  </CustomStack>
                </CustomStack>
              </CustomStack>

              {/** button stacks */}
              <CustomStack justifyContent={"flex-start"}>
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
      </CustomStack>

      <Footer />
    </Container>
  );
};

export default CareerInfo;
