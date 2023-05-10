import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Stack,
  useTheme,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import Footer from "../../components/Footer";
import CustomStack from "../../components/CustomStack";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";

import Admissions from "../../assets/admissions.png";
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
const AdmissionProcess = () => {
  const { palette } = useTheme();
  return (
    <Container spacing={0} gap="0px">
      <CustomStack gap="0px" flexDirection={"column"}>
        <Navbar />
        <PageHeader title={"Admissions Process"} headerimage={Admissions} />
      </CustomStack>

      {/** nav pager */}
      <PageNavLocation
        currlocation={"Admission : Admissions Process"}
        prevlocation={"Home"}
      />

      {/** No 1 */}
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
          <Typography
            variant="body1"
            color={palette.whites[500]}
            sx={{ fontSize: "80px", fontWeight: "200" }}
          >
            1
          </Typography>
        </Box>

        <CustomStack flexDirection={"column"} gap="30px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Application
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Complete an Application Form with your child's school reports
              attached.
            </Typography>

            <Button
              bgcolor={palette.primary[500]}
              sx={{
                width: "205px",
                backgroundColor: palette.primary[500],
                color: palette.whites[500],
              }}
            >
              Registration Form
            </Button>
          </CustomStack>
        </CustomStack>
      </CustomStack>
      {/** No 2 */}
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
          <Typography
            variant="body1"
            color={palette.whites[500]}
            sx={{ fontSize: "80px", fontWeight: "200" }}
          >
            2
          </Typography>
        </Box>

        <CustomStack flexDirection={"column"} gap="30px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Interview & Assessment
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Once you have registered, the parent/care taker and child will be
              invited to attend an interview with the academic team. Lorem ipsum
              dolor sit amet consectetur. Et mi urna libero vestibulum eleifend
              elementum ac suscipit neque. Pellentesque consectetur sed ut
              faucibus posuere ut praesent blandit tempor. Maecenas at orci arcu
              pretium tempus risu
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>
      {/** No 3 */}
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
          <Typography
            variant="body1"
            color={palette.whites[500]}
            sx={{ fontSize: "80px", fontWeight: "200" }}
          >
            3
          </Typography>
        </Box>

        <CustomStack flexDirection={"column"} gap="30px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Registration & Caution Money
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet consectetur. Et mi urna libero
              vestibulum eleifend elementum ac suscipit neque. Pellentesque
              consectetur sed ut faucibus posuere ut praesent blandit tempor.
              Maecenas at orci arcu pretium tempus risu
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>
      {/** No 4 */}
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
          <Typography
            variant="body1"
            color={palette.whites[500]}
            sx={{ fontSize: "80px", fontWeight: "200" }}
          >
            4
          </Typography>
        </Box>

        <CustomStack flexDirection={"column"} gap="14px" width={"811px"}>
          <Typography
            variant="h1"
            color={palette.secondary[700]}
            sx={{ fontWeight: "500", fontSize: "30px" }}
          >
            Admission
          </Typography>

          <CustomStack flexDirection={"column"} gap="30px">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "17px", textAlign: "justify" }}
            >
              Your child is admitted to Yovela School.
            </Typography>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      <Footer />
    </Container>
  );
};

export default AdmissionProcess;
