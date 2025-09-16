import { Container, Typography, Box, Divider, Grid, Card, CardContent } from "@mui/material";

export default function CaseStudyDetail() {
  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <Typography variant="h3" gutterBottom>
        Case Study: BIM Implementation for Oil & Gas
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Category: Engineering • Completed: 2024
      </Typography>

      {/* Image Banner */}
      <Box
        sx={{
          width: "100%",
          height: 400,
          backgroundImage: "url(/assets/case-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          mb: 4
        }}
      />

      {/* Overview */}
      <Typography variant="h5" gutterBottom>
        Overview
      </Typography>
      <Typography variant="body1" paragraph>
        PTS partnered with a leading Oil & Gas company to implement advanced BIM workflows, significantly reducing
        design errors and construction delays. The project involved 3D modeling, clash detection, and integrated
        engineering collaboration tools.
      </Typography>

      {/* Our Solution */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Our Solution
      </Typography>
      <Typography variant="body1" paragraph>
        We deployed Autodesk Revit and Navisworks for 3D modeling and clash detection, combined with cloud-based
        collaboration platforms for real-time coordination. Our engineers provided on-site and remote support for
        smooth execution.
      </Typography>

      {/* Outcome */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Outcome
      </Typography>
      <Typography variant="body1" paragraph>
        The BIM implementation reduced project design errors by 40% and improved overall delivery speed by 25%.
        The client experienced significant cost savings and faster construction timelines.
      </Typography>

      {/* Key Highlights */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Key Highlights
      </Typography>
      <Grid container spacing={3}>
        {[
          { title: "Duration", value: "6 Months" },
          { title: "Team Size", value: "12 Engineers" },
          { title: "Technology", value: "Autodesk Revit, Navisworks, BIM 360" }
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
