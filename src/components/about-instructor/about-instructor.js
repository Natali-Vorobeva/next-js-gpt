import { useTextBuffer, StreamingText } from "nextjs-openai";
// import { StreamingTextURL } from "nextjs-openai"
// import { StreamingText  } from "openai-streams";
// import './Demo.css';

import { useEffect, useRef, useState } from "react";

export default function AboutInstructor() {
	const nameRef = useRef(null);
	// const [data, setData] = useState({ name: "About Course Web Design in Adobe XD" });
	const [data, setData] = useState({ name: "Instructor Hossain Mahmud Master Web Design" });

	const { buffer, done, error, refresh, cancel } = useTextBuffer({
		url: "/api/instructor",
		throttle: 100,
		options: {
			method: "POST",
		},
		data,
	});

	// console.log({ buffer, done, error });

	useEffect(
		() => {
			const name = nameRef.current?.value;
			if (name) setData((data) => ({ ...data, name }));
		},
		[]
	);

	const setName = () => {
		const name = nameRef?.current?.value;
		if (name) {
			setData((data) => ({ ...data, name }));
			refresh();
		}
	};

	return (
		<div>			
			<StreamingText
				buffer={buffer} fade={600} />			
		</div>
	);
}