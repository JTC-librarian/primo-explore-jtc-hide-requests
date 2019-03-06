function hideIssueRequests() {
	var request_span_array = document.querySelectorAll('[translate="AlmaRequestAnyItem"]');
	for (i=0; i<request_span_array.length; i++) {
		request_button = request_span_array[0].parentNode;
		request_prm_button = request_button.parentNode;
		request_div = request_prm_button.parentNode;
		request_div.style.display = "none";
	}
}
function hideILLRequests() {
	var request_span_array = document.querySelectorAll('[translate="AlmaResourceSharing"]');
	for (i=0; i<request_span_array.length; i++) {
		request_button = request_span_array[0].parentNode;
		request_prm_button = request_button.parentNode;
		request_div = request_prm_button.parentNode;
		request_div.style.display = "none";
	}
}

function hideHTGIRequests() {
	var request_span_array = document.querySelectorAll('span[translate="nui.request.signin_additional"]');
	for (i=0; i<request_span_array.length; i++) {
		request_div1 = request_span_array[0].parentNode;
		request_div2 = request_div1.parentNode;
		request_prm_alert_bar = request_div2.parentNode;
		request_prm_alert_bar.style.display = "none";
	}
}
setInterval(hideIssueRequests, 2000);
setInterval(hideILLRequests, 2000);
setInterval(hideHTGIRequests, 2000);
window.alert("hide");