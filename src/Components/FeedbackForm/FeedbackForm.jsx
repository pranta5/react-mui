import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const FeedbackForm = () => {
    const phoneNumber = "7699273357";
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phonenumber: "",
      startDate: "",
      endDate: "",
      person:'',
      place: "",
    },
    onSubmit: (values) => {
    //   console.log("submitted", values);
      const message = `Full Name: ${values.fullName}\nEmail: ${values.email}\nPhone Number: ${values.phonenumber}\nStarting Date: ${values.startDate}\nEnding Date: ${values.endDate}\nNumber of Guest: ${values.person}\nWant to Visit: ${values.place}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    },
  });

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Send Enquiery
        </Typography>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="phonenumber"
          name="phonenumber"
          label="Phone Number"
          type="number"
          value={formik.values.phonenumber}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="startDate"
          name="startDate"
          label="Starting Date"
          type="date"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="endDate"
          name="endDate"
          label="Ending Date"
          type="date"
          value={formik.values.endDate}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="person"
          name="person"
          label="Number of Guest"
          value={formik.values.person}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="place"
          name="place"
          label="Want to Visit"
          value={formik.values.place}
          onChange={formik.handleChange}
          margin="normal"
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default FeedbackForm;
