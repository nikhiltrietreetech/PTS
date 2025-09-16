import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function change(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })); }
  function submit(e) {
    e.preventDefault();
    console.log("Contact form:", form);
    alert("Message submitted (demo)");
  }
  return (
    <Box component="form" onSubmit={submit} sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
      <Typography variant="h5">Contact Us</Typography>
      <TextField name="name" label="Name" fullWidth sx={{ mt: 2 }} onChange={change} />
      <TextField name="email" label="Email" fullWidth sx={{ mt: 2 }} onChange={change} />
      <TextField name="message" label="Message" fullWidth multiline rows={5} sx={{ mt: 2 }} onChange={change} />
      <Button type="submit" sx={{ mt: 2 }} variant="contained">Send Message</Button>
    </Box>
  );
}
