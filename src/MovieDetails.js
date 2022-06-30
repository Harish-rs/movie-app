import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";

export function MovieDetails({ movielist }) {
  const { id } = useParams();
  const movie = movielist[id];
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>

          <p className="movie-poster">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary} </p>
      </div>
      <Button
        onClick={() => navigate(-1)}
        aria-label="Back to List"
        color="primary"
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
      >
        BACK
      </Button>
    </div>
  );
}
