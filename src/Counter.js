import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import React from "react";
// import Stack from "@mui/material/Stack";
// import MailIcon from "@mui/icons-material/Mail";

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <IconButton
        aria-label="Like Movie "
        onClick={() => setLike(like + 1)}
        className="like"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="Dislike Movie"
        onClick={() => setDisLike(dislike + 1)}
        className="like"
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
export { Counter };
