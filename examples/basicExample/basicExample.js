import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SizeProvider } from '@bucky24/mobile-detect';

ReactDOM.render(<SizeProvider><App /></SizeProvider>, document.getElementById('root'));
