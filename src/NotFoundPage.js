import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; 
import React from "react";

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> 404 Page not found</h2>
      <img
        className="not-found"
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt="page not found"
      />
      <Button
        onClick={() => navigate("/")}
        aria-label="Back to List"
        color="primary"
        variant="contained"
      >
        BACK
      </Button>
    </div>
  );
}
export function Home() {
  return (
    <div>
      <h2>Welcome to Home</h2>
    </div>
  );
}
