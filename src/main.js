import React, { useContext } from 'react';
import SizeContext from './SizeContext';
export * from './SizeContext';
export { default as SizeContext } from './SizeContext';

export function Mobile({ children }) {
	const { isMobile } = useContext(SizeContext);

	if (isMobile) {
		return children;
	}

	return null;
}

export function Tablet({ children}) {
	const { isTablet } = useContext(SizeContext);

	if (isTablet) {
		return children;
	}

	return null;
}

export function Desktop({ children}) {
	const { isDesktop } = useContext(SizeContext);

	if (isDesktop) {
		return children;
	}

	return null;
}

export function DesktopTablet({ children}) {
	const { isDesktop, isTablet } = useContext(SizeContext);

	if (isDesktop || isTablet) {
		return children;
	}

	return null;
}