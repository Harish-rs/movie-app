// import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { Addcolor } from "./ColorBox";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { MovieDetails } from "./MovieDetails";
import { Home, NotFoundPage } from "./NotFoundPage";
import { AppBar, CardActions, CardContent, Toolbar } from "@mui/material";
// import Box from "@mui/material/Box";

// import { Addcolor } from "./ColorBox";
const Initial_MOVIE_LIST = [
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
];
function App() {
  const [movielist, setmovielist] = useState(Initial_MOVIE_LIST);
  const navigate = useNavigate();

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            🏠
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/colorbox")}>
            ColorBox
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/AddMovie")}>
            Add Movie
          </Button>
        </Toolbar>
      </AppBar>
      <div className="router-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={
              <Movielist movielist={movielist} setmovielist={setmovielist} />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails movielist={movielist} />}
          />
          <Route path="/colorbox" element={<Addcolor />} />
          <Route
            path="/movies/AddMovie"
            element={
              <AddMovie movielist={movielist} setmovielist={setmovielist} />
            }
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

function AddMovie({ movielist, setmovielist }) {
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
            navigate("/movies");
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            setmovielist([...movielist, newMovie]);
          }}
        >
          AddMovie
        </Button>
      </div>
    </div>
  );
}

function Movielist({ movielist, setmovielist }) {
  return (
    <div className="App">
      {/* <Addcolor /> */}

      <div className="movie-component">
        {movielist.map((mv, index) => (
          <Movies
            key={index}
            movie={mv}
            id={index}
            deleteButton={
              <IconButton
                onClick={() => {
                  let copiedmovielist = [...movielist];
                  let removedmovie = copiedmovielist.splice(index, 1);
                  console.log(removedmovie);
                  setmovielist(copiedmovielist);
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

function Movies({ movie, id, deleteButton }) {
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
