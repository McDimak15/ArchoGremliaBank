window.onload = function () {
let menu = document.getElementById("menu")
let passport = document.getElementById("imgPass")
menu.style.visibility = "hidden"
passport.style.visibility = "hidden"
}	
var tlo = 1
function getInfo() {
	var username = document.getElementById("name").value
	var password = document.getElementById("password").value
	var currencyoutput = document.getElementById("CurrencyOutput")
	let passport = document.getElementById("imgPass")
	if(username == "Dima" && password == "D01" && tlo == 1) {
		currencyoutput.value = "Твій баланс: 230 ортоків"
	}
	if(username == "Artem" && password == "A01" && tlo == 1) {
			currencyoutput.value = "Твій баланс: 230 ортоків"
	}
	if(username == "Maks" && password == "M02" && tlo == 1) {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "David" && password == "D02" && tlo == 1) {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "Stas" && password == "S03" && tlo == 1) {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "Zahar" && password == "Z03" && tlo == 1) {
			currencyoutput.value = "Твій баланс: 10 ортоків"
	}
	if(username == "Admin" && password == "User1203" && tlo == 1) {
			currencyoutput.value = "Грн: 1001"
	}
	if(username == "29754843" && password == "Dima1256" && tlo == 2) {
	passport.style.visibility = "visible"
	passport.src = "css/images/Dima.png"
	}
	if(username == "30591884" && password == "Artem2446" && tlo == 2) {
	passport.style.visibility = "visible"
	passport.src = "css/images/Artem.png"
	}
	if(username == "23492127" && password == "Maks5839" && tlo == 2) {
	passport.style.visibility = "visible"
	passport.src = "css/images/Maks.png"
	}
	if(username == "294811981" && password == "David1933" && tlo == 2) {
	passport.style.visibility = "visible"
	passport.src = "css/images/David.png"
	}
	if(username == "02848933" && password == "Stasgivno" && tlo == 2) {
	passport.style.visibility = "visible"
	passport.src = "css/images/Stas.png"
	}
	if(username == "08923457" && password == "Zaharbebra" && tlo == 2) {
	passport.style.visibility = "visible"
	passport.src = "css/images/Zahar.png"
	}
}
function OpenMenu () {
	let menu = document.getElementById("menu")
		if (menu.style.visibility == "hidden") {
			menu.style.visibility = "visible";
		} else {
			menu.style.visibility = "hidden";
		}
}
function OpenPassport () {
	tlo = 2
	var NA = document.getElementById("NA")
	var NB = document.getElementById("NB")
	var NC = document.getElementById("NC")
	var ND = document.getElementById("ND")
	var NE = document.getElementById("NE")
	var name = document.getElementById("name")
	var password = document.getElementById("password")
	let placeholderA = document.getElementById("CurrencyOutput")
	NA.innerHTML=("National passports of archo-gremlia");
	NB.innerHTML=("Паспортів: 6");
	NC.innerHTML=("У кожного громадянина є паспорт");
	ND.innerHTML=("Якщо у вас немає доступу до вашого паспорта напишіть артемові або дімі");
	NE.innerHTML=("Перевірити свій паспорт:");
	name.placeholder = "Твій ID паспорта";
	password.placeholder = "Твій пароль паспорта"
	placeholderA.style.visibility = "hidden"
}

function OpenBank () {
	tlo = 1
	let placeholderA = document.getElementById("CurrencyOutput")
	var NA = document.getElementById("NA")
	var NB = document.getElementById("NB")
	var NC = document.getElementById("NC")
	var ND = document.getElementById("ND")
	var NE = document.getElementById("NE")
	var name = document.getElementById("name")
	var password = document.getElementById("password")
	NA.innerHTML=("National bank of archo-gremlia");
	NB.innerHTML=("Валюта: Орток");
	NC.innerHTML=("Ортоків в обігу: 270");
	ND.innerHTML=("Період податків: кожного першого числа кожного місяця");
	NE.innerHTML=("Перевірити свій баланс:");
	name.placeholder = "Твоє ім'я";
	password.placeholder = "Твій пароль банка"
	placeholderA.style.visibility = "visible"
	let passport = document.getElementById("imgPass")
		passport.style.visibility = "hidden"
}
