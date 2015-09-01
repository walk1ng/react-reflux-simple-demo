var React = require('react');
var Reflux = require('reflux');
var gemStore = require('../stores/GemStore');
var toggleGem = require('../actions/GemAction');

var Gem = React.createClass({
	getInitialState:function(){
		return {
			gemState : null,
		}
	},

	componentDidMount:function(){
		this.unsubscribe = gemStore.listen(this.onGemChange);
	},

	componentWillUnmount:function(){
		this.unsubscribe();
	},

	onGemChange:function(e){
		this.setState({
			gemState: e,
		});
	},

	clickHandler:function(){
		toggleGem()
	},

	render:function(){
		var gemStatusStr = this.state.gemState ? 'actived' : 'deactived'
		return(
			<h1 onClick={this.clickHandler}>Gem is {gemStatusStr}</h1>
		)
	},
}) 

module.exports = Gem;