import React, { useContext } from 'react';
import { Mobile, Desktop, Tablet, DesktopTablet, SizeContext } from '@bucky24/mobile-detect';

import styles from './styles.css';

export default function App() {
    const { width, height } = useContext(SizeContext);
    
	return (<div className={styles.appRoot}>
		<Desktop>
            This is desktop
        </Desktop>
        <Tablet>
            This is tablet
        </Tablet>
        <Mobile>
            This is mobile
        </Mobile>
        <DesktopTablet>
            This is desktop or tablet
        </DesktopTablet>
        <div>
            Size of window is {width} {height}
        </div>
	</div>);
}