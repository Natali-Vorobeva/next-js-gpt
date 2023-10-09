
import { useTextBuffer, StreamingText } from "nextjs-openai";
import { useEffect, useRef, useState } from "react";

export default function AboutCourseOnline() {
	const nameRef = useRef(null);
	const [data, setData] = useState({ name: "online courses" });
	
	const { buffer, done, error, refresh, cancel } = useTextBuffer({
		url: "/api/course-online",
		throttle: 100,
		options: {
			method: "POST",
		},
		data,
	});

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