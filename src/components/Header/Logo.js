import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import { bpEither, } from "codogo-utility-functions";

import logo from "../../images/logo.png";
//import logoAlt from "../../images/logo-alt.png";

// ----------------------------------------------------

const LogoWrapper = styled(Link)`
	${ bpEither("left", "30px") };
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 75%;
	padding: 0.75em 0;
`;

const LogoImage = styled.img`
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	object-position: left;
`;

// ----------------------------------------------------

const Logo = () => (
	<LogoWrapper to = "/">
		<LogoImage src = { logo } />
	</LogoWrapper>
);

export default Logo;
