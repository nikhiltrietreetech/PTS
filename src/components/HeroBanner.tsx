import { Box, Typography, Button, Container } from "@mui/material";
import Slider from "react-slick";

export default function HeroBanner() {
  const slides = [
    { title: "Engineering Excellence", desc: "BIM, CAD, and Drafting solutions", img: "/assets/hero1.jpg" },
    { title: "IT Infrastructure", desc: "Cloud, Security & Networking", img: "/assets/hero2.jpg" },
    { title: "Trusted by Global Brands", desc: "25+ years of experience", img: "/assets/hero3.jpg" }
  ];

  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "500px",
              background: `url(${slide.img}) center/cover`,
              color: "#fff",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Container>
              <Typography variant="h3" gutterBottom>{slide.title}</Typography>
              <Typography variant="h6">{slide.desc}</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>Learn More</Button>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
