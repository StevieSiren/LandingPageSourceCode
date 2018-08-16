var iconText = document.querySelector('#icon-text');
var iconHeader = document.querySelector("#icon-header");
var iconRightImage = document.querySelector("#icon-right-image");

var circle1 = document.querySelector("#circle1"),
	circle2 = document.querySelector('#circle2'),
	circle3 = document.querySelector("#circle3"),
	circle4 = document.querySelector("#circle4"),
	circle5 = document.querySelector("#circle5");


const circles = [circle1, circle2, circle3, circle4, circle5];




/*--- BUTTONS SECTION CONTENT ---*/

circle1.addEventListener("click", function() {
	for(var i = 0; i < circles.length; i++) {
			if(circles[i].classList.contains("circle-active")) {
				circles[i].classList.toggle("circle-active");
			}
		}
		circle1.classList.toggle("circle-active");
		iconHeader.innerText = "Customize";
		iconText.innerText = "your VPS developer environment with over 30 resource plans to choose from and choose which CPU to use in premium hosting plans.";
		iconRightImage.innerHtml.src = "../img/lock.png";
});

circle2.addEventListener("click", function() {
	for(var i = 0; i < circles.length; i++) {
		if(circles[i].classList.contains("circle-active")) {
			circles[i].classList.toggle("circle-active");
		}
	}
	circle2.classList.toggle("circle-active");
	circle2.style.transition = ".2s";
	iconHeader.innerText = "Security";
	iconText.innerText = "Secure SSH Key Login and optional password login, both with Root Access to any Virtual Private Server you spin up.";
	iconRightImage.innerHtml.src = "../img/lock.png";

});

circle3.addEventListener("click", function() {
	for(var i = 0; i < circles.length; i++) {
		if(circles[i].classList.contains("circle-active")) {
			circles[i].classList.toggle("circle-active");
		}
	}
	circle3.classList.toggle("circle-active");
	iconHeader.innerText = "Apps & Tools";
	iconText.innerText = "Pre-built devtools, programs, and multiple Linux OS Distros that are featured for developers, saving development time and frustration.";
	iconRightImage.innerHtml.src = "../../img/lock.png";
});

circle4.addEventListener("click", function() {
	for(var i = 0; i < circles.length; i++) {
		if(circles[i].classList.contains("circle-active")) {
			circles[i].classList.toggle("circle-active");
		}
	}
	circle4.classList.toggle("circle-active");
	iconHeader.innerText = "Features & Updates";
	iconText.innerText = "Rapid virtual machine deployment, customizable hardware configurations, continuous UI/UX updates in response to new features and user feedback.";
	iconRightImage.innerHtml.src = "../../img/lock.png";
});

circle5.addEventListener("click", function() {
	for(var i = 0; i < circles.length; i++) {
		if(circles[i].classList.contains("circle-active")) {
			circles[i].classList.toggle("circle-active");
		}
	}
	circle5.classList.toggle("circle-active");
	iconHeader.innerText = "Rewards Program";
	iconText.innerText = "Earn SkyPoints on every transaction, redeemable for account credit and other rewards. Earn rewards for doing your job.";
	iconRightImage.innerHtml.src = "../../img/lock.png";
});