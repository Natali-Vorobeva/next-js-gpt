import React from "react";
import SEO from "../common/seo";
import CourseDetails from "../components/course-details";
import WrapperFour from "../layout/wrapper-4";



const index = ({relatedCourses}) => {
	
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails 
			relatedCourses={relatedCourses}
			/>
    </WrapperFour>
  );
};

export async function getStaticProps() {
	const res = await fetch('http://localhost:5000/related-courses');	
	const data = await res.json();
	console.log(data);
	return {
		props: { relatedCourses:data }
	}
}

export default index;
