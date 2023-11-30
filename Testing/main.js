var ServerProxyValue = ("MTIzNDU2Nzg5MGJvYg==");
function getInfo() {
	if(document.getElementById('code').value == atob(ServerProxyValue) {
		window.location = "games.html"
		localStorage.setItem("ProxyStatus", "true")
		localStorage.setItem("AlreadyProxy", "true")
		return
	} else {
		alert("Incorrect");
	}
}
