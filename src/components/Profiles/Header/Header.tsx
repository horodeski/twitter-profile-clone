import React from "react";

import styles from "./styles.module.scss";
import Button from "../../common/Button/Button";

function Header() {
	return (
		<div className={styles["header"]}>
			<div className={styles["header__back"]}>
				<Button icon="bx bx-arrow-back" styleType="icon" />
				<div className={styles["header__back__user"]}>
					<h3>Geovana</h3>
					<span className="text--small--gray">13,1 mil posts</span>
				</div>
			</div>
			<Button icon="bx bx-search" styleType="icon" />
		</div>
	);
}

export default Header;
