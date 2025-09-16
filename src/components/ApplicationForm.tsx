import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function ApplicationForm() {
  const [form, setForm] = useState({ name: "", email: "", cv: null, message: "" });

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  }

  function submit(e) {
    e.preventDefault();
    // wire up to API if needed
    console.log(form);
    alert("Application submitted (demo)");
  }

  return (
    <Box component="form" onSubmit={submit} sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h5">Apply</Typography>
      <TextField fullWidth label="Name" name="name" onChange={handleChange} sx={{ mt: 2 }} />
      <TextField fullWidth label="Email" name="email" onChange={handleChange} sx={{ mt: 2 }} />
      <Button variant="contained" component="label" sx={{ mt: 2 }}>
        Upload CV
        <input type="file" hidden name="cv" onChange={handleChange} />
      </Button>
      <TextField fullWidth multiline rows={4} name="message" label="Message" onChange={handleChange} sx={{ mt: 2 }} />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
    </Box>
  );
}
