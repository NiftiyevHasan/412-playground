var pageName = document.querySelector("p");
var isGray =false;


pageName.addEventListener("click", function(){
		document.body.classList.toggle("background");
		this.classList.toggle("underline");

});


// pageName.addEventListener("click", function(){
// 	document.body.classList.toggle("background");
// 	this.classList.toggle("underline");
// });