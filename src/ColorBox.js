import { useState } from "react";

function Addcolor() {
  const [color, setcolor] = useState("red");
  const [colorlist, setcolorlist] = useState(["red", "blue"]);
  const styles = {
    background: color,
    fontsize: "24px",
  };

  return (
    <div className="colorbox">
      <input
        onChange={(event) => setcolor(event.target.value)}
        style={styles}
        type="text"
        placeholder="Enter the color"
      />
      <button onClick={() => setcolorlist([...colorlist, color])}>
        Add Color
      </button>
      {/* {colorlist.join()} */}
      {colorlist.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

export { Addcolor };
