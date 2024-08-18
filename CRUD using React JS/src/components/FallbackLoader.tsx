import React from "react";
import { CircularProgress } from "@mui/material";

const FallbackLoader = () => {
  return (
    <section
      style={{
        flex: 1,
        width: "100%",
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ color: "#283C92" }} />
    </section>
  );
};

export default FallbackLoader;
