import { Stack, Typography } from "@mui/material";

const Skill = ({ icon, label }) => {
  return (
    <Stack sx={{ width: 1 / 4 }} spacing={2} alignItems={"center"}>
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Stack>
  );
};

export default Skill;
