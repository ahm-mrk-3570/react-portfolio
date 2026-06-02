import { Box, Chip, Divider, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Sample from "./Sample";
import SampleWorks from "../../constants/Samples";
import PortfolioContext from "../../context/PortfolioContext";
import { useContext } from "react";

const Samples = () => {
  const { projectsRef } = useContext(PortfolioContext);

  return (
    <Box
      ref={projectsRef}
      component="section"
      sx={{
        backgroundColor: "primary.50",
        color: "primary.950",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: { xs: "auto", md: "500px" },
        py: 14,
        gap: 2,
      }}
    >
      <Chip label={<Typography variant="body2">Work</Typography>} />
      <Typography variant="body2">
        Some of the noteworthy projects I have built:
      </Typography>
      {SampleWorks.map((s, i) => {
        return i <= 2 ? <Sample key={i} isOdd={i % 2 !== 0} {...s} /> : null;
      })}
      <Divider
        textAlign="center"
        sx={{
          width: { xs: "95%", lg: "1280px" },
          mt: 2,
          "&::before, &::after": {
            borderColor: "primary.200",
          },
        }}
      >
        <MuiLink component={RouterLink} to="/sample-works">
          <Chip
            sx={{ p: 3, borderRadius: 10 }}
            label={<Typography variant="body2">More</Typography>}
            clickable
          />
        </MuiLink>
      </Divider>
    </Box>
  );
};

export default Samples;
