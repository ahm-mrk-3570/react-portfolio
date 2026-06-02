import { Box } from "@mui/material";
import Sample from "../components/Home/Sample";
import sampleWorks from "../constants/Samples";

const SampleWorks = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.950",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: { xs: "auto", md: "500px" },
        py: 14,
        gap: 2,
      }}
    >
      <title>
        Works
      </title>
      {sampleWorks.map((s, i) => {
        return <Sample key={i} isEven={i % 2 !== 0} {...s} />
      })}
    </Box>
  );
};

export default SampleWorks;
