import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
  Link as MuiLink
} from "@mui/material";
import { useContext } from "react";
import { toast } from "react-toastify";
import PortfolioContext from "../../context/PortfolioContext";
import commentSchema from "./../../validations/CommentFormValidation";
import { addComment } from "./../../services/CommentService";
import { Form, Formik } from "formik";
import { Link as RouterLink } from 'react-router-dom';

const Comments = () => {
  const { mode, setComments } = useContext(PortfolioContext);

  const submitComment = async (values, { resetForm }) => {
    try {
      const { status, data } = await addComment(values);
      if (status === "201" || status === 201) {
        setComments((prev) => [...prev, data]);
        toast.success("Thank you for your comment❤️", {
          theme: mode === "light" ? "light" : "dark",
        });
        resetForm();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (e) {
      console.log(e.message);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "primary.main",
          color: "primary.950",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 12
        }}
      >
        <Chip
          sx={{ mt: 12 }}
          label={<Typography variant="body2">Comments</Typography>}
        />

        <Typography sx={{ my: 2 }} variant="subtitle1">
          Share your thoughts with me
        </Typography>

        <Formik
          initialValues={{
            name: "",
            email: "",
            comment: "",
          }}
          validationSchema={commentSchema}
          onSubmit={submitComment}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => {
            return (
              <Form>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <TextField
                    name="name"
                    value={values.name}
                    variant="filled"
                    label="Enter your name"
                    sx={{
                      minWidth: { xs: "300px", md: "500px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.950",
                      },
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />

                  <TextField
                    name="email"
                    value={values.email}
                    variant="filled"
                    label="Enter your email"
                    sx={{
                      minWidth: { xs: "300px", md: "500px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.950",
                      },
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    name="comment"
                    value={values.comment}
                    variant="filled"
                    label="Write your comment"
                    rows={4}
                    sx={{
                      minWidth: { xs: "300px", md: "500px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "primary.950",
                      },
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.comment && Boolean(errors.comment)}
                    helperText={touched.comment && errors.comment}
                    multiline
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "primary.main",
                      color: "primary.950",
                      border: 0.25,
                      borderColor: "primary.950",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>

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
          <MuiLink component={RouterLink} to="/comments">
            <Chip
              sx={{ p: 3, borderRadius: 10 }}
              label={<Typography variant="body2">Comments</Typography>}
              clickable
            />
          </MuiLink>
        </Divider>
      </Box>
    </>
  );
};

export default Comments;

/*
  toast.success("Thank you for your comment❤️", {
      theme: mode === "light" ? "light" : "dark",
    });
*/
