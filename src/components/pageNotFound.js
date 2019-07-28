import React from 'react';
import { Link } from 'react-router-dom';

export const pageNotFound = () => {
	return (
		<div>
			This is 404 pages - <Link to="/">Go Home</Link>
		</div>
	)
}