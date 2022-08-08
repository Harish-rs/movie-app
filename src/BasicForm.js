import { useFormik } from "formik";
import * as yup from "yup";

const formValidatorSchema = yup.object({
  email: yup
    .string()
    .min(8, "too small password")
    .required("email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "not a valid email address"
    ),
  password: yup
    .string()
    .min(5, "too small email")
    .max(12, "too much for the password")
    .required("password is required"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidatorSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="email"
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password"
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <button type="submit">Submit</button>
    </form>
  );
}
