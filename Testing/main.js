var objPeople = [
	{ 
		code1: "1234567890",
	},
]

function getInfo() {
	var code = document.getElementById('code').value

	for(var i = 0; i < objPeople.length; i++) {
		if(code == objPeople[i].code) {
			window.location = "Game-Index.html"
            localStorage.setItem("LoggedIn", "true")
			return
		}
	}
	alert("incorrect code");
}


