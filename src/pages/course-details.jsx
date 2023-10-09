import React from "react";
import SEO from "../common/seo";
import CourseDetails from "../components/course-details";
import WrapperFour from "../layout/wrapper-4";



const index = (props) => {
	console.log(props);
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails 
			props={props}
			/>
    </WrapperFour>
  );
};

export async function getStaticProps() {
	const res = await fetch('http://localhost:5000/course');	
	const data = await res.json();
	console.log(data);
	return {
		props: { data }
	}
}

export default index;
