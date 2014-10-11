var React = require('react');
var todoTemplate = require('.././templates/todo');

var Todo = React.createClass({

	render: function() {
		return todoTemplate.call(this);;
	}
});

module.exports = Todo;