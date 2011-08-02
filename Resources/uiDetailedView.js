function UIDetailedView(window, parent) {

	this.window = window;
	this.parent = parent;

	this.back = function(){
		window.close();
	}

	this.init = function(rowData, difflist, diffID, filelist) {
		var mainHeader = Ti.UI.createToolbar({
			left: 0,
			top: 0,
			width: 768,
			height: 44,
			translucent:true,
			barColor:'#444'
		});

		var subHeader = Ti.UI.createToolbar({
			left: 0,
			top: mainHeader.height,
			width: 768,
			height: 44
		});
		
		//Labels

		var labelTitle = Ti.UI.createLabel({
			text: rowData.submitter + ' / ' + rowData.activity,
			font:{fontSize:20,fontWeight:'bold'},
			color: '#FFF',
			textAlign:'center',
			width:'auto'
		});
		
		var labelFileName = Ti.UI.createLabel({
			text: filelist.getFiles()[0].source_file,
			textAlign: 'center',
			width: 'auto',
			font:{fontSize:20,fontWeight:'bold'},
			color: '#111'
		});
		
		//Buttons
		
		var buttonDone = Ti.UI.createButtonBar({
			style: Ti.UI.iPhone.SystemButtonStyle.DONE,
			labels: ["Done"],
			right: 8,
			top: 6,
			width: 'auto',
			height: 'auto'
		});
		
		buttonDone.uiview = this;
		
		buttonDone.addEventListener('click',function(e){
			e.source.uiview.back();
		});
		
		//HTML Viewer
		
		var fileView = Ti.UI.createWebView({
			url: "http://demo.reviewboard.org/r/2297/diff/2/fragment/2198/"
		});
		
		mainHeader.add(labelTitle);
		mainHeader.add(buttonDone);
		
		subHeader.add(labelFileName);
		
		window.add(mainHeader);
		window.add(subHeader);
		window.add(fileView);
		
	}
}