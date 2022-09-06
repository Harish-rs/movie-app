import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Movies } from "./Movies";
import { useState, useEffect } from "react";
import { API } from "./global";
import { useNavigate } from "react-router-dom";

export function Movielist() {
  const navigate = useNavigate();
  const [movielist, setmovielist] = useState([]);
  const getmovies = () => {
    fetch(`${API}/movies`, {
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
                  fetch(`${API}/movies/${mv.id}`, {
                    method: "DELETE",
                  }).then(() => getmovies());
                }}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => {
                  navigate(`/movies/edit/${mv.id}`);
                }}
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
