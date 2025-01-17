import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid2";
import { Height, Send } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CardComp from "./CardComponent/CardComp";
import ButtonCom from "../Extra Component/ButtonCom";

const GridList = () => {
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
  return (
    <div style={{ padding: "40px 0", backgroundColor: "#f9f9f9" }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Explore Places
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Discover breathtaking locations for your next adventure.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          >
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                >
                  <CardComp value={item} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        <ButtonCom />
      </Container>
    </div>
  );
};

export default GridList;
