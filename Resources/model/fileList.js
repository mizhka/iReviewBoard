function FileList(results) {
	this.files = results.files;
	this.getFiles = function() {
		var fil = [];
		for (i = 0; i < this.files.length; i++) {
			fil[i] = {
				id: this.files[i].id,
				source_file: this.files[i].source_file
			}
		}
		return fil;
	}
}