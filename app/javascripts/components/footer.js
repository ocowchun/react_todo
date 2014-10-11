var React = require('react');
var _ = require('underscore');
var footeremplate = require('.././templates/footer');


var Footer = React.createClass({

	render: function() {
		return footeremplate.call(this);;
	}
});

module.exports = Footer;