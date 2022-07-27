import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";

export function EditMovie() {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setmovie(mv));
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading...";
}

function EditMovieForm({ movie }) {
  const navigate = useNavigate();
  const [name, setname] = useState(movie.name);
  const [poster, setposter] = useState(movie.poster);
  const [rating, setrating] = useState(movie.rating);
  const [summary, setsummary] = useState(movie.summary);
  const [trailer, settrailer] = useState(movie.trailer);

  return (
    <div>
      <div className="addmovie-form">
        <TextField
          value={name}
          onChange={(event) => setname(event.target.value)}
          label="Enter Movie name"
          variant="standard"
        />
        <TextField
          value={poster}
          onChange={(event) => setposter(event.target.value)}
          label="Enter Movie poster URL"
          variant="standard"
        />
        <TextField
          value={rating}
          onChange={(event) => setrating(event.target.value)}
          label="Enter Movie rating"
          variant="standard"
        />
        <TextField
          value={summary}
          onChange={(event) => setsummary(event.target.value)}
          label="Enter Movie summary"
          variant="standard"
        />
        <TextField
          value={trailer}
          onChange={(event) => settrailer(event.target.value)}
          label="Enter Movie Trailer URL"
          variant="standard"
        />
        <Button
          variant="contained"
          onClick={() => {
            //navigate("/movies");
            const UpdateMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            //setmovielist([...movielist, newMovie]);
            // 1.method =post
            // 2.body - data - JSON.stringify
            // 3.headers - JSON

            fetch(`${API}/movie/${movie.id}`, {
              method: "PUT",
              body: JSON.stringify(UpdateMovie),
              headers: { "Content-Type": "application/json" },
            })
              .then((data) => data.json())
              .then(() => navigate("/movies"));
          }}
        >
          update Movie
        </Button>
      </div>
    </div>
  );
}
