import { useEffect } from "react";
export const Chat = () => {
	useEffect(() => {
		window.fbAsyncInit = function () {
			FB.init({
				xfbml: true,
				version: "v8.0",
			});
		};

		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
			fjs.parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");
	}, []);

	return (
		<div>
			<div id="fb-root"></div>
			<div
				className="fb-customerchat"
				attribution="setup_tool"
				page_id={process.env.FBID}
			></div>
		</div>
	);
};
