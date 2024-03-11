const fruits = {
	apple: "Яблоко",
	banana: "Банан",
	strawberry: "Клубника"
};

function fruitInFruits (str, arr) {
	for (let key in arr) {
		if (key === str) {
			return true;
		}
		else {
			return false;
		}
	}
};

console.log(fruitInFruits("pinapple", fruits))