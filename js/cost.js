var SWEAT = document.getElementById("Sweatcoin");

var liveprice = {
	"async": true,
	"scroosDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=sweatcoin&vs_currencies=UAH",
	"method": "GET",
	"headers": {}
}

$.ajax(liveprice).done(function (response){
	console.log(response);
	SWEAT.innerHTML = response.sweatcoin.uah;
})