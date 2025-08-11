import React from "react";
import styles from "./styles.module.scss";

function UserFollowers({ following, followers }: { following: number; followers: number }) {
  return (
    <div className={styles["followers"]}>
      <span className={styles["followers__link"]}>
        <span>{following}</span>
        <span className="text--medium--gray">seguindo</span>
      </span>
      <span className={styles["followers__link"]}>
        <span>{followers}</span>
        <span className="text--medium--gray">seguidores</span>
      </span>
    </div>
  );
}

export default UserFollowers;
