import React, { useState, useEffect } from 'react';

const SizeContext = React.createContext({});

export default SizeContext;

const defaultProps = {
    mobileSize: 450,
    tabletSize: 900,
}

export function SizeProvider({ children, mobileSize, tabletSize }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const resizeListener = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        if (window.innerWidth <= mobileSize) {
            setIsMobile(true);
            setIsTablet(false);
            setIsDesktop(false);
        } else if (window.innerWidth > mobileSize && window.innerWidth <= tabletSize) {
            setIsMobile(false);
            setIsTablet(true);
            setIsDesktop(false);
        } else if (window.innerWidth > tabletSize) {
            setIsMobile(false);
            setIsTablet(false);
            setIsDesktop(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        resizeListener();

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    })

    const value = {
        width,
        height,
        mobileSize,
        tabletSize,
        isMobile,
        isTablet,
        isDesktop,
    };

    return <SizeContext.Provider value={value}>
        {children}
    </SizeContext.Provider>
}

SizeProvider.defaultProps = defaultProps;