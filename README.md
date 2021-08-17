# @bucky24/mobile-detect
React component that can selectively show content based on preset window widths.

Like most of my components, there might be something better out there-this one is pretty simple.

# Use

The first thing you need to do is wrap your content in the `SizeProvider`. It's recommended that you do this at the very top level of your app, however because this provider works off of the window size, it doesn't need to be there to function properly.

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

There are three main components exported by the module:
* Mobile - only displays its contents when the window width is <= 450
* Tablet - only displays its contents when the window width is above 450 but <= 900
* Desktop - only displays its contents when the window width is above 900## Example:

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