import SEO from "../common/seo";
import Home from "./home";
import Wrapper from "../layout/wrapper";

const index = () => {
	return (
		<Wrapper>
			<SEO pageTitle={'Epora'} />
			<Home />
		</Wrapper>
	);
};

export default index;