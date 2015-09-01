var React = require('react');
var toggleGem = require('../actions/GemAction.js');

module.exports = React.createClass({
	clickHandler:function(){
		toggleGem()
	},
	render:function(){
		return(
			<button onClick={this.clickHandler}>toggle</button>
		)
	}
})