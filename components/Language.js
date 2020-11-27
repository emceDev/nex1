import React from "react";
import { useRecoilState } from "recoil";
import { language } from "../state/atom";

export const Language = (props) => {
	const [lang, setlang] = useRecoilState(language);

	function set() {
		setlang(!lang);
	}
	return (
		<label className="switch">
			<input
				type="checkbox"
				onClick={() => {
					set();
				}}
			/>
			<span className="slider round"></span>
		</label>
	);
};
