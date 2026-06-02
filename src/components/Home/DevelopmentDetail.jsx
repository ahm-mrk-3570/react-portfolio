import { Copyright } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const DevelopmentDetail = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.950",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        px: {xs: 2}
      }}
    >
      <Copyright />
      <Typography sx={{ ml: {xs: 0.25, sm: 2}, textAlign: "center" }} variant="body2">
        2023 | Designed and coded with ❤️ by AmirHossein
      </Typography>
    </Box>
  );
};

export default DevelopmentDetail;
