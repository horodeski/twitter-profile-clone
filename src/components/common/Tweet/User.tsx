import React, { useState } from "react";

import styles from "./styles.module.scss";
import UserFollowers from "../../Profiles/UserInfo/UserFollowers";

function User() {
	const [isHovered, setIsHovered] = useState<boolean>(true);

	return (
		<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={styles["user"]}>
			<img className={styles["user__image"]} src="https://avatars.githubusercontent.com/u/99155494?v=4" alt="" />
			{isHovered && (
				<div className={styles["user__info"]}>
					<img className={styles["user__info__image"]} src="https://avatars.githubusercontent.com/u/99155494?v=4" alt="" />
					<div className={styles["user__info__data"]}>
						<h4>Geovana</h4>
						<span className="text--medium--gray">@geovanahorodeski</span>
					</div>
					<p className={styles["user__info__description"]}>gosto de frontend e filmes de mafia</p>
					<UserFollowers followers={100} following={100}/>
				</div>
			)}
		</div>
	);
}

export default User;
