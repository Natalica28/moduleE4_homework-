const country = {
	city1: "Peter",
	city2: "Moscow"
}; 

function cityOfCountry (arr) {
	const ownCity = Object.create(arr);
	ownCity.city3 = "Krasnoyarsk";
    ownCity.city4 = "Minusinsk";
	for (let key in ownCity) {
        if (ownCity.hasOwnProperty(key)) {
            console.log(key, ownCity[key]); 
        }   
    }
}
cityOfCountry(country);