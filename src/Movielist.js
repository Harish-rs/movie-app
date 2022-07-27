import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Movies } from "./Movies";
import { useState, useEffect } from "react";

export function Movielist() {
  const [movielist, setmovielist] = useState([]);
  const getmovies = () => {
    fetch("https://62dec963976ae7460be246b4.mockapi.io/movie", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setmovielist(mv));
  };

  useEffect(() => getmovies(), []);
  return (
    <div className="App">
      {/* <Addcolor /> */}

      <div className="movie-component">
        {movielist.map((mv) => (
          <Movies
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton
                onClick={() => {
                  fetch(
                    `https://62dec963976ae7460be246b4.mockapi.io/movie/${mv.id}`,
                    {
                      method: "DELETE",
                    }
                  ).then(() => getmovies());
                }}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
