document.addEventListener("DOMContentLoaded", () => {
	const noButton = document.querySelector(".no");
	if (!noButton) {
		return;
	}
	const moveNoButton = () => {
		const buttonWidth = noButton.offsetWidth;
		const buttonHeight = noButton.offsetHeight;
		const maxX = Math.max(0, window.innerWidth - buttonWidth - 20);
		const maxY = Math.max(0, window.innerHeight - buttonHeight - 20);
		const randomX = Math.floor(Math.random() * maxX);
		const randomY = Math.floor(Math.random() * maxY);
		noButton.style.position = "fixed";
		noButton.style.left = `${randomX}px`;
		noButton.style.top = `${randomY}px`;
	};
	noButton.addEventListener("mouseenter", moveNoButton);
});
