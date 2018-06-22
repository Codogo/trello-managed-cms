import React from "react";
import slugify from "slugify";

import { Nav, } from "codogo-nav";

import Logo from "./Logo";

// ----------------------------------------------------

const GetInvolvedDropdown = [
	{
		to: "/new-members/",
		content: "New Members",
		as: "gatsby-link",
	},
	{
		to: "/whats-on/",
		content: "What's On",
		as: "gatsby-link",
	},
	{
		to: "/campaigning/",
		content: "Campaigning",
		as: "gatsby-link",
	},
	{
		to: "/volunteering/",
		content: "Volunteering",
		as: "gatsby-link",
	},
	{
		to: "/contact-us/",
		content: "Contact Us",
		as: "gatsby-link",
	},
	{
		to: "https://donation.labour.org.uk/page/contribute/donate-fa/",
		content: "Donate",
		as: "a",
	},
	{
		to: "https://join.labour.org.uk/",
		content: "Join",
		as: "a",
	},
];

const PeopleDropdown = [
	{
		to: "/mp/",
		content: "Catherine West MP",
		as: "gatsby-link",
	},
	{
		to: "/am/",
		content: "Joanne McCartney AM",
		as: "gatsby-link",
	},
	{
		to: "/mayor/",
		content: "Your Mayor",
		as: "gatsby-link",
	},
	{
		to: "/councillors/",
		content: "Councillor Candidates",
		as: "gatsby-link",
	},
];

const GroupsDropdown = ({ edges, }) =>
	edges
		.sort((x, y) => {
			return x.node.name.toUpperCase() < y.node.name.toUpperCase()
				? -1
				: 1;
		})
		.map(group => {
			return {
				to: `/groups/${ slugify(group.node.name, {
					lower: true,
				}) }`,
				content: group.node.name,
				as: "gatsby-link",
			};
		});

const WardsDropdown = ({ edges, }) =>
	edges
		.sort((x, y) => {
			return x.node.name.toUpperCase() < y.node.name.toUpperCase()
				? -1
				: 1;
		})
		.map(ward => {
			return {
				to: `/wards/${ slugify(ward.node.name, {
					lower: true,
				}) }`,
				content: ward.node.name,
				as: "gatsby-link",
			};
		});

// ----------------------------------------------------

const Navigation = props => (
	<Nav
		logo = { <Logo /> }
		fontSize = { { xs: "1.1em", other: "0.9em", } }
		textTransform = { { xs: "capitalize", other: "capitalize", } }
		color = { { xs: "white", other: "white", } }
		backgroundColor = { { xs: "#D9292F", other: "#D9292F", } }
		highlightColor = { { xs: "#fff", other: "#ddd", } }
		clear = { props.homepage ? true : false }
		fixed = { props.homepage ? false : true }
		links = { [
			{
				as: "gatsby-link",
				to: "/new-members/",
				content: "Get Involved",
				dropdown: GetInvolvedDropdown,
			},
			{
				as: "gatsby-link",
				to: "/wards/",
				content: "Wards",
				dropdown: [
					...WardsDropdown(props.wards),
					{
						to:
							"http://www.haringey.gov.uk/local-democracy/councillors-and-mps/find-my-ward",
						content: "Find your ward",
						as: "a",
					},
				],
			},
			{
				as: "gatsby-link",
				to: "/groups/",
				content: "Forums & Groups",
				dropdown: GroupsDropdown(props.groups),
			},
			{
				as: "gatsby-link",
				to: "/councillors/",
				content: "People",
				dropdown: PeopleDropdown,
			},
			{
				as: "gatsby-link",
				to: "/news/",
				content: "News",
			},
			{
				as: "a",
				to: "https://medium.com/hornsey-and-wood-green-labour",
				content: "Thoughts",
			},
			{
				as: "a",
				to: "https://donate.labour.org.uk/hornsey_wood_green/1",
				content: "Donate",
				border: true,
			},
			{
				as: "a",
				to: "https://join.labour.org.uk/",
				content: "Join",
				border: true,
			},
		] }
	/>
);

export default Navigation;
