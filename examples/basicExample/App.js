import React from 'react';
import { Mobile, Desktop, Tablet, DesktopTablet } from '@bucky24/mobile-detect';

import styles from './styles.css';

export default function App() {
    
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
	</div>);
}