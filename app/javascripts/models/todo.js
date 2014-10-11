var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;
var TODO_CHANGE_EVENT = 'todo_change_event';
var appState = require('.././constants/TodoConstant');


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
			todos.push({
				id: uuid(),
				title: title,
				completed: false
			});

			this.emitChange();
		},
		getTodos: function(nowShowing) {
			if (arguments.length == 1) {
				var predicate;
				switch (nowShowing) {
					case appState.ACTIVE:
						predicate = function(todo) {
							return !todo.completed
						};
						break;
					case appState.COMPLETED:
						predicate = function(todo) {
							return todo.completed
						};
						break;
					default:
						predicate = function(todo) {
							return true
						};
						break;

				}
				return _.filter(todos, predicate);
			} else {
				return todos;
			}
		},
		toggle: function(id) {
			todos = _.map(todos, function(todo) {
				return todo.id !== id ?
					todo :
					_.extend({}, todo, {
						completed: !todo.completed
					});
			});
			this.emitChange();
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
