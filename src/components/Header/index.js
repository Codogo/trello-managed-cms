import React from "react";
import PropTypes from "prop-types";

import Navigation from "./Navigation";

// ----------------------------------------------------

const Header = props => (
	<div>
		<Navigation { ...props } />

		{props.children}
	</div>
);

Header.propTypes = {
	children: PropTypes.node,
};

// ----------------------------------------------------

export default Header;
