import React, { useState, useEffect } from 'react';

const SizeContext = React.createContext({});

export default SizeContext;

const defaultProps = {
    mobileSize: 450,
    tabletSize: 900,
}

export function SizeProvider({ children, mobileSize, tabletSize }) {
    const [width, setWidth] = useState(0);

    const resizeListener = () => {
        setWidth(window.innerWidth);
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
        mobileSize,
        tabletSize,
    };

    return <SizeContext.Provider value={value}>
        {children}
    </SizeContext.Provider>
}

SizeProvider.defaultProps = defaultProps;