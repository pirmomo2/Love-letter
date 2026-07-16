document.addEventListener("DOMContentLoaded", () => {
	const No = document.querySelector(".no");
	const Yes = document.querySelector(".yes");
	if (!No) {
		return;
	}
	const yesceleb = () => {
		const card = document.getElementById('card');
		const title = document.createElement('p');
		title.textContent = 'Thank you so much! We will now be in love forever and ever!';
		title.classList.add('request');

		card.replaceChildren(title);
	}
	const moveno = () => {
		const buttonWidth = No.offsetWidth;
		const buttonHeight = No.offsetHeight;
		const maxX = Math.max(0, window.innerWidth - buttonWidth - 20);
		const maxY = Math.max(0, window.innerHeight - buttonHeight - 20);
		const randomX = Math.floor(Math.random() * maxX);
		const randomY = Math.floor(Math.random() * maxY);
		No.style.position = "fixed";
		No.style.left = `${randomX}px`;
		No.style.top = `${randomY}px`;
	};
	Yes.addEventListener("click", yesceleb);
	No.addEventListener("mouseenter", moveno);
});
