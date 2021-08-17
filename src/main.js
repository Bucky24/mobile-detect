import React, { useContext } from 'react';
import SizeContext from './SizeContext';
export * from './SizeContext';

export function Mobile({ children }) {
	const { width } = useContext(SizeContext);

	if (width <= 360) {
		return children;
	}

	return null;
}

export function Tablet({ children}) {
	const { width } = useContext(SizeContext);

	if (width > 360 && width <= 900) {
		return children;
	}

	return null;
}

export function Desktop({ children}) {
	const { width } = useContext(SizeContext);

	if (width > 900) {
		return children;
	}

	return null;
}