function getInfo() {
	var code = document.getElementById('code').value
	let ServerProxy = atob("MTIzNDU2Nzg5MGJvYg==");
	if(code == ServerProxy) {
		window.location = "Game-Index.html"
        localStorage.setItem("LoggedIn", "true")
		return
	} else {
		alert("incorrect code");
	}
}


