import { useRecoilState } from "recoil";
import { scroll, vh, vw } from "../state/atom";
import { useEffect } from "react";
export const ScrollHandler = () => {
	const [w, setw] = useRecoilState(vw);
	const [h, seth] = useRecoilState(vh);
	const [sc, setsc] = useRecoilState(scroll);

	useEffect(() => {
		let x = window.innerWidth;
		let y = window.innerHeight;
		setw(x);
		seth(y);
		window.addEventListener("scroll", () => {
			setsc(window.pageYOffset);
		});
	}, []);
	return <div></div>;
};
