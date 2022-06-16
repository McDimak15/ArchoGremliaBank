window.onload = function () {
let passport = document.getElementById("Acc")
passport.style.visibility = "hidden"
}	
function getInfo() {
	var username = document.getElementById("name").value
	var password = document.getElementById("password").value
	var currencyoutput = document.getElementById("CurrencyOutput")
	let passport = document.getElementById("Acc")
	let photo = document.getElementById("imgPass")
	let AccName = document.getElementById("AccName")
	let OrtInHave = document.getElementById("OrtInHave")
	let MonthMin = document.getElementById("MonthMin")
	let OrtInAva = document.getElementById("OrtInAva")
	let OrtInMon = document.getElementById("OrtInMon")
	let OrtMin = document.getElementById("OrtMin")
	let RobotaAcc = document.getElementById("RobotaAcc")
	let Strach = document.getElementById("Strach")
	if(username == "29754843" && password == "Dima1256") {
	passport.style.visibility = "visible"
	photo.src = "css/images/Dima.png"
	AccName.innerHTML=("Акаунт Користувача:Дмитро")
	OrtInHave.innerHTML=("Ортків в наявності: 240")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Співак, Політичний Діяч")
	Strach.innerHTML=("Страховки:")
	}
	if(username == "30591884" && password == "Artem2446") {
	passport.style.visibility = "visible"
	photo.src = "css/images/Artem.png"
	AccName.innerHTML=("Акаунт Користувача:Артем")
	OrtInHave.innerHTML=("Ортків в наявності: 240")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Воєнний Діял,інженер,механік")
	Strach.innerHTML=("Страховки:")
	}
	if(username == "23492127" && password == "Maks5839") {
	passport.style.visibility = "visible"
	photo.src = "css/images/Maks.png"
	AccName.innerHTML=("Акаунт Користувача:Максим")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Воєнний, Будівельник")
	Strach.innerHTML=("Страховки:")
	}
	if(username == "294811981" && password == "David1933") {
	passport.style.visibility = "visible"
	photo.src = "css/images/David.png"
	AccName.innerHTML=("Акаунт Користувача:Давид")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Редактор,Дизайнер,сантехнік")
	Strach.innerHTML=("Страховки:")
	}
	if(username == "02848933" && password == "Stasgivno") {
	passport.style.visibility = "visible"
	photo.src = "css/images/Stas.png"
	AccName.innerHTML=("Акаунт Користувача:Стас")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Будівельник, МГП")
	Strach.innerHTML=("Страховки:")
	}
	if(username == "08923457" && password == "Zaharbebra") {
	passport.style.visibility = "visible"
	photo.src = "css/images/Zahar.png"
	AccName.innerHTML=("Акаунт Користувача:Захар")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Робочий Механік, Інженер")
	Strach.innerHTML=("Страховки:")
	}
}