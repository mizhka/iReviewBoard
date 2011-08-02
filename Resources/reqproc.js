function RequestProcessor() {
	this.display = function(requestList, mainWindow, detailedWindow) {
		var tableList = Titanium.UI.createTableView({
			top:44
		});
		var list = new UIRequestList(tableList);
		list.fillTable(requestList.getTitles());

		tableList.addEventListener('click', function(e) {
			reqProcessor.displayDetailed(e, mainWindow, detailedWindow);
		});
		mainWindow.add(tableList);
		return tableList;
	};
	this.displayDetailed = function(e, mainWindow, detailedWindow) {
		api.fetchDiffListJSON(e.rowData.requestid, function(diffList) {
			max = 0;
			imax = -1;
			var diffs = diffList.getDiffs();
			for(i = 0; i < diffs.length; i++) {
				if(max < diffs[i].revision) {
					imax = i;
					max = diffs[i].revision;
				}
			}

			if(imax < 0) {
				alert("Found no diff" + diffs);
			} else {
				api.fetchFileListJSON(e.rowData.requestid, diffs[imax].revision, function(fileList) {
					var uiView = new UIDetailedView(detailedWindow, mainWindow);
					uiView.init(e.rowData, diffList, imax, fileList);
					detailedWindow.open();
					detailedWindow.show();
					
					api.fetchFileDiffJSON(e.rowData.requestid, diffs[imax].revision, fileList.getFiles()[0].id, function(){});
				});
			}
		});
	}
	this.makeMain = function(mainWindow, detailedWindow) {
		api.fetchRequestListJSON( function(reqList) {
			var toolbar = Titanium.UI.createToolbar({
				left: 0,
				top: 0,
				width: 768,
				height: 44
			});

			var repoButton = Titanium.UI.createButton({
				title: 'Repository',
				top: 8,
				left: 8,
				height: 30,
				style: 6,
				width: 72
			});
			toolbar.add(repoButton);

			Titanium.API.debug("[] Start processing of RequestList");
			var tableList = reqProcessor.display(reqList,mainWindow, win2);
			Titanium.API.debug("[] End processing of RequestList");

			mainWindow.add(toolbar);
			mainWindow.add(tableList);
		});
	}
}