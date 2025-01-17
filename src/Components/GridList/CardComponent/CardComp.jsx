import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardComp = ({ value }) => {
  return (
    <Card 
      sx={{
        maxWidth: 345,
        position: "relative",
        borderRadius: "12px",
        boxShadow: 2,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          width: 200,
          borderRadius: "12px 12px 0 0",
          objectFit: "cover",
        }}
        image={value.image}
      >
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography variant="h6" color="white" fontWeight="bold">
            {value.title}
          </Typography>
          <Typography
            variant="body2"
            color="white"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <AccessTimeIcon sx={{ fontSize: "small" }} />
            {value.day}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
};

export default CardComp;
