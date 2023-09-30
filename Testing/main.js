var ServerProxyValue = ("MTIzNDU2Nzg5MGJvYg==");
function getInfo() {
	var code = document.getElementById('code').value
	let ServerProxy = atob(ServerProxyValue);
	if(code == ServerProxy) {
		window.location = "Game-Index.html"
        localStorage.setItem("LoggedIn", "true")
		return
	} else {
		alert("incorrect code");
	}
}
