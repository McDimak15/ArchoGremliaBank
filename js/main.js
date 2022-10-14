window.onload = function () {
let passport = document.getElementById("Acc")
let OrtokRate = document.getElementById("OrtokRate")
let Menu = document.getElementById("menu")
let MenuWindow = document.getElementById("MenuWindow")
let NewsWindow = document.getElementById("NewsWindow")
let ShopWindow = document.getElementById("ShopWindow")
let LogoutButton = document.getElementById("LogoutB")
let AdminButton = document.getElementById("AdminB")
let LogoutWindow = document.getElementById("logoutWindow")
let Product = document.getElementById("Product")
passport.style.visibility = "hidden"
Menu.style.visibility = "hidden"
MenuWindow.style.visibility = "hidden"
NewsWindow.style.visibility = "hidden"
ShopWindow.style.visibility = "hidden"
LogoutB.style.visibility = "hidden"
LogoutWindow.style.visibility = "hidden"
Product.style.visibility = "hidden"
OrtokRate.style.visibility = "hidden"
AdminButton.style.visibility = "hidden"
getInfo()
}	
function getInfo() {
	var username = document.getElementById("name").value
	var password = document.getElementById("password").value
	var currencyoutput = document.getElementById("CurrencyOutput")
	let AdminButton = document.getElementById("AdminB")
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
	let Account = localStorage.getItem("Account")
	
	if(username == "29754843" && password == "Dima1256") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	AdminButton.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Dima.png"
	AccName.innerHTML=("Акаунт Користувача:Дмитро")
	OrtInHave.innerHTML=("Ортків в наявності: 240")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Співак, Політичний Діяч")
	Strach.innerHTML=("Страховки:")
	localStorage.setItem("Account", 1)
	inv()
	} else if(Account == "1") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	AdminButton.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Dima.png"
	AccName.innerHTML=("Акаунт Користувача:Дмитро")
	OrtInHave.innerHTML=("Ортків в наявності: 240")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Співак, Політичний Діяч")
	Strach.innerHTML=("Страховки:")
	inv()
	}
	if(username == "30591884" && password == "Artem2446") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	AdminButton.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Artem.png"
	AccName.innerHTML=("Акаунт Користувача:Артем")
	OrtInHave.innerHTML=("Ортків в наявності: 240")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Воєнний Діял,інженер,механік")
	Strach.innerHTML=("Страховки:")
		localStorage.setItem("Account", 2)
	inv()
	} else if(Account == "2") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	AdminButton.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Artem.png"
	AccName.innerHTML=("Акаунт Користувача:Артем")
	OrtInHave.innerHTML=("Ортків в наявності: 240")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Воєнний Діял,інженер,механік")
	Strach.innerHTML=("Страховки:")
	inv()
	}
	if(username == "23492127" && password == "Maks5839") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Maks.png"
	AccName.innerHTML=("Акаунт Користувача:Максим")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Воєнний, Будівельник")
	Strach.innerHTML=("Страховки:")
	localStorage.setItem("Account", 3)
	inv()
	} else if(Account == "3") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Maks.png"
	AccName.innerHTML=("Акаунт Користувача:Максим")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Воєнний, Будівельник")
	Strach.innerHTML=("Страховки:")
	inv()
	}
	if(username == "294811981" && password == "David1933") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	AdminButton.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/David.png"
	AccName.innerHTML=("Акаунт Користувача:Давид")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Редактор,Дизайнер,сантехнік")
	Strach.innerHTML=("Страховки:")
	localStorage.setItem("Account", 4)
	inv()
	} else if(Account == "4") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	AdminButton.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/David.png"
	AccName.innerHTML=("Акаунт Користувача:Давид")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Редактор,Дизайнер,сантехнік")
	Strach.innerHTML=("Страховки:")
	inv()
	}
	if(username == "02848933" && password == "Stasgivno") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Stas.png"
	AccName.innerHTML=("Акаунт Користувача:Стас")
	OrtInHave.innerHTML=("Ортків в наявності: 10")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 0")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Будівельник, МГП")
	Strach.innerHTML=("Страховки:")
	localStorage.setItem("Account", 5)
	inv()
	} else if(Account == "5") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	passport.style.bottom = "320px";
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
	if(username == "75734887" && password == "oleg23213") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Zahar.png"
	AccName.innerHTML=("Акаунт Користувача:Олег")
	OrtInHave.innerHTML=("Ортків в наявності: 0")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 14")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Співак, Збиральщик")
	Strach.innerHTML=("Страховки:")
	localStorage.setItem("Account", 6)
	inv()
	} else if(Account == "6") {
	passport.style.visibility = "visible"
	LogoutB.style.visibility = "visible"
	OrtokRate.style.visibility = "visible"
	passport.style.bottom = "320px";
	photo.src = "css/images/Zahar.png"
	AccName.innerHTML=("Акаунт Користувача:Олег")
	OrtInHave.innerHTML=("Ортків в наявності: 0")
	MonthMin.innerHTML=("Місячні витрати: 0")
	OrtInAva.innerHTML=("Ортків за штрафи: 0")
	OrtInMon.innerHTML=("Щомісячна Зарплата: 14")
	OrtMin.innerHTML=("Ортків витрачено: 0")
	RobotaAcc.innerHTML=("Робота користувача: Співак, Збиральщик")
	Strach.innerHTML=("Страховки:")
	inv()
	}
}
function inv() {
	let login = document.getElementById("loginInAcc")
	let loginWindow = document.getElementById("loginWindow")
	let Menu = document.getElementById("menu")
	login.style.visibility = "hidden"
	loginWindow.style.visibility = "hidden"
	Menu.style.visibility = "visible"
}
function logout() {
	let LogoutWindow = document.getElementById("logoutWindow")
		let passport = document.getElementById("Acc")
	LogoutWindow.style.visibility = "visible"
	passport.style.visibility = "hidden"
	localStorage.setItem("Account", 0)
}
function admin() {
	let passport = document.getElementById("Acc")
	let NewsWindow = document.getElementById("NewsWindow")
	let ShopWindow = document.getElementById("ShopWindow")
	let Product = document.getElementById("Product")
	let AdminText = document.getElementById("AdminText")
	if (AdminText.style.visibility == "visible") {
		passport.style.visibility = "visible"
		NewsWindow.style.visibility = "hidden"
		ShopWindow.style.visibility = "hidden"
		Product.style.visibility = "hidden"
		AdminText.style.visibility = "hidden"
	} else{
		passport.style.visibility = "hidden"
		ShopWindow.style.visibility = "hidden"
		AdminText.style.visibility = "visible"
		Product.style.visibility = "hidden"
		NewsWindow.style.visibility = "hidden"
	}
}
function MenuOpen() {
	let MenuWindow = document.getElementById("MenuWindow")
	let passport = document.getElementById("Acc")
	if (MenuWindow.style.visibility == "visible") {
		MenuWindow.style.visibility = "hidden"
	} else{
		MenuWindow.style.visibility = "visible"
	}
}
function NewsOpen() {
	let passport = document.getElementById("Acc")
	let NewsWindow = document.getElementById("NewsWindow")
	let ShopWindow = document.getElementById("ShopWindow")
	let Product = document.getElementById("Product")
	let AdminText = document.getElementById("AdminText")
	if (NewsWindow.style.visibility == "visible") {
		passport.style.visibility = "visible"
		NewsWindow.style.visibility = "hidden"
		ShopWindow.style.visibility = "hidden"
		Product.style.visibility = "hidden"
		AdminText.style.visibility = "hidden"
	} else{
		passport.style.visibility = "hidden"
		ShopWindow.style.visibility = "hidden"
		NewsWindow.style.visibility = "visible"
		Product.style.visibility = "hidden"
		AdminText.style.visibility = "hidden"
	}
}
function ShopOpen() {
	let passport = document.getElementById("Acc")
	let NewsWindow = document.getElementById("NewsWindow")
	let ShopWindow = document.getElementById("ShopWindow")
	let AdminText = document.getElementById("AdminText")
	if (ShopWindow.style.visibility == "visible") {
		passport.style.visibility = "visible"
		ShopWindow.style.visibility = "hidden"
		NewsWindow.style.visibility = "hidden"
		AdminText.style.visibility = "hidden"
	} else{
		ShopWindow.style.visibility = "visible"
		passport.style.visibility = "hidden"
		NewsWindow.style.visibility = "hidden"
		AdminText.style.visibility = "hidden"
	}
}
function getProd() {
	var Name = document.getElementById("FindByName").value
	let ProductImg = document.getElementById("ProductImg")
	let ProductDesc = document.getElementById("ProductDesc")
	let Product = document.getElementById("Product")
	let ProductName = document.getElementById("ProductName")
	if (Name == "Камінь") {
		Product.style.visibility = "visible"
		ProductImg.src = "css/images/Rock.png"
		ProductDesc.innerHTML=("Ціна 1 орток")
		ProductName.innerHTML=("Камінь")
	}
}