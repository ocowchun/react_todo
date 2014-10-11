var React = require('react');
var _ = require('underscore');
var todoListTemplate = require('.././templates/todo_list');
var Todo = require('./../components/todo');

var onToggle=function (uuid) {
console.log(uuid);
this.toggle(uuid);
}

var App = React.createClass({

	render: function() {
		var model=this.props.model;
		var todos = model.getTodos();
		console.log(todos);
		var main = _.map(todos, function(todo) {
			return Todo({
				title: todo.title,
				key:todo.id,
				onToggle:onToggle.bind(model,todo.id)
			});
		});
		var f = Todo({
			title: "test2"
		});
		this.props.todos = main;
		return todoListTemplate.call(this);;
	}
});

module.exports = App;