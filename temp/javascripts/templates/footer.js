/** @jsx React.DOM */
var React = require("react");
module.exports =function(){return (React.DOM.footer({id: "footer"}, 
	React.DOM.ul({id: "filters"}, 
		React.DOM.li(null, React.DOM.a({href: "#/"}, "All")), 
		React.DOM.li(null, React.DOM.a({href: "#/active"}, "Active")), 
		React.DOM.li(null, React.DOM.a({href: "#/completed"}, "Completed"))
	)
));};