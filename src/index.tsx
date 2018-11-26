import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "@/App";
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();