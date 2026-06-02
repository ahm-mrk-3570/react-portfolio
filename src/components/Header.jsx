import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext.jsx";
import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { FaMoon, FaSun } from "react-icons/fa";
import { yellow } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";

const Header = ({ handleScroll }) => {
  const { mode, setMode, aboutRef, projectsRef, contactRef } =
    useContext(PortfolioContext);

  return (
    <>
      <AppBar elevation={0} position="static">
        <Toolbar
          sx={{
            width: { xs: 1, sm: 1, md: 1, lg: "1280px" },
            mx: "auto",
            borderBottom: { xs: "none", sm: "none", md: 1 },
          }}
        >
          <MuiLink component={RouterLink} to="/">
            <Typography noWrap variant="h3" sx={{ color: "primary.950" }}>
              {"<AHM />"}
            </Typography>
          </MuiLink>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
              underline="none"
              onClick={() => handleScroll(aboutRef)}
              color="inherit"
            >
              <Typography variant="body2">About Me</Typography>
            </Button>
            <Button
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
              underline="none"
              onClick={() => handleScroll(projectsRef)}
              color="inherit"
            >
              <Typography variant="body2">Works</Typography>
            </Button>
            <Button
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
              underline="none"
              onClick={() => handleScroll(contactRef)}
              color="inherit"
            >
              <Typography variant="body2">Contact Me</Typography>
            </Button>
            <Divider
              variant="fullWidth"
              orientation="vertical"
              sx={{
                borderColor: (theme) => alpha(theme.palette.primary[950], 0.5),
                display: { xs: "none", md: "flex" },
              }}
              flexItem
            ></Divider>
            <IconButton
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? (
                <FaSun color={yellow[700]} />
              ) : (
                <FaMoon color="gray" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
