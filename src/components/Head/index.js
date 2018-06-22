import React from "react";
import Helmet from "react-helmet";

// ----------------------------------------------------

const Head = () => (
	<Helmet
		title = "Trello Managed CMS"
		meta = { [
			{
				name: "description",
				content: "CMS from trello. Simple.",
			},
			{
				name: "keywords",
				content:
					"Do, Keywords, Do, Anything",
			},
			{
				name: "google-site-verification",
				content: "Zg3zItwnIwzK5-NXu7KC5JuBu6PM4CY_nkxU78-CQtQ",
			},
		] }
	/>
);

export default Head;
