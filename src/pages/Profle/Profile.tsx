import React from "react";
import { HeaderProfile, Tabs, Tweet, UserInfo } from "../../components";

function Profile() {
	return (
		<div>
			<HeaderProfile />
			<UserInfo />
			<Tabs tabs={["Posts", "Respostas", "Mídia", "Curtidas"]} />
	
			<Tweet />
		</div>
	);
}

export default Profile;
