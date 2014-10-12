var React = require('react');
var _ = require('underscore');
var footeremplate = require('.././templates/footer');
window.react=React;
// var cx = React.addons.classSet;
var Footer = React.createClass({

	render: function() {
		var nowShowing = this.props.state.nowShowing;
		console.log(nowShowing);
		return footeremplate.call(this);;
	}
});

module.exports = Footer;