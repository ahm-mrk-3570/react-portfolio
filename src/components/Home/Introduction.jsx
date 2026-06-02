import { Avatar, Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FaCircle, FaLocationDot } from "react-icons/fa6";
import profile_pic from "../../assets/images/portfolio-image.jpg";
import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";

const Introduction = () => {
  return (
    <Box
      component={"section"}
      sx={{ width: 1, bgcolor: "primary.main", color: "primary.950", pb: 2 }}
    >
      <Grid
        sx={{
          width: { xs: 1, sm: 1, md: 1, lg: "1280px" },
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          minHeight: { xs: "auto", md: "500px" },
          mx: "auto",
          pt: 2,
          px: 2,
          alignItems: "center",
        }}
        container
      >
        <Grid
          xs={12}
          sm={4}
          md={4}
          lg={4}
          sx={{
            pb: 5,
            pt: 3,
            alignItems: "center",
            display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
          }}
        >
          <Box
            component={"div"}
            sx={{
              position: "relative",
              width: "300px",
              height: "300px",
              zIndex: 1,
              border: "10px solid primary.main",
              "&:before": {
                content: "''",
                width: { xs: "340px", sm: "300px", md: "300px", lg: "300px" },
                height: { xs: "310px", sm: "300px", md: "300px", lg: "300px" },
                position: "absolute",
                backgroundColor: grey[400],
                top: { xs: 15, sm: 30, md: 30, lg: 30 },
                left: { xs: -20, sm: 30, md: 30, lg: 30 },
                zIndex: -3,
              },
              "&:after": {
                content: "''",
                width: { xs: "320px", sm: "300px", md: "300px", lg: "300px" },
                height: { xs: "305px", sm: "300px", md: "300px", lg: "300px" },
                position: "absolute",
                backgroundColor: "primary.main",
                top: { xs: 7, sm: 15, md: 15, lg: 15 },
                left: { xs: -10, sm: 15, md: 15, lg: 15 },
                zIndex: -1,
              },
              "&MuiBox-root": {
                alignSelf: "center",
              },
            }}
          >
            <Avatar
              variant="square"
              src={profile_pic}
              sx={{ width: "300px", height: "300px" }}
            >
              AHM
            </Avatar>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={8}
          md={8}
          lg={8}
          sx={{
            height: 1,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingRight: 3,
          }}
        >
          <Box
            sx={{
              width: 1,
            }}
          >
            <Typography variant="h1">Hi, I'm AmirHossein 👋</Typography>
            <Typography sx={{ mb: 4 }} variant="body2">
              I am an experienced front-end developer specializing in HTML, CSS,
              JavaScript (ES6+), React, and TailwindCSS. My expertise includes
              building responsive, high-performance web applications with a
              focus on user-centric design, version control using Git, and
              optimization for cross-device compatibility. Committed to
              delivering clean, efficient code and innovative solutions in
              modern web development.
            </Typography>
            <Typography variant="body2">
              <FaLocationDot style={{ marginRight: "10px" }} />
              Tehran, Iran
            </Typography>
            <Grid container sx={{ alignItems: "center", gap: 2, mt: 0.5 }}>
              <FaCircle color="green" size={12} />
              <Typography variant="body2">
                Available For new Projects
              </Typography>
            </Grid>
          </Box>
          <Grid
            container
            sx={{
              alignItems: "center",
              gap: 2,
              justifySelf: "flex-end",
              width: 1,
              mt: { xs: 2, md: 12 },
            }}
          >
            <Box component="a" href="https://github.com/AHMMRK" target="_blank">
              <GitHub sx={{ width: 37, height: 37, color: "primary.950" }} />
            </Box>
            <Box component="a" href="https://linkedin.com" target="_blank">
              <LinkedIn sx={{ width: 37, height: 37, color: "primary.950" }} />
            </Box>
            <Box component="a" href="https://t.me" target="_blank">
              <Telegram sx={{ width: 37, height: 37, color: "primary.950" }} />
            </Box>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={4}
          lg={4}
          sx={{
            pb: 5,
            pt: 3,
            alignItems: "center",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <Box
            component={"div"}
            sx={{
              position: "relative",
              width: "300px",
              height: "300px",
              zIndex: 1,
              border: "10px solid primary.main",
              "&:before": {
                content: "''",
                width: { xs: "340px", sm: "300px", md: "300px", lg: "300px" },
                height: { xs: "310px", sm: "300px", md: "300px", lg: "300px" },
                position: "absolute",
                backgroundColor: grey[400],
                top: { xs: 15, sm: 30, md: 30, lg: 30 },
                left: { xs: -20, sm: 30, md: 30, lg: 30 },
                zIndex: -3,
              },
              "&:after": {
                content: "''",
                width: { xs: "320px", sm: "300px", md: "300px", lg: "300px" },
                height: { xs: "305px", sm: "300px", md: "300px", lg: "300px" },
                position: "absolute",
                backgroundColor: "primary.main",
                top: { xs: 7, sm: 15, md: 15, lg: 15 },
                left: { xs: -10, sm: 15, md: 15, lg: 15 },
                zIndex: -1,
              },
              "&MuiBox-root": {
                alignSelf: "center",
              },
            }}
          >
            <Avatar
              variant="square"
              src={profile_pic}
              sx={{ width: "300px", height: "300px" }}
            >
              AHM
            </Avatar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
