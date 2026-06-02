import { Avatar, Box, Chip, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import profile_pic from "../../assets/images/portfolio-image.jpg";
import { useContext } from "react";
import PortfolioContext from "../../context/PortfolioContext";

const About = () => {
  const { aboutRef } = useContext(PortfolioContext);

  return (
    <Box
      ref={aboutRef}
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.50",
        color: "primary.950",
        minHeight: { xs: "auto", md: "500px" },
        py: 14,
        gap: 2,
      }}
    >
      <Chip
        sx={{ p: 1 }}
        label={<Typography variant="body2">About Me</Typography>}
      />
      <Grid
        container
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          width: { xs: 1, sm: 1, md: 1, lg: "1280px" },
          p: 2,
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid sx={{ pb: 5, pt: 3, alignItems: "center" }}>
            <Box
              component={"div"}
              sx={{
                position: "relative",
                width: { xs: "300px", md: "440px" },
                height: { xs: "300px", md: "440px" },
                zIndex: 1,
                border: "10px solid primary.main",
                "&:before": {
                  content: "''",
                  width: { xs: "340px", sm: "310px", md: "440px", lg: "440px" },
                  height: {
                    xs: "310px",
                    sm: "310px",
                    md: "440px",
                    lg: "440px",
                  },
                  position: "absolute",
                  backgroundColor: grey[400],
                  top: { xs: 15, sm: 30, md: 30, lg: 30 },
                  left: { xs: -20, sm: 30, md: 30, lg: 30 },
                  zIndex: -3,
                },
                "&:after": {
                  content: "''",
                  width: { xs: "320px", sm: "305px", md: "440px", lg: "440px" },
                  height: {
                    xs: "305px",
                    sm: "305px",
                    md: "440px",
                    lg: "440px",
                  },
                  position: "absolute",
                  backgroundColor: "primary.50",
                  top: { xs: 7, sm: 15, md: 15, lg: 15 },
                  left: { xs: -10, sm: 15, md: 15, lg: 15 },
                  zIndex: -1,
                },
              }}
            >
              <Avatar
                variant="square"
                src={profile_pic}
                sx={{ width: 1, height: 1 }}
              >
                AHM
              </Avatar>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}
          sx={{
            mt: { xs: 5, sm: 5 },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Curious about me? Here you have it:
          </Typography>
          <Typography variant="body2">
            I am a passionate Front-End Developer based in Iran, dedicated to
            crafting sleek and functional digital experiences. My journey in the
            tech world began in 2023, and since then, I’ve been focusing on
            mastering modern web technologies to bridge the gap between complex
            logic and elegant design.
            <br />
            <br />
            My core expertise lies in **JavaScript (ES6+), React, and Tailwind
            CSS. I don't just write code; I strive to build products that are
            unique and user-centric. For me, every project is an opportunity to
            implement Clean Code - principles and ensure a seamless **User
            Experience (UX) that stands out in today's digital landscape.
            <br />
            <br />
            As a Computer Science enthusiast, I am a firm believer in continuous
            growth. I spend a significant amount of my time researching emerging
            technologies to stay ahead of the curve. This academic background,
            combined with my hands-on freelance experience, allows me to
            approach problems with a structured and analytical mindset.
            <br />
            <br />
            When I’m not in front of a code editor, you’ll likely find me diving
            into the latest tech blogs or enjoying some gaming to recharge. I am
            currently working as a Freelancer and I am actively seeking new
            opportunities where I can contribute my skills to innovative
            projects and grow alongside a forward-thinking team.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
