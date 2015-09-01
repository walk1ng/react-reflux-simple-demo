var React = require('react');
var Gem = require('./Gem');
var TriggerButton = require('./TriggerButton');

module.exports = React.createClass({
	render:function(){
		return(
			<div>
				<Gem />
				<TriggerButton />
			</div>
		)
	}
})