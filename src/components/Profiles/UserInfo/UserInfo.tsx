import React from "react";

import { Button, InfoRow, UserFollowers } from "../../";

import styles from "./styles.module.scss";

function UserInfo() {
	return (
		<div>
			<div className={styles["header"]}></div>
			<div className={styles["user"]}>
				<div className={styles["user__topSection"]}>
					<img
						className={styles["user__topSection__image"]}
						src="https://avatars.githubusercontent.com/u/99155494?v=4"
						alt="profile image"
					/>
					<Button text="Editar perfil" styleType="secondary" />
				</div>
				<h3>Geovana</h3>
				<span className="text--medium--gray">@geovanahorodeski</span>
				<p className={styles["user__description"]}>gosto de frontend e filmes de mafia</p>
				<div className={styles["user__moreInfo"]}>
					<InfoRow icon="bx bx-briefcase" text="Software developer/Programmer/Software engineer" />
					<div className={styles["user__moreInfo__row"]}>
						<InfoRow icon="bx bx-link-alt" text="github.com/horodeski" />
						<InfoRow icon="bx bx-calendar" text="Ingressou em julho de 2021" />
					</div>
				</div>
				<UserFollowers followers={100} following={100} />
			</div>
		</div>
	);
}

export default UserInfo;
