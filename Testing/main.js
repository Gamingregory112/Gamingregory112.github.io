var ServerProxyValue = ("MTIzNDU2Nzg5MGJvYg==");
function getInfo() {
	var ClientProxy = document.getElementById('code').value
	let ServerProxy = atob(ServerProxyValue);
	if(ClientProxy == ServerProxy) {
		window.location = "Game-Index.html"
		localStorage.setItem("ProxyStatus", "true")
		return
	} else {
		alert("Incorrect");
	}
}

// function getInfo() {
// 	var code = document.getElementById('code').value
// 	let ServerProxy = atob("MTIzNDU2Nzg5MGJvYg==");
// 	if(code == ServerProxy) {
// 		window.location = "Game-Index.html"
//         localStorage.setItem("LoggedIn", "true")
// 		return
// 	} else {
// 		alert("incorrect code");
// 	}
// }
