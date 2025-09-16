import { Grid, Card, CardContent, Typography } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/PrecisionManufacturing";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";

const services = [
  { icon: <EngineeringIcon fontSize="large" />, title: "Engineering Services", desc: "BIM, CAD Drafting, Structural Design" },
  { icon: <CloudIcon fontSize="large" />, title: "IT Solutions", desc: "Cloud Migration, Virtualization, Data Centers" },
  { icon: <SecurityIcon fontSize="large" />, title: "Cybersecurity", desc: "Firewalls, DLP, WAF, Endpoint Security" }
];

export default function ServicesOverview() {
  return (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      {services.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ textAlign: "center", py: 4 }}>
            {service.icon}
            <CardContent>
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2">{service.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
