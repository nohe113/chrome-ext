 chrome.runtime.onInstalled.addListener(function() { });
 chrome.browserAction.onClicked.addListener(
 	function(tab) { 
 		fetch('http://192.168.178.56:1880/test?url='+tab.url)
		.then(function(response) {
		  // Do stuff with the response
		})
		.catch(function(error) {
		  console.log('Looks like there was a problem: \n', error);
		});
 		//alert(tab.url);
 	});