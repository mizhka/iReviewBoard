function DiffList(results) {
	this.diffs = results.diffs;
	this.getDiffs = function() {
		var diff = [];
		for (i = 0; i < this.diffs.length; i++) {
			diff[i] = {
				id: this.diffs[i].id,
				revision: this.diffs[i].revision,
				timestamp: this.diffs[i].timestamp
			}
		}
		Ti.API.debug("[RBModel] Found " + i + " diffs");
		return diff;
	}
}