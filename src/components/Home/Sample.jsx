import { Box, Chip, Grid, Link, Typography } from "@mui/material";
import { HiOutlineExternalLink } from "react-icons/hi";

const Sample = ({ title, image, tech, about, link, isOdd }) => {
  return (
    <Grid
      container
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: 5,
        backgroundColor: "primary.main",
        height: { xs: "auto", sm: "400px", md: "400px" },
        width: { xs: "90%", lg: "1280px" },
        overflow: "hidden",
      }}
    >
      {!isOdd && (
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          lg={6}
          sx={{
            py: { xs: 3, lg: 0 },
            backgroundColor: "primary.200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={image}
            variant="rounded"
            sx={{ width: 10 / 11, mx: "auto", borderRadius: 5 }}
          />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={5}
        md={5}
        lg={6}
        sx={{
          p: 1.5,
          py: 5,
          pl: 5,
          textWrapStyle: "balance",
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography
          sx={{
            mt: 1.25,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
          }}
          variant="body2"
        >
          {about}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1.5,
            rowGap: 1,
            mt: 2,
          }}
        >
          {tech.map((t, i) => {
            return (
              <Chip
                key={i}
                sx={{ p: 1 }}
                aria-label={t.name}
                icon={t.icon}
                label={t.name}
              />
            );
          })}
        </Box>
        <Link
          href={link}
          sx={{ color: "primary.950" }}
          rel="noopener noreferrer"
          target="_blank"
        >
          <HiOutlineExternalLink size={25} style={{ marginTop: "15px" }} />
        </Link>
      </Grid>
      {isOdd && (
        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          lg={6}
          sx={{
            py: { xs: 3, lg: 0 },
            backgroundColor: "primary.200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={image}
            variant="rounded"
            sx={{ width: 10 / 11, mx: "auto", borderRadius: 5 }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Sample;
