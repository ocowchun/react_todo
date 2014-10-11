/** @jsx React.DOM */
var React = require("react");
module.exports =function(){return (React.DOM.li(null, 
React.DOM.input({type: "checkbox", onChange: this.props.onToggle}), 
	this.props.title
));};