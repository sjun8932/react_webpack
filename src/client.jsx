const React = require('react');
const ReactDom = require('react-dom');

const TestApp = require('./App');

ReactDom.render(<TestApp />, document.querySelector('#root'));