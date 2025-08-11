import React from "react";
import styles from "./styles.module.scss";

function InfoRow({ icon, text }: { icon: string; text: string }) {
  return (
    <div className={styles["row"]}>
      <i className={icon}></i>
      <span className="text--medium--gray">{text}</span>
    </div>
  );
}

export default InfoRow;
