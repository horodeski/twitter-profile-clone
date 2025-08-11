import React from "react";
import { HeaderProfile, Tabs, UserInfo } from "../../components";

function Profile() {
	return (
		<div>
			<HeaderProfile />
			<UserInfo />
			<Tabs tabs={["Posts", "Respostas", "Mídia", "Curtidas"]} />
		</div>
	);
}

export default Profile;
