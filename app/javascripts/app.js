var React = require('react');

var App = require('./components/app');
var TodoModel = require('./models/todo');
var model = TodoModel();
var $=require('jquery');
function render() {

	React.renderComponent(App({
			model: model
		}),
		document.getElementById('react')
	);
}
model.addChangeListener(render);
render();