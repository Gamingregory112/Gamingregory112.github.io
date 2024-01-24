window.ServerProxyValueU = ("Admin");
window.ServerProxyValueC = ("MTIzNDU2Nzg5MGJvYg==");
function getInfo() {
	if(document.getElementById('code').value == atob(window.ServerProxyValueC) && document.getElementById('user').value == window.ServerProxyValueU) {
		window.location = "games.html"
		localStorage.setItem("ProxyStatus", "true")
		localStorage.setItem("AlreadyProxy", "true")
		return
	} else {
		if(document.getElementById('code').value == "Forgot" && document.getElementById('user').value == "Password") {
			alert(atob(window.ServerProxyValueC));
			return
		} else {
		alert("Incorrect");
		}
	}
}
