function RequestList(results) {
	this.requests = results;
	this.getTitles = function() {
		var titles = [];
		for (i = 0; i < this.requests.review_requests.length; i++) {
			titles[i] = {
				title: this.requests.review_requests[i].summary,
				request: this.requests.review_requests[i],
				id: this.requests.review_requests[i].id
			};
		}
		return titles;
	}
}