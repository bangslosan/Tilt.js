#Tilt.js

##A framework agnostic handler for attaching callbacks to tilt changes in iOS devices

###Usage

	var t = new Tilt();
	var myListener = function(x, y){
		console.log(x, y);
	};
	t.addListener(myListener);