import CustomStack from "./CustomStack";
import { useTheme, Box, Typography, Avatar } from "@mui/material";
import FooterLogo from "../assets/YovelaFooterLogo.svg";

import { Icon } from "@iconify/react";

const FooterLinks = [
  {
    title: "Facebook",
    icon: <Icon icon="gg:facebook" height="25" width="25" />,
  },
  {
    title: "Twitter",
    icon: <Icon icon="fe:twitter" height="26" width="26" />,
  },
  {
    title: "LinkedIn",
    icon: <Icon icon="akar-icons:linkedin-v2-fill" height="23" width="23" />,
  },
];

const FooterNavItem = [
  {
    title: "Our School",
    subItems: [
      {
        title: "About us",
      },
      {
        title: "Our Team",
      },
    ],
  },
  {
    title: "Legal",
    subItems: [
      {
        title: "Privacy Policy",
      },
      {
        title: "FAQ",
      },
    ],
  },
];

const Footer = () => {
  const { palette } = useTheme();
  return (
    <CustomStack bgcolor={palette.tertiary[500]} flexDirection={"column"}>
      <CustomStack
        flexDirection={"row"}
        alignItems="center"
        justifyContent="center"
        gap="129px"
        sx={{
          padding: "53px 0 88px 0",
          borderBottom: `1px solid ${palette.primary[50]}`,
        }}
      >
        {/** footer logo & socials  */}
        <CustomStack
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "192px",
            height: "214px",
          }}
          gap="20px"
        >
          <Avatar
            src={FooterLogo}
            alt="Yovela Logo"
            sx={{
              height: [50, 100, 140],
              width: [50, 100, 140],
              marginBottom: "0.5rem",
            }}
          />

          <CustomStack gap="12px">
            {FooterLinks.map((data, index) => {
              return (
                <Box
                  key={index}
                  color={palette.tertiary[600]}
                  sx={{
                    height: "36px",
                    width: "36px",
                    borderRadius: "50%",
                    backgroundColor: palette.primary[50],
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  {data.icon}
                </Box>
              );
            })}
          </CustomStack>
        </CustomStack>

        {/** footer links */}

        <CustomStack flexDirection={"row"} gap="20px">
          {FooterNavItem.map((data, index) => {
            return (
              <CustomStack
                key={`${index}-${data.title}`}
                width="255px"
                height="214px"
                padding={"19px 20px"}
                flexDirection={"column"}
                gap="17px"
              >
                <Typography
                  variant="h3"
                  color={palette.primary[50]}
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "28px",
                  }}
                >
                  {data.title}
                </Typography>

                <CustomStack flexDirection={"column"} gap="8px">
                  {data.subItems.map((data2, index2) => {
                    return (
                      <Typography
                        key={`${index2}-${data2.title}`}
                        variant="body1"
                        color={palette.primary[50]}
                        sx={{
                          height: "21px",
                          fontSize: "14px",
                          fontWeight: "400",
                          cursor: "pointer",
                        }}
                      >
                        {data2.title}
                      </Typography>
                    );
                  })}
                </CustomStack>
              </CustomStack>
            );
          })}
          <CustomStack
            width="255px"
            height="214px"
            padding={"19px 20px"}
            flexDirection={"column"}
            gap="17px"
          >
            <Typography
              variant="h3"
              color={palette.primary[50]}
              sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "28px" }}
            >
              Contact Information
            </Typography>

            <CustomStack flexDirection={"column"} gap="16px">
              <Typography
                variant="body1"
                color={palette.primary[50]}
                sx={{ height: "100%", fontSize: "14px", fontWeight: "400" }}
              >
                Road,
                <br />
                P.O Box
              </Typography>

              <Typography
                variant="body1"
                color={palette.primary[50]}
                sx={{ height: "21px", fontSize: "14px", fontWeight: "400" }}
              >
                support@yovela.ac.ug
              </Typography>

              <Typography
                variant="body1"
                color={palette.primary[50]}
                sx={{ height: "21px", fontSize: "14px", fontWeight: "400" }}
              >
                +(254) 722 000 000
              </Typography>
            </CustomStack>
          </CustomStack>
        </CustomStack>
      </CustomStack>

      <Box width="100%" padding={"17.5px 0px"}>
        <Typography
          variant="body1"
          color={palette.primary[50]}
          sx={{ fontSize: "12px", textAlign: "center" }}
        >
          Copyright © 2023 Yovela All rights reserved
        </Typography>
      </Box>
    </CustomStack>
  );
};

export default Footer;
