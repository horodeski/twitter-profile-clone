import React from "react";

import User from "./User";

import styles from "./styles.module.scss";
import Button from "../Button/Button";

function Tweet() {
	return (
		<div className={styles["tweet"]}>
			<User />
			<div>
				<div className={styles["tweet__header"]}>
					<div className={styles["tweet__user"]}>
						<span className={styles["tweet__user__name"]}>Geovana</span>
						<span className="text--medium--gray">@geovanahorodeski</span>
						<span className="text--medium--gray">·</span>
						<span className="text--medium--gray">4 min</span>
					</div>
					{/* Implementar botão */}
					<i className="bx bx-dots-horizontal-rounded"></i>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at malesuada massa. Donec lobortis, nulla in vehicula pretium,
					massa nulla congue neque, non suscipit ligula est quis risus. Morbi eu tellus dolor. Quisque eleifend hendrerit mattis.
				</p>
				<div className={styles["tweet__footer"]}>
					<Button icon="bx bx-message-rounded" styleType="icon" color="blue" />
					<Button icon="bx bx-refresh" styleType="icon" color="green" />
					<Button icon="bx bx-heart" styleType="icon" color="pink" />
					<Button icon="bx bx-signal-4" styleType="icon" color="blue" />
					<div className={styles["tweet__footer__buttons--right"]}>
						<Button icon="bx bx-save" styleType="icon" color="blue" />
						<Button icon="bx bx-arrow-from-bottom" styleType="icon" color="blue" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tweet;
