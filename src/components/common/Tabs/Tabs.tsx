import React, { useState } from "react";
import styles from "./styles.module.scss";

function Tabs({tabs}: { tabs: string[] }) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles.tabs}>
			{tabs.map((tab, i) => (
				<button
					key={tab}
					className={`${styles.tab} ${activeIndex === i ? styles.active : ""}`}
					onClick={() => setActiveIndex(i)}
					type="button">
					{tab}
				</button>
			))}
		</div>
	);
}

export default Tabs;
