/** @jsx React.DOM */
var React = require("react");
module.exports =function(){return (React.DOM.li(null, 
React.DOM.input({type: "checkbox", onChange: this.props.onToggle, 	checked: this.props.todo.completed}), 
	this.props.title
));};