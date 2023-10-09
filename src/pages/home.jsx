import React from "react";
import AboutArea from "../components/homes/home/about-area";
import CategoryArea from "../components/homes/home/category-area";
import ChooseArea from "../components/homes/home/choose-area";
import CounterArea from "../common/counter-area";
import CourseArea from "../components/homes/home/course-area";
import FeatureArea from "../components/homes/home/feature-area";
import HeroBanner from "../components/homes/home/hero-banner";
import InstructorArea from "../common/instructor-area";
import SuitableArea from "../common/suitable-area";
import TestimonialArea from "../components/homes/home/testimonial-area";
import BlogArea from "../components/homes/home/blog-area";
import BrandArea from "../common/brand-area";

const Home = () => {

	return (
		<>
			<HeroBanner />
			<FeatureArea />
			<AboutArea />
			<CategoryArea />
			<CourseArea />
			<ChooseArea />
			<CounterArea />
			<InstructorArea />
			<SuitableArea />
			<TestimonialArea />
			<BlogArea />
			<BrandArea style_1={true} />
		</>
	);
};

export default Home;