import { useEffect, useState } from "react";
import classes from "./MouseFollower.module.scss";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 200, y: e.clientY - 200 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{ position: "fixed", top: position.y, left: position.x }}
      className={classes.MouseFollower}
    ></div>
  );
};

export default MouseFollower;
