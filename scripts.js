var start = new Date().getTime();
var res;
var colors = ["#9A76B3", "#EE3D48", "#FED876", "#8CBA51", "#00CF91", "#64C7FF", "#0043A4", "#810B44"];
function getShape() {
	'use strict';
	if (Math.floor(Math.random() * 2) === 0) {
		return "0%";
	} else {
		return "100%";
	}
}
function getSize() {
	'use strict';
	var width = "px", min = 50, max = 500;
	return Math.floor(Math.random() * (max - min + 1) + min) + width;
}
function getTop() {
	'use strict';
	var top = "px", min = 50, max = 400;
	return Math.floor(Math.random() * (max - min + 1) + min) + top;
}
function getLeft() {
	'use strict';
	var left = "px";
	return Math.floor(Math.random() * 800) + left;
}
function styleShape() {
	'use strict';
	var size = getSize();

	document.getElementById("figures-block").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
	document.getElementById("figures-block").style.borderRadius = getShape();
	document.getElementById("figures-block").style.width = size;
	document.getElementById("figures-block").style.height = size;
	document.getElementById("figures-block").style.top = getTop();
	document.getElementById("figures-block").style.left = getLeft();
}
function showShape() {
	'use strict';
	styleShape();
	document.getElementById("figures-block").style.display = "block";
	start = new Date().getTime();
}
function delayShow() {
	'use strict';
	setTimeout(showShape, Math.random() * 1500);
}
delayShow();
document.getElementById("figures-block").onclick = function () {
	'use strict';
	res = (new Date().getTime() - start) / 1000;
	document.getElementById("figures-block").style.display = "none";
	document.getElementById("result").innerHTML = res + "s";
	delayShow();
};