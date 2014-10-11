var React = require('react');
var appTemplate = require('.././templates/app');

var ENTER_KEY = 13;
var App = React.createClass({
	handleNewTodoKeyDown: function(event) {
		// if (event.which !== ENTER_KEY) {
		// 	return;
		// }
		// var val=this.refs.newField
			if (event.which !== ENTER_KEY) {
				return;
			}

			var val = this.refs.newField.getDOMNode().value.trim();

			if (val) {
				this.props.model.addTodo(val);
				this.refs.newField.getDOMNode().value = '';
			}

			return false;


	},
	render: function() {
		return appTemplate.call(this);;
	}
});

module.exports = App;