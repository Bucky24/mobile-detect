# mobile-detect
React component that can report the dimensions of the window (to prevent needing nasty code)

## MobileDetect

The default object exported is the MobileDetect component. This should be top-level in the application. Any children passed into MobileDetect will have access to the following props:

| Prop | Description |
| ----------- | ----------- |
| width | The width of the window |
| height | The heigh to the window |

### Example

```
// at top level

import MobileDetect from 'mobile-detect';

render(<MobileDetect>
    <App />
</MobileDetect>,
divToRenderTo);

// in App:

const App = ({ width, height, ... }) => {
    // render
};
```