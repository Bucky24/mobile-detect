# @bucky24/mobile-detect
React component that can selectively show content based on preset window widths.

Like most of my components, there might be something better out there-this one is pretty simple.

# Use

## SizeProvider

The first thing you need to do is wrap your content in the `SizeProvider`. It's recommended that you do this at the very top level of your app, however because this provider works off of the window size, it doesn't need to be there to function properly.

### Example:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SizeProvider } from '@bucky24/mobile-detect';

ReactDOM.render(<SizeProvider><App /></SizeProvider>, document.getElementById('root'));
```

*NOTE* your index template will also need the meta viewport set, or it will constantly report a width of 980.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

If you want to change the breakpoints where tablet and mobile start, you can do that by passing `mobileSize` and `tabletSize` into `SizeProvider`. The default value for `mobileSize` is 450 and `tabletSize` is 900

## SizeContext

The SizeContext provides information on window width as well as computed data.

| Field | Description |
|--|--|
| width | The width of the window |
| mobileSize | The value being used as the breakpoint for mobile |
| tabletSize | The value being used as the breakpoint for tablet |
| isMobile | Boolean, true if mobile contents should be displayed |
| isTablet | Boolean, true if tablet contents should be displayed |
| isDesktop | Boolean, true if desktop contents should be displayed |

### Example:

```
import React, { useContext } from 'react';
import { SizeContext } from '@buck24/mobile-detect';

export default function App() {
    const { isMobile, isTablet, isDesktop } = useContext(SizeContext);
    return (<div className={styles.appRoot}>
		{isDesktop && (
            This displays when in desktop view
        )}
        {isTablet && (
            This displays when in tablet view
        )}
        {isMobile && (
            This displays when in mobile view
        )}
	</div>);
}
```

## Helper Components

There are four main components exported by the module:
* Mobile - only displays its contents when the window width is <= mobileSize
* Tablet - only displays its contents when the window width is above mobileSize but <= tabletSize
* Desktop - only displays its contents when the window width is above tabletSize
* DesktopTablet - only displays its contents when either Tablet or Desktop would display

### Example:

```
import React from 'react';
import { Mobile, Desktop, Tablet } from '@bucky24/mobile-detect';

import styles from './styles.css';

export default function App() {
    
	return (<div className={styles.appRoot}>
		<Desktop>
            This displays when in desktop view
        </Desktop>
        <Tablet>
            This displays when in tablet view
        </Tablet>
        <Mobile>
            This displays when in mobile view
        </Mobile>
	</div>);
}
```