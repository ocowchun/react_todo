var React = require('react');
var appTemplate = require('.././templates/app');
var appState=require('.././constants/TodoConstant');
var Router=require('director').Router;
var ENTER_KEY = 13;



var App = React.createClass({
	getInitialState: function() {
		return {
			nowShowing: appState.All,
			editing: null
		};
	},
	componentDidMount: function() {
		var setState = this.setState;
		var router = Router({
			'/': setState.bind(this, {
				nowShowing: appState.All
			}),
			'/active': setState.bind(this, {
				nowShowing: appState.ACTIVE
			}),
			'/completed': setState.bind(this, {
				nowShowing: appState.COMPLETED
			})
		});
		router.init('/');
	},
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

