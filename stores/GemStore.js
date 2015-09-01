var Reflux = require('reflux');
var toggleGem = require('../actions/GemAction');

var gemStore = Reflux.createStore({
	init:function(){
		this.aa = false;
		this.listenTo(toggleGem, this.handleToggleGem);
	},

	handleToggleGem:function(){
		this.aa = !this.aa;
		this.trigger(this.aa);
	},

});

module.exports = gemStore;