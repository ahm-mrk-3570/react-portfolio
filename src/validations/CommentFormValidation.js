import * as Yup from 'yup';

const commentSchema = Yup.object({
  name: Yup.string().required("Please Enter your name..."),
  email: Yup.string().email("Email is invalid").required("Please Enter your email"),
  comment: Yup.string().required("Please Enter your Comment")
})

export default commentSchema;