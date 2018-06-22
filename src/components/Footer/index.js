import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import moment from "moment";

import Link from "gatsby-link";

import { Container, Grid, Header, List, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const Footer = props => (
	<Segment color = "grey" style = { { padding: "5em 0em", } } inverted vertical>
		<Container>
			<Grid divided inverted stackable>
				<Grid.Row>
					<Grid.Column width = { 4 }>
						<Header inverted as = "h4" content = "About" />

						<List link inverted>
							<List.Item to = "/contact-us/" as = { Link }>
								Contact Us
							</List.Item>

							<List.Item
								to = "a"
								as = { Link }
								href = "https://join.labour.org.uk/"
							>
								Join
							</List.Item>

							<List.Item to = "/new-members/" as = { Link }>
								Donate
							</List.Item>

							<List.Item to = "/sitemap/" as = { Link }>
								Sitemap
							</List.Item>

							<List.Item to = "https://twitter.com/mcclowes" as = "a">
								Site by @mcclowes
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</Segment>
);

export default Footer;
