import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function AddMovie() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, settrailer] = useState("");

  return (
    <div>
      <div className="addmovie-form">
        <TextField
          id="standard-basic"
          onChange={(event) => setname(event.target.value)}
          label="Enter Movie name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          onChange={(event) => setposter(event.target.value)}
          label="Enter Movie poster URL"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          onChange={(event) => setrating(event.target.value)}
          label="Enter Movie rating"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          onChange={(event) => setsummary(event.target.value)}
          label="Enter Movie summary"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          onChange={(event) => settrailer(event.target.value)}
          label="Enter Movie Trailer URL"
          variant="standard"
        />
        <Button
          variant="contained"
          onClick={() => {
            //navigate("/movies");
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            //setmovielist([...movielist, newMovie]);
            // 1.method =post
            // 2.body - data - JSON
            // 3.headers - JSON

            fetch(`${API}/movie`, {
              method: "POST",
              body: JSON.stringify(newMovie),
              headers: { "Content-Type": "application/json" },
            })
              .then((data) => data.json())
              .then(() => {
                navigate("/movies");
              });
          }}
        >
          AddMovie
        </Button>
      </div>
    </div>
  );
}
