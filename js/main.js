function getInfo() {
	var username = document.getElementById("name").value
	var password = document.getElementById("password").value
	var currencyoutput = document.getElementById("CurrencyOutput")
	if(username == "Dima" && password == "D01") {
		currencyoutput.value = "Твій баланс: 230 ортоків"
	}
	if(username == "Artem" && password == "A01") {
			currencyoutput.value = "Твій баланс: 230 ортоків"
	}
	if(username == "Maks" && password == "M02") {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "David" && password == "D02") {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "Stas" && password == "S03") {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "Zahar" && password == "Z03") {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
}
