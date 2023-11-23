// export default (function() {
 	if (!window.location.pathname.includes("settings.html")) return // guard clause

	if (window.matchMedia("(prefers-color-scheme: dark)").matches
 		&& localStorage.getItem("dark__mode__container") !== "") {
 		localStorage.setItem("dark__mode__container", "darkmode")
 	}

 	// const CTA_BUTTON = document.querySelector(".dark__mode__button")
 	// CTA_BUTTON.addEventListener("click", clickHandler)

 	// function clickHandler() {
 	// 	const CLASS_LIST = document.body.classList
 	// 	CLASS_LIST.toggle("darkmode")
 	// 	localStorage.setItem("dark__mode__container",
 	// 		CLASS_LIST.contains("darkmode")
 	// 			? "darkmode"
 	// 			: "")
 	// }

// 	if(!localStorage.getItem("theme")) {
// 		localStorage.setItem("theme", "")
// 	}

// 	if (localStorage.getItem("theme") === "darkmode") {
// 		CTA_BUTTON.checked = true
// 	}

// 	document.body.classList.add(localStorage.getItem("theme"))

// })()
