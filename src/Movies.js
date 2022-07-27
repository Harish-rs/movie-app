import React from "react";
import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { CardActions, CardContent } from "@mui/material";

export function Movies({ movie, id, deleteButton }) {
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(false);
  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movieposter" />
      <CardContent>
        <div className="movie-spec">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              onClick={() => setShow(!show)}
              className="toggle"
              aria-label="Movie summmary"
              color="primary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Movie Info"
              color="primary"
            >
              <InfoIcon />
            </IconButton>
          </h2>

          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        {show ? <p>{movie.summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton}
      </CardActions>
    </Card>
  );
}
