import React from "react";

import { SideBar, TrendingPanel } from "../../";

import styles from "./styles.module.scss";

function Frame({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles["frame"]}>
			<SideBar />
			<div className={styles["frame__content"]}>{children}</div>
			<TrendingPanel />
		</div>
	);
}

export default Frame;
