function hideIssueRequests() {
	var request_span_array = document.querySelectorAll('[translate="AlmaRequestAnyItem"]');
	for (var i=0; i<request_span_array.length; i++) {
		request_button = request_span_array[0].parentNode;
		request_prm_button = request_button.parentNode;
		request_div = request_prm_button.parentNode;
		request_div.style.display = "none";
	}
}
function hideILLRequests() {
	var request_span_array = document.querySelectorAll('[translate="AlmaResourceSharing"]');
	for (var i=0; i<request_span_array.length; i++) {
		request_button = request_span_array[0].parentNode;
		request_prm_button = request_button.parentNode;
		request_div = request_prm_button.parentNode;
		request_div.style.display = "none";
	}
}
setInterval(hideIssueRequests, 2000);
setInterval(hideILLRequests, 2000);