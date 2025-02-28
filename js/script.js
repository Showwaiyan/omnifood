document.querySelector(".year").textContent = new Date().getFullYear();

// Mobile nav
document.querySelector(".btn-mobile-nav").addEventListener("click", (e) => {
	document.querySelector(".header").classList.toggle("nav-open");
});

// smooth scrolling
document.querySelectorAll("a:link").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();

		const href = link.getAttribute("href");

		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		else {
			document.querySelector(href).scrollIntoView({ behavior: "smooth" });
		}
		document.querySelector(".header").classList.remove("nav-open");
	});
});

// Sticky Nav
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (
			!ent.isIntersecting &&
			(window.matchMedia("(max-width: 59em)") ||
				window.matchMedia("(max-width: 44em)") ||
				window.matchMedia("(max-width: 34em)"))
		) {
			document.querySelector(".header").classList.add("sticky");
			document.querySelector(".section-hero").style.marginTop = "9.6rem";
		} else {
			document.querySelector(".header").classList.remove("sticky");
			document.querySelector(".section-hero").style.marginTop = "0";
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(document.querySelector(".section-hero"));

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
