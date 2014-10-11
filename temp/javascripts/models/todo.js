var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;
var TODO_CHANGE_EVENT = 'todo_change_event';
// var TodoApp = function() {
// 	this.todos = [];
// 	this.onChanges = [];
// }

// TodoApp.prototype.subscribe = function(onChange) {
// this.onChange
// };
var uuid = function() {
	/*jshint bitwise:false */
	var i, random;
	var uuid = '';

	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
			.toString(16);
	}

	return uuid;
};

// new EventEmitter()
module.exports = function() {
	var todos = [];
	var TodoApp = _.extend(new EventEmitter(), {

		addTodo: function(title) {
			// console.log(title);
			todos.push({
				id: uuid(),
				title: title,
				completed: false
			});

			this.emitChange();
		},
		getTodos: function() {
			return todos;
		},
		toggle : function(id) {
			todos =_.map(todos,function(todo) {
				return todo.id !== id ?
					todo :
					_.extend({}, todo, {
						completed: !todo.completed
					});
			});
		},
		emitChange: function() {
			this.emit(TODO_CHANGE_EVENT);
		},

		/**
		 * @param {function} callback
		 */
		addChangeListener: function(callback) {
			this.on(TODO_CHANGE_EVENT, callback);
		},

		/**
		 * @param {function} callback
		 */
		removeChangeListener: function(callback) {
			this.removeListener(TODO_CHANGE_EVENT, callback);
		},

	});
	return TodoApp;
}

// var todo = module.exports();
// todo.addChangeListener(function() {
// 	console.log("change");
// });
// todo.addTodo("123");