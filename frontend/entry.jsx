"use strict";

const React = require('react');
const	ReactDOM = require('react-dom');
const Widget = require('./widget.jsx');
window.RatesStore = require('./rates_store.js');


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widget/>, document.getElementById('root'));
});
