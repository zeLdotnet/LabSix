function convertTemp(temp, cOrF){

	if (cOrF === "C") {

		
		return (temp-32) * (5/9);
		

	} else if (cOrF === "F"){

		
		return (temp*(9/5)) + 32;
		
	}

}

console.log(convertTemp(212, "C"));
console.log(convertTemp(32, "C"));
console.log(convertTemp(65, "C"));
console.log(convertTemp(100, "F"));
console.log(convertTemp(-40, "F"));