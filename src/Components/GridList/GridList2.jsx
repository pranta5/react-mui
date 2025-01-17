import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CardComp from "./CardComponent/CardComp";
import ButtonCom from "../Extra Component/ButtonCom";

const GridList2 = () => {
  let items = [
    {
      id: 1,
      image: "assests/GridImage/alexander.jpg",
      title: "Title #1",
      day: "7 Days",
    },
    {
      id: 2,
      image: "assests/GridImage/cristina.jpg",
      title: "Title #2",
      day: "7 Days",
    },
    {
      id: 3,
      image: "assests/GridImage/greota.jpg",
      title: "Title #3",
      day: "7 Days",
    },
    {
      id: 4,
      image: "assests/GridImage/greta.jpg",
      title: "Title #4",
      day: "7 Days",
    },
    {
      id: 5,
      image: "assests/GridImage/madalina.jpg",
      title: "Title #5",
      day: "7 Days",
    },
    {
      id: 6,
      image: "assests/GridImage/michael-martinelli.jpg",
      title: "Title #6",
      day: "7 Days",
    },
  ];
  //GridList2
  return (
    <div style={{ padding: "40px 0", backgroundColor: "#f9f9f9" }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h4" color="primary" gutterBottom>
          Places 2
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CardComp value={item} />
            </Grid>
          ))}
        </Grid>
        <ButtonCom/>
      </Container>
    </div>
  );
};

export default GridList2;
