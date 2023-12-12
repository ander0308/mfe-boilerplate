import React from "react";
import styles from "./styles.module.scss";

function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "button" | "submit";
}) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
