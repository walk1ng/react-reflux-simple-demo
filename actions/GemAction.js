var Reflux = require('reflux');

var toggleGem = Reflux.createAction()

var isGemActivated = false;

toggleGem.listen(function(){
	isGemActivated = !isGemActivated;
	var strActived = isGemActivated ? "activated" : 'deactivated'
	console.log("Gem is " + strActived);
});

module.exports = toggleGem;