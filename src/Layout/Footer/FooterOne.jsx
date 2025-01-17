import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid2";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function FooterOne() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 4,
        boxShadow:1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>

            <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Link href="https://www.facebook.com/" color="inherit" aria-label="Facebook">
                <Facebook fontSize="large" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                aria-label="Instagram"
                sx={{ px: 2 }}
              >
                <Instagram fontSize="large" />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit" aria-label="Twitter">
                <Twitter fontSize="large" />
              </Link>
            </Box>

          </Grid>

        </Grid>

        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
