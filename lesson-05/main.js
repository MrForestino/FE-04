const keys = ["q","w","e", "r", "t", "y", "1","2","3","`"];
const key = document.querySelector(".show");
const gameBtn = document.querySelector(".startBtn");

let isActive;
let currentKeyIndex = 0;

// Старт гри
const startGame = function () {
	isActive = true;
	currentKeyIndex = 0;
	key.textContent = keys[currentKeyIndex];
	PNotify.success({
		text: "Нова гра почалась!",
		delay: 500
	});
}

// Обробка натискання клавіш
document.addEventListener("keydown", (event) => {
	if (!isActive) return;

	if (event.key === keys[currentKeyIndex]) {
		currentKeyIndex++;

		if (currentKeyIndex >= keys.length) {
			isActive = false;
			PNotify.success({
				text: "Вітаю! Ви закінчили гру.",
				delay: 500
			});
		} else {
			key.textContent = keys[currentKeyIndex];
		}
	} else {
		PNotify.error({
			text: "Неправильна клавіша! Спробуй ще раз.",
			delay: 500
		});
	}
});

gameBtn.addEventListener("click", startGame);
