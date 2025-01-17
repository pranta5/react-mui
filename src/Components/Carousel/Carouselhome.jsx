import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";

function Carouselhome() {
  var items = [
    {
      name: "Random Name #1",
      image: "assests/carouselImg/cristina.jpg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      image: "assests/carouselImg/jon-flobrant.jpg",
      description: "Probably the most random thing you have ever seen!!",
    },
    {
      name: "Random Name #3",
      image: "assests/carouselImg/urban.jpg",
      description: "Probably the most random thing you have ever seen!!",
    },
    {
      name: "Random Name #4",
      image: "assests/carouselImg/wil-stewart.jpg",
      description: "Probably the most random thing you have ever seen!!",
    },
  ];
//carousel
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <Box
        component="img"
        sx={{
          height: { xs: 300, sm: 400, md: 500, lg: 700, xl:900 },
          display: "block",
          maxWidth: "100%",
          overflow: "hidden",
          width: "100%",
        }}
        src={props.item.image}
        alt={props.item.name}
      />
      <Box p={2}>
        <Typography variant="h5">{props.item.name}</Typography>
        <Typography variant="body2">{props.item.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Learn More
        </Button>
      </Box>
    </Paper>
  );
}

export default Carouselhome;
