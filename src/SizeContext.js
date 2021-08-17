import React, { useState, useEffect } from 'react';

const SizeContext = React.createContext({});

export default SizeContext;

export function SizeProvider({ children }) {
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
    };

    return <SizeContext.Provider value={value}>
        {children}
    </SizeContext.Provider>
}