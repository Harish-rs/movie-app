import { useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)} className="like">
        👍{like}
      </button>
      <button onClick={() => setDisLike(dislike + 1)} className="like">
        👎{dislike}
      </button>
    </div>
  );
}
export { Counter };
