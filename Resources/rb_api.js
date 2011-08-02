function RBAPI() {

	this.serverName = 'http://demo.reviewboard.org';

	this.commonJSONCall = function(callback,url, title) {
		api.advancedJSONCall(callback,url,title,"application/json","GET", 1);
	}
		
	this.advancedJSONCall = function(callback,url, title, mimetype, httpaction, parsed) {
			
		var client = Titanium.Network.createHTTPClient();

		client.onerror = function(e) {
			alert("error:" + e.error)
		}
		client.onload = function() {
			Titanium.API.debug("[RBAPI] Response to fetch " + title + " has been received with status = " + this.status);
			//Titanium.API.info(this.responseData);
			if (this.status = 200)
				if(parsed)
					callback(JSON.parse(this.responseData));
				else
					callback(this.responseData);
			else
				callback(null);
		}
		client.setRequestHeader("Accept", mimetype);
		client.open(httpaction, this.serverName + url, false);
		client.send();

		Titanium.API.debug("[RBAPI] Request to fetch " + title + " has been sent:" + url);
	};
	this.fetchRequestListJSON = function(callback) {
		this.commonJSONCall( function(json) {
			callback(new RequestList(json));
		},'/api/review-requests/','RequestList');
	};
	this.fetchDiffListJSON = function(requestID, callback) {
		this.commonJSONCall( function(json) {
			callback(new DiffList(json));
		},'/api/review-requests/'+ requestID + '/diffs/','DiffList');
	};
	this.fetchFileListJSON = function(requestID, diffID, callback) {
		this.commonJSONCall( function(json) {
			callback(new FileList(json));
		},'/api/review-requests/'+ requestID + '/diffs/' + diffID + '/files/','FileList');
	};
	this.fetchFileDiffJSON = function(requestID, diffID, fileID, callback) {
		this.advancedJSONCall( function(json) {
			Ti.API.debug(json);
		},'/api/review-requests/'+ requestID + '/diffs/' + diffID + '/files/' + fileID + '/','FileDiff',"text/x-patch","GET",0);
	};
}