import {
  CopyAllOutlined,
  EmailOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Telegram,
} from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const { contactRef } = useContext(PortfolioContext);

  const copyToClipboard = (text) => {
    if(navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        toast.info("Text Copied💣")
      }).catch(e => {
        toast.error("Something went wrong");
      })
    }
  }

  return (
    <Box
      ref={contactRef}
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "primary.50",
        color: "primary.950",
        pt: 7,
        pb: 3,
        gap: 2,
      }}
    >
      <Chip
        sx={{ p: 1, mb: 4 }}
        label={<Typography variant="body2">Get In Touch</Typography>}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "90%", lg: "1280px" },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ maxWidth: "500px", textAlign: "center" }}
        >
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </Typography>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 1, md: 3 },
            mt: 2,
          }}
        >
          <EmailOutlined
            sx={{ height: { xs: 20, md: 30 }, width: { xs: 20, md: 30 } }}
          />
          <Typography variant="subtitle1">ahmmrk.3570m@gmail.com</Typography>
          <IconButton onClick={() => copyToClipboard("ahmmrk.3570m@gmail.com")}>
            <CopyAllOutlined
              sx={{ height: { xs: 20, md: 30 }, width: { xs: 20, md: 30 } }}
            />
          </IconButton>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 1, md: 3 },
            mt: 2,
          }}
        >
          <Phone
            sx={{ height: { xs: 20, md: 30 }, width: { xs: 20, md: 30 } }}
          />
          <Typography variant="subtitle1">+989940703076</Typography>
          <IconButton onClick={() => copyToClipboard("+989940703076")}>
            <CopyAllOutlined
              sx={{ height: { xs: 20, md: 30 }, width: { xs: 20, md: 30 } }}
            />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ mt: 8 }}>
          You may also find me on these platforms!
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Box component="a" href="https://github.com/ahm-mrk-3570" target="_blank">
            <IconButton>
              <GitHub sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Box>
          <Box component="a" href="https://www.linkedin.com/in/ahm-mrk-3570m" target="_blank">
            <IconButton>
              <LinkedIn sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Box>
          <Box component="a" href="https://t.me/" target="_blank">
            <IconButton>
              <Telegram sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Box>
          <Box component="a" href="https://instagram.com/" target="_blank">
            <IconButton>
              <Instagram sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
