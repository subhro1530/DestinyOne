// components/Status.js
import React from "react";
import { useSpring, animated } from "react-spring";

const Status = ({ number, label, bgImageLink = "default-bg-link" }) => {
  const parallax = useSpring({
    from: { transform: "translateY(0%)" },
    to: async (next) => {
      while (1) await next({ transform: "translateY(10%)" });
    },
    reset: true,
  });

  return (
    <animated.div
      style={{
        ...parallax,
        background: `url(${bgImageLink}) center/cover fixed no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "300px",
        margin: "10px",
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <div style={{ fontSize: "36px", fontWeight: "bold" }}>{number}</div>
      </div>
      <div style={{ fontSize: "18px" }}>{label}</div>
    </animated.div>
  );
};

export default Status;
