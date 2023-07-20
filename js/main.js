const navBtn = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const footYear = document.querySelector(".footer-year");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("mobile-active");

	navLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navBtn.classList.remove("is-active");
			navMobile.classList.remove("mobile-active");
		});
	});

	handleNavLinksAnimation();
};

navBtn.addEventListener("click", handleNav);

const handleNavLinksAnimation = () => {
	let delayTime = 0;

	navLinks.forEach((item) => {
		item.classList.toggle("nav-links-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const deleteAnimation = () => {
	navLinks.forEach(
		(item)  => {
			item.classList.remove("nav-links-animation");
		})
};

Array.from(navLinks).forEach((link) => {
	link.addEventListener("click", deleteAnimation);
});

const currentYear = () => {
	const year = new Date().getFullYear();

	footYear.innerText = year;
};

currentYear();
