import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const MovieValidatorSchema = yup.object({
  name: yup.string().required("Movie name is required"),
  poster: yup
    .string()
    .min(4, "need a longer poster")
    .required("Movie poster is required"),
  rating: yup
    .number()
    .min(1, "less rating")
    .max(10, "too much rating")
    .required("Movie rating is required"),
  summary: yup
    .string()
    .min(20, "need a longer summary")
    .required("Movie summary is required"),
  trailer: yup
    .string()
    .min(4, "need a longer trailer")
    .required("Movie trailer is required"),
});

export function AddMovie() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: MovieValidatorSchema,
    onSubmit: (newMovie) => {
      datasubmit(newMovie);
    },
  });

  const datasubmit = (newMovie) => {
    //setmovielist([...movielist, newMovie]);
    // 1.method =post
    // 2.body - data - JSON.stringify
    // 3.headers - JSON
    // console.log("onSubmit", newMovie);

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => {
        navigate("/movies");
      });
  };

  return (
    <form onSubmit={formik.handleSubmit} className="addmovie-form">
      <TextField
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : ""
        }
        label="Enter Movie name"
        variant="standard"
      />
      {/* {formik.touched.name && formik.errors.name ? formik.errors.name : ""} */}
      <TextField
        id="poster"
        name="poster"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : ""
        }
        label="Enter Movie poster URL"
        variant="standard"
      />
      {/* {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""} */}
      <TextField
        id="rating"
        name="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Enter Movie rating"
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : ""
        }
        variant="standard"
      />
      {/* {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""} */}

      <TextField
        id="summary"
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : ""
        }
        label="Enter Movie summary"
        variant="standard"
      />
      {/* {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""} */}
      <TextField
        id="trailer"
        name="trailer"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : ""
        }
        label="Enter Movie Trailer URL"
        variant="standard"
      />
      {/* {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""} */}
      <Button type="submit" variant="contained">
        AddMovie
      </Button>
    </form>
  );
}
