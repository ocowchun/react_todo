/** @jsx React.DOM */
var React = require("react");
 var todoList=require('./../components/todo_list'); 
 var appFooter=require('./../components/footer'); 
module.exports =function(){return (


React.DOM.div(null, 
	React.DOM.header({id: "header"}, 
		React.DOM.input({type: "text", id: "new-todo", ref: "newField", placeholder: "What need to be done?", onKeyDown: this.handleNewTodoKeyDown})
	), 
	todoList({model: this.props.model, state: this.state}), 
	appFooter(null)
));};