import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";

const CommentsPage = () => {
  const { comments } = useContext(PortfolioContext);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.950",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 12,
        minHeight: "100svh",
      }}
    >
      <title>
        Comments
      </title>
      {comments.map((c, i) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              mt: 2,
              backgroundColor: "primary.200",
              width: { xs: "95%", lg: "1280px" },
              borderRadius: 3,
              p: 3,
            }}
          >
            <Box
              sx={{
                width: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: 2
                }}
              >
                <Avatar sx={{ backgroundColor: "primary.950" }}>
                  {c.name[0]}
                </Avatar>
                <Typography variant="subtitle1">{c.name}</Typography>
              </Box>
              <Typography variant="subtitle1">
                {c.email}
              </Typography>
            </Box>
            <Typography sx={{ mt: 3 }} variant="body2">
              {c.comment}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default CommentsPage;