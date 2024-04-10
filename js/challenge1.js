window.addEventListener("load", function() {
	console.log("Good job opening the window")

	let h1 = document.querySelector("h1");
    h1.style.color = "#6E3DFF";
    h1.style.textAlign = "center";

});

document.addEventListener("dblclick", function(event) {
    console.log("we actually did it.");
    let date = new Date();
    alert(date.getTime());
});

document.querySelector("#check").addEventListener("checkbox", function() {
    let email = document.querySelector(".hidden");
});