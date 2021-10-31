import React, { useContext } from 'react';
import SizeContext from './SizeContext';
export * from './SizeContext';

export function Mobile({ children }) {
	const { width, mobileSize } = useContext(SizeContext);

	if (width <= mobileSize) {
		return children;
	}

	return null;
}

export function Tablet({ children}) {
	const { width, mobileSize, tabletSize } = useContext(SizeContext);

	if (width > mobileSize && width <= tabletSize) {
		return children;
	}

	return null;
}

export function Desktop({ children}) {
	const { width, tabletSize } = useContext(SizeContext);

	if (width > tabletSize) {
		return children;
	}

	return null;
}