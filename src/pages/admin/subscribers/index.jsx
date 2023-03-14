/** @format */

import React from "react";
import { Link } from "react-router-dom";

const index = () => {
	return (
		<div>
			Subscribers
			<Link to="user-details">User Details</Link>
		</div>
	);
};

export default index;
