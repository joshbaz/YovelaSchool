import React from "react";
import { styled } from "@mui/system";
const Container = styled("div")(({ theme }) => ({
  textDecoration: "none",
  listStyle: "none",
  borderRadius: "4px",
  height: "200vh",
  backgroundColor: theme.palette.primary[500],
  top: '200px',
}));
const Home = () => {
  return <Container>homr</Container>;
};

export default Home;
