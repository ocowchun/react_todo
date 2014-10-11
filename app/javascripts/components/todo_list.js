var React = require('react');
var _ = require('underscore');
var todoListTemplate = require('.././templates/todo_list');
var Todo = require('./../components/todo');

var onToggle = function(uuid) {
	this.toggle(uuid);
}

var App = React.createClass({

	render: function() {
		var nowShowing = this.props.state.nowShowing;
		var model = this.props.model;
		var todos = model.getTodos(nowShowing);
		var main = _.map(todos, function(todo) {
			return Todo({
				title: todo.title,
				key: todo.id,
				todo:todo,
				onToggle: onToggle.bind(model, todo.id)
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