import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { FaCss3, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Skill from "./components/Skill";

const Skills = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.950",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 14,
      }}
    >
      <Chip label={<Typography variant="body2">Skills</Typography>} />
      <Grid
        component="div"
        sx={{
          width: { xs: 1, sm: 1, md: 1, lg: "1280px" },
          alignItems: "center",
          flexDirection: "column",
          mt: 3,
        }}
        container
      >
        <Typography
          variant="subtitle1"
          sx={{ px: 2, textAlign: { xs: "center", sm: "auto" } }}
        >
          The skills, tools and technologies I am really good at:
        </Typography>
        <Grid container sx={{ mt: 5 }}>
          <Grid xs={12} container>
            <Skill icon={<FaHtml5 color="orange" size={60} />} label={"Html"} />
            <Skill icon={<FaCss3 color="#00bcff" size={60} />} label={"Css"} />
            <Skill
              icon={<FaJs color="yellow" size={60} />}
              label={"JavaScript(ES6+)"}
            />
            <Skill icon={<FaSass color="red" size={60} />} label={"Sass"} />
          </Grid>
          <Grid xs={12} container sx={{ mt: 3 }}>
            <Skill
              icon={<FaReact color="#00bcff" size={60} />}
              label={"React"}
            />
            <Skill
              icon={<RiTailwindCssFill color="#00bcff" size={60} />}
              label={"TailwindCSS"}
            />
            <Skill
              icon={<TbBrandNextjs color="white" size={60} />}
              label={"NextJS"}
            />
            <Skill
              icon={<SiMui color="#00bcff" size={60} />}
              label={"Material UI"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
