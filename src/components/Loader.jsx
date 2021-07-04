import React from "react";
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';


function Loader({ loading = true }) {
  if(!loading) return null
  return (
    <div
      className="loader"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoopRoundedIcon />
    </div>
  ); 
}

export default Loader;
