import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelopeSquare, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faEnvelopeSquare, faAngleDoubleDown);

ReactDOM.render(<App />, document.getElementById('root'));
