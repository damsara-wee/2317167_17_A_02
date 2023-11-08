const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const startBtn = document.getElementById("start-btn");

const dots = [
	[0],
	[1, 1],
	[1, 0, 1],
	[1, 0, 1, 1],
	[1, 1, 1, 0, 1],
	[1, 1, 1, 1, 1, 1]
];

startBtn.addEventListener("click", () => {
	const value1 = Math.floor(Math.random() * 6) + 1;
	const value2 = Math.floor(Math.random() * 6) + 1;

	updateDice(dice1, value1);
	updateDice(dice2, value2);
});

function updateDice(dice, value) {
	dice.innerHTML = "";
	const dotArray = dots[value - 1];
	for (let i = 0; i < dotArray.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (dotArray[i] === 1) {
			dot.classList.add("active");
		}
		dice.appendChild(dot);
	}
}