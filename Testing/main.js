var ServerProxyValueU = ("Admin");
var ServerProxyValueC = ("MTIzNDU2Nzg5MGJvYg==");
function getInfo() {
	if(document.getElementById('code').value == atob(ServerProxyValueC) && document.getElementById('user').value == ServerProxyValueU) {
		window.location = "games.html"
		localStorage.setItem("ProxyStatus", "true")
		localStorage.setItem("AlreadyProxy", "true")
		return
	} else {
		alert("Incorrect");
	}
}
